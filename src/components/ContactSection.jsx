import { Phone, MessageSquare, Mail } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto-max-w-5xl">
        <h2 className="text-1xl md:text-2xl font-semibold tracking-tight mb-4">
          Let's get in touch
        </h2>
        <p className="">
          Feel free to reach out to me via phone, sms, or email. I’d love to get
          in touch and help you with your project!
        </p>
        <div className="flex flex-row justify-center items-center gap-8 mt-8">
          <a href="tel:+1234567890" aria-label="Call">
            <Phone className="w-6 h-6" />
          </a>
          <a href="sms:+1234567890" aria-label="Text">
            <MessageSquare className="w-6 h-6" />
          </a>
          <a href="mailto:you@example.com" aria-label="Email">
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};
