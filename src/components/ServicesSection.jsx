import { Home, Building2, BrushCleaning, DoorOpen, Droplets, ShieldCheck } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Residential Cleaning",
    description: "Regular and general cleaning for houses and apartments.",
  },
  {
    icon: Building2,
    title: "Commercial Cleaning",
    description: "Professional care for offices and businesses.",
  },
  {
    icon: BrushCleaning,
    title: "Detailed Cleaning",
    description: "Thorough cleaning of hard-to-reach places like baseboards, glass, and cobwebs.",
  },
  {
    icon: DoorOpen,
    title: "Move-In / Move-Out",
    description: "Preparation of the premises before or after a move.",
  },
  {
    icon: Droplets,
    title: "Kitchen & Bathroom",
    description: "Deep cleaning of kitchens and bathrooms, top to bottom.",
  },
  {
    icon: ShieldCheck,
    title: "Disinfecting",
    description: "Sanitizing high-touch areas for a healthier space.",
  },
];

export const ServicesSection = () => {
  return (
    <section
      id="about"
      className="py-24 px-4 flex flex-col relative bg-primary"
    >
      {" "}
      <div className="container mx-auto-max-w-5xl">
        <h2 className="text-1xl md:text-2xl font-semibold tracking-tight mb-4">
          Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {services.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="flex flex-col items-center gap-3 p-6 rounded-lg bg-card"
            >
              <Icon className="w-8 h-8 text-primary-foreground" />
              <h3 className="font-semibold text-sm">{title}</h3>
              <p className="text-sm">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};