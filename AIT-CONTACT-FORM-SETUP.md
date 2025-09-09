# Contact Form Setup Guide for AIT Server

## Current Setup (Development/Testing)
Currently using a dual-mode contact form that:
- **GitHub Pages/Testing**: Uses EmailJS as fallback
- **Production (airqc.ait.ac.th)**: Will automatically switch to PHP handler

## When Moving to AIT Server

### 1. Upload Files to AIT Server
Upload these files to your AIT web server:
```
public/contact-handler.php  → Place in your website's public directory
src/components/contact/ContactForm.tsx → Already configured for dual mode
```

### 2. Configure Email Settings with AIT Helpdesk
Ask AIT helpdesk about:

**Email Server Configuration:**
```
- Is PHP mail() function enabled?
- SMTP server details if needed
- Any security restrictions on contact forms?
- Preferred contact form implementation method?
```

**Security Settings:**
```
- File permissions for contact-handler.php (usually 644)
- Log file permissions for contact_log.txt and contact_errors.txt
- Any additional security measures required
```

### 3. Test the PHP Handler
After uploading, test the contact form:

1. **Manual Test**: Submit a test message through the contact form
2. **Check Logs**: Look for these files (created automatically):
   - `contact_log.txt` - Successful submissions
   - `contact_errors.txt` - Error messages
3. **Verify Email Delivery**: Confirm emails reach `airqualitynexus@ait.ac.th`

### 4. EmailJS Configuration (Keep for Testing)
If you want to keep EmailJS for testing environments, update these in ContactForm.tsx:

```typescript
// Replace these with your actual EmailJS credentials:
'service_contact',    // Your EmailJS service ID
'template_contact',   // Your EmailJS template ID  
'your_public_key'     // Your EmailJS public key
```

### 5. Advanced Configuration (Optional)

**Custom SMTP (if mail() doesn't work):**
```php
// Add to contact-handler.php if needed
require_once 'PHPMailer/PHPMailer.php';
require_once 'PHPMailer/SMTP.php';

$mail = new PHPMailer(true);
$mail->isSMTP();
$mail->Host = 'smtp.ait.ac.th';  // AIT SMTP server
$mail->SMTPAuth = true;
$mail->Username = 'your_username';
$mail->Password = 'your_password';
```

**Rate Limiting (prevent spam):**
```php
// Add session-based rate limiting
session_start();
$submission_time = $_SESSION['last_submission'] ?? 0;
if (time() - $submission_time < 60) {
    throw new Exception('Please wait before submitting another message');
}
$_SESSION['last_submission'] = time();
```

## File Structure on AIT Server
```
/var/www/html/airqc/          (or similar)
├── contact-handler.php       ← Upload this
├── index.html               
├── assets/
├── static/
└── logs/                    ← Will be created automatically
    ├── contact_log.txt      ← Successful submissions
    └── contact_errors.txt   ← Error logs
```

## Benefits of This Approach
- ✅ **Automatic Detection**: Form automatically uses PHP when on airqc.ait.ac.th
- ✅ **No External Dependencies**: Direct email sending through AIT servers
- ✅ **Professional**: Emails come from AIT domain
- ✅ **Reliable**: Uses institutional email infrastructure
- ✅ **Cost-Free**: No third-party service fees
- ✅ **Logging**: Built-in submission and error logging
- ✅ **Security**: Input sanitization and spam prevention

## Troubleshooting
If emails aren't being sent:
1. Check `contact_errors.txt` for error messages
2. Verify PHP mail() is enabled: `php -m | grep mail`
3. Test with a simple PHP mail script
4. Contact AIT helpdesk for SMTP configuration

## Testing Checklist
- [ ] PHP handler responds correctly
- [ ] Form validation works
- [ ] Emails reach airqualitynexus@ait.ac.th
- [ ] Error handling displays properly  
- [ ] Success messages show correctly
- [ ] Log files are being created
- [ ] No security vulnerabilities
