import { useEffect, useLayoutEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useScrollToTop } from '@/hooks/use-scroll-to-top';
import teamPlaceholder from '@/assets/team-placeholder.jpg';
import researchgateIcon from '@/assets/icons/researchgate.svg';

// Team member images
import kim from '@/assets/prof.Kim.jpeg';
import huy from '@/assets/dr.huy.jpg';
import ktoo from '@/assets/Ms. Ktoo.jpg';
import Huyen from '@/assets/Dr. Truong Thi Huyen.jpg';
import Nguyen from '@/assets/ms-chi.jpg';
import Dang from '@/assets/dang.jpeg';
import Hun from '@/assets/Hun Win Thu.jpg';
import May from '@/assets/May.jpg';
import Pant from '@/assets/Ms. Keishu Pant.jpg';

const coreTeam = [
  {
    id: 1,
    name: 'Prof. Dr. Nguyen Thi Kim Oanh',
    role: 'Director',
    department: 'Doctor of Engineering in Environmental Technology and Management, AIT',
    bio: 'Prof. Nguyen Thi Kim Oanh is a distinguished professor and the founding director of the Center for Nexus of Air Quality, Health, Ecosystem, and Climate at AIT.',
    Expertise: 'Air pollution monitoring; Dispersion modeling and receptor modeling; Emission inventory and projection',
    specialties: ['Air Quality', 'Emission Inventory', 'Environmental Health'],
    image: kim,
    viewprofile: 'kim.oanh@ait.ac.th',
    researchgate: 'https://www.researchgate.net/profile/Nguyen-Thi-Oanh',
  },
  {
    id: 2,
    name: 'Dr. Lai Nguyen Huy',
    role: 'Manager',
    department: 'Doctor of Engineering in Environmental Technology and Management, AIT',
    bio: 'Dr. Lai Nguyen Huy is an Air Quality Specialist and Research Specialist at AIT.',
    Expertise: 'Air pollution data systems; Climate and air quality interaction',
    specialties: ['Air Pollution Modeling', 'Monitoring', 'Data Analysis'],
    image: huy,
    viewprofile: 'lainguyenhuy@ait.asia',
    researchgate: 'https://www.researchgate.net/profile/Lai-Huy-2',
  },
  {
    id: 3,
    name: 'Ms. Khing Thwe Oo',
    role: 'Research Associate',
    department: 'Master of Engineering in Environmental Engineering and Management, AIT',
    bio: 'Ms. Khing Thwe Oo is a Research Associate at AIT with expertise in air pollution research.',
    Expertise: 'Administration; Air pollution monitoring',
    specialties: ['Emission Inventory', 'Air Quality Management'],
    image: ktoo,
    viewprofile: 'https://www.linkedin.com/in/kim-oanh/',
  },
  {
    id: 4,
    name: 'Dr. Truong Thi Huyen',
    role: 'Associate Member',
    department: 'Doctor of Philosophy in Environmental Technology and Management, AIT',
    bio: 'Dr. Truong Thi Huyen is an environmental specialist with expertise in air quality research.',
    Expertise: 'Environmental research and analysis',
    specialties: ['Environmental Research', 'Air Quality'],
    image: Huyen,
    viewprofile: 'https://www.linkedin.com/in/kim-oanh/',
  },
  {
    id: 5,
    name: 'Dr. Nguyen Nhat Ha Chi',
    role: 'Associate Member',
    department: 'Doctor of Philosophy in Environmental Technology and Management, AIT',
    bio: 'Dr. Ha Chi Nguyen Nhat is an Air Quality Specialist with expertise in air quality modeling.',
    Expertise: 'Air quality and meteorology modeling; Emission inventory',
    specialties: ['Emission Inventory', 'Air Quality Management'],
    image: Nguyen,
    viewprofile: 'https://www.linkedin.com/in/kim-oanh/',
    researchgate: 'https://www.researchgate.net/profile/Ha-Chi-Nguyen-Nhat'
  },
  {
    id: 6,
    name: 'Mr. Ha Quang Dang',
    role: 'Research Assistant',
    department: 'Bachelor of Engineering in Environmental Engineering, HUST',
    bio: 'Mr. Ha Quang Dang is a Research Assistant at AIT with experience in air pollution monitoring.',
    Expertise: 'Research Assistant_Air pollution monitoring',
    specialties: ['Emission Inventory', 'Air Quality Management'],
    alignTop: true,
    image: Dang,
    viewprofile: 'https://www.linkedin.com/in/kim-oanh/',
  },
  {
    id: 7,
    name: 'Mr. Hun Win Thu',
    role: 'Research Assistant & IoT Engineer',
    department: 'Master of Engineering in Telecommunications, AIT',
    bio: 'Mr. Hun Win Thu is a Research Assistant and IoT Engineer at AIT.',
    Expertise: 'Research Assistant_ICT Support and IoT Engineer',
    specialties: ['Emission Inventory', 'Air Quality Management'],
    alignTop: true,
    image: Hun,
    viewprofile: 'https://www.linkedin.com/in/kim-oanh/',
  },
  {
    id: 8,
    name: 'Ms. May Hnin Aye',
    role: 'Associate Member',
    department: 'Master of Science in Remote Sensing & GIS',
    bio: 'Ms. May Hnin Aye is a GIS Analyst at AIT specializing in remote sensing.',
    Expertise: 'Remote Sensing and GIS Analyst',
    specialties: ['Emission Inventory', 'Air Quality Management'],
    image: May,
    viewprofile: 'https://www.linkedin.com/in/kim-oanh/',
  },
  {
    id: 9,
    name: 'Ms. Keishu Pant',
    role: 'PhD Candidate',
    department: 'Student',
    bio: 'Ms. Keishu Pant specializes in emission inventory and air quality management.',
    Expertise: 'Research Assistant_Air pollution monitoring',
    specialties: ['Emission Inventory', 'Air Quality Management'],
    alignTop: true,
    image: Pant,
    viewprofile: 'https://www.linkedin.com/in/kim-oanh/',
  },
];

interface Member {
  id: number;
  name: string;
  role?: string;
  department?: string;
  bio?: string;
  Expertise?: string;
  specialties?: string[];
  image?: string;
  viewprofile?: string; // may contain email or external link
  researchgate?: string;
}

interface LocationState {
  member?: Member;
}

const slugify = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

const setMeta = (name: string, content: string) => {
  let meta = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute('name', name);
    document.head.appendChild(meta);
  }
  meta.setAttribute('content', content);
};

export default function TeamMember() {
  // Use layout effect for immediate scroll before paint
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { slug } = useParams<{ slug: string }>();
  const location = useLocation();
  const stateMember = (location.state as LocationState)?.member;

  const allMembers: Member[] = [...coreTeam] as Member[];
  const found = slug ? allMembers.find((m) => slugify(m.name) === slug) : undefined;
  const member: Member | undefined = stateMember ?? found;

  // Additional scroll when slug changes (navigating between team members)
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // Scroll to top when navigating between different team members
  useScrollToTop(slug);

  useEffect(() => {
    const name = member?.name ?? 'Team Member';
    document.title = `${name} | AQC Team`;
    const desc = member?.bio
      ? `${member.name} – ${member.bio}`.slice(0, 155)
      : `Profile of ${name} at Air Quality Nexus Center`;
    setMeta('description', desc);

    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', window.location.href);
  }, [member]);

  if (!member) {
    return (
      <>
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-3xl font-bold text-primary">Member not found</h1>
          <p className="mt-2 text-muted-foreground">The profile you are looking for does not exist.</p>
        </main>
      </>
    );
  }

  const email = member.viewprofile && member.viewprofile.includes('@') ? member.viewprofile : undefined;

  return (
    <>
      <main className="py-12 md:py-16">
        <section className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 md:gap-12 md:grid-cols-5">
            {/* Profile image */}
            <aside className="md:col-span-2">
              <img
                src={member.image || teamPlaceholder}
                alt={`${member.name} - ${member.role || 'Team Member'}`}
                loading="lazy"
                className="w-full max-w-md mx-auto aspect-[3/4] object-cover border border-border bg-background shadow"
              />
            </aside>

            {/* Profile details */}
            <article className="md:col-span-3">
              <header>
                <h1 className="text-3xl md:text-4xl font-bold text-primary">{member.name}</h1>
                {member.role && (
                  <p className="mt-2 text-lg italic text-muted-foreground">{member.role}</p>
                )}
                {email && (
                  <p className="text-sm text-muted-foreground mt-1">Email: <a className="text-primary hover:underline" href={`mailto:${email}`}>{email}</a></p>
                )}
                {member.researchgate && (
                  <p className="text-sm mt-2">
                    <a
                      href={member.researchgate}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <span>Find More Research on ResearchGate</span>
                      <img
                        src={researchgateIcon}
                        alt="ResearchGate logo"
                        width={32}
                        height={32}
                        loading="lazy"
                        className="h-8 w-8"
                      />
                    </a>
                  </p>
                )}
              </header>

              {/* Divider */}
              <div className="border-t border-border my-6" />


              {/* Biography */}
              <section className="space-y-4">
                <h2 className="text-xl font-semibold text-foreground">Biography</h2>
                {member.bio &&
                  String(member.bio)
                    .split(/\n{2,}|\r?\n/)
                    .filter(Boolean)
                    .map((para, idx) => (
                      <p key={idx} className="text-justify leading-relaxed text-muted-foreground">{para}</p>
                    ))}
              </section>

              {/* Expertise */}
              {member.Expertise && (
                <section className="mt-8 space-y-4">
                  <h2 className="text-xl font-semibold text-foreground">Expertise</h2>
                  <p className="leading-relaxed text-muted-foreground">{member.Expertise}</p>
                </section>
              )}

            </article>
          </div>
        </section>
      </main>
    </>
  );
}
