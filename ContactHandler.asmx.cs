using System;
using System.Net.Mail;
using System.Web;
using System.Web.Services;
using System.Text.Json;
using System.IO;

namespace AirQualityNexus
{
    /// <summary>
    /// Contact form handler for ASP.NET/IIS servers
    /// Alternative to PHP if AIT uses Windows/IIS infrastructure
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    [System.Web.Script.Services.ScriptService]
    public class ContactHandler : System.Web.Services.WebService
    {
        [WebMethod]
        [System.Web.Services.WebMethod(EnableSession = true)]
        public string SubmitContactForm(string name, string email, string organization, string subject, string message)
        {
            try
            {
                // Validate inputs
                if (string.IsNullOrEmpty(name) || string.IsNullOrEmpty(email) || 
                    string.IsNullOrEmpty(subject) || string.IsNullOrEmpty(message))
                {
                    throw new Exception("All required fields must be filled");
                }

                // Validate email format
                try
                {
                    var addr = new System.Net.Mail.MailAddress(email);
                    if (addr.Address != email)
                        throw new Exception("Invalid email format");
                }
                catch
                {
                    throw new Exception("Invalid email format");
                }

                // Rate limiting
                if (Session["LastSubmission"] != null)
                {
                    var lastSubmission = (DateTime)Session["LastSubmission"];
                    if (DateTime.Now.Subtract(lastSubmission).TotalMinutes < 1)
                    {
                        throw new Exception("Please wait before submitting another message");
                    }
                }

                // Create email
                MailMessage mail = new MailMessage();
                mail.From = new MailAddress("noreply@ait.ac.th");
                mail.To.Add("airqualitynexus@ait.ac.th");
                mail.Subject = "Contact Form Submission: " + subject;
                mail.Body = $@"
New contact form submission from AIT Air Quality Nexus website:

Name: {name}
Email: {email}
Organization: {organization}
Subject: {subject}

Message:
{message}

---
Submitted from: {HttpContext.Current.Request.Url.Host}
IP Address: {HttpContext.Current.Request.UserHostAddress}
User Agent: {HttpContext.Current.Request.UserAgent}
Timestamp: {DateTime.Now:yyyy-MM-dd HH:mm:ss}
";
                mail.ReplyToList.Add(email);

                // Send email using SMTP
                SmtpClient smtp = new SmtpClient();
                smtp.Host = "localhost"; // Or AIT's SMTP server
                smtp.Port = 25;
                smtp.EnableSsl = false;
                smtp.Send(mail);

                // Log successful submission
                string logEntry = $"{DateTime.Now:yyyy-MM-dd HH:mm:ss} - Contact form submission from: {email} ({name})\n";
                File.AppendAllText(Server.MapPath("~/App_Data/contact_log.txt"), logEntry);

                // Update session
                Session["LastSubmission"] = DateTime.Now;

                return JsonSerializer.Serialize(new { success = true, message = "Your message has been sent successfully!" });
            }
            catch (Exception ex)
            {
                // Log error
                string errorLog = $"{DateTime.Now:yyyy-MM-dd HH:mm:ss} - Error: {ex.Message}\n";
                File.AppendAllText(Server.MapPath("~/App_Data/contact_errors.txt"), errorLog);

                return JsonSerializer.Serialize(new { success = false, error = ex.Message });
            }
        }
    }
}
