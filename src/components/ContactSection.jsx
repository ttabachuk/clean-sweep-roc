import { Phone, MessageSquare, Mail, } from "lucide-react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { PiHeartLight } from "react-icons/pi";

const socials = [
  { icon: MessageSquare, href: "sms:+15854069936", label: "Text"},
  { icon: Mail, href: "mailto:cleansweeproc@gmail.com", label: "Email"},
  { icon: FaFacebook, href: "https://www.facebook.com/people/Clean-Sweep-ROC/61577825017529/", label: "Facebook"},
  { icon: FaInstagram, href: "https://www.instagram.com/clean_sweep_roc", label: "Instagram"},
]

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary">
      {" "}
      <div className="container mx-auto-max-w-5xl">
        <h2 className="text-1xl md:text-2xl font-semibold tracking-tight mb-4">
          Let's get in touch
        </h2>
        <span>
          <p>
          Feel free to reach out to me via sms, email, or social media. I’d love to get
          in touch and help you with your cleaning needs <PiHeartLight size={20} className="inline-block" />
        </p>
        </span>
        
        <div className="flex flex-row justify-center items-center gap-8 mt-8">
          {socials.map(({ icon: Icon, href, label }) => (
            <a key={label} href={href} aria-label={label}>
              <Icon size={20} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
