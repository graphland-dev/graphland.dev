import ContactForm from "@/components/ContactForm";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from "@/components/icons";
import ScheduleButton from "@/components/ScheduleButton";
import GlassIcon from "@/components/ui/GlassIcon";

export default function ContactPage() {
  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/graphland-dev/",
      icon: LinkedInIcon,
    },
    { name: "X", href: "https://x.com/graphlandHQ", icon: TwitterIcon },
    {
      name: "Facebook",
      href: "https://www.facebook.com/GraphlandHQ",
      icon: FacebookIcon,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/graphland.dev",
      icon: InstagramIcon,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Let&apos;s build something
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">
              great together!
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your vision into reality? We&apos;re here to help
            you create something extraordinary that drives results.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="pb-20 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
            {/* Contact Information */}
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-bold text-white mb-8">
                  Get in touch
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  We&apos;d love to hear about your project and explore how we
                  can work together to bring your ideas to life.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-8">
                <div className="flex items-center gap-10">
                  <GlassIcon
                    icon={<EmailIcon className="size-6 text-white" />}
                    color={"blue"}
                    label={"Email Address"}
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">
                      Email
                    </h3>
                    <p className="text-gray-300 mb-1">contact@graphland.dev</p>
                    <p className="text-gray-400 text-sm">
                      We&apos;ll respond within 24 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-10">
                  <GlassIcon
                    icon={<LocationIcon className="size-6 text-white" />}
                    color={"purple"}
                    label={"Email Address"}
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">
                      Physical Office
                    </h3>
                    <p className="text-gray-300 mb-1">
                      Prefer doing things in person?
                    </p>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Plot #2675, Road D-1/A, Ranabhola, Dhaka 1230,
                      <br />
                      Bangladesh
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-10">
                  <GlassIcon
                    icon={<ChatIcon className="size-6 text-white" />}
                    color={"green"}
                    label={"Email Address"}
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">
                      Let&apos;s chat
                    </h3>
                    <p className="text-gray-300 mb-1">
                      Schedule a consultation
                    </p>
                    <p className="text-gray-400 text-sm">
                      30-minute discovery call
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div id="social-links">
                <h3 className="text-lg font-semibold text-white mb-4">
                  Follow us
                </h3>
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all duration-200"
                      title={social.name}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <social.icon className="w-5 h-5 text-white" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Meeting Section */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-white/20 text-center">
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Skip the back and forth
              </h2>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
                Sometimes a quick conversation is worth a thousand emails.
                Let&apos;s jump on a call to discuss your project, timeline, and
                how we can work together to bring your vision to life.
              </p>
            </div>

            <ScheduleButton />

            <p className="text-sm text-gray-400 mt-4">
              Choose a time that works for you. We&apos;ll send you a calendar
              invite with all the details.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

// Icon Components
function EmailIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  );
}

function LocationIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  );
}

function ChatIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
      />
    </svg>
  );
}
