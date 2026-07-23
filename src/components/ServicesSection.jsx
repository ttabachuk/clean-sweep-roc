import { PiHouseLineLight, PiBuildingOfficeLight, PiDoorOpenLight, PiBathtubLight, PiSprayBottleLight} from "react-icons/pi";
import { GiVacuumCleaner } from "react-icons/gi";

const services = [
  {
    icon: PiHouseLineLight,
    title: "Residential Cleaning",
    description: "Regular and general cleaning for houses and apartments.",
  },
  {
    icon: PiBuildingOfficeLight,
    title: "Commercial Cleaning",
    description: "Professional care for offices and businesses.",
  },
  {
    icon: GiVacuumCleaner,
    title: "Detailed Cleaning",
    description: "Thorough cleaning of hard-to-reach places like baseboards, glass, and cobwebs.",
  },
  {
    icon: PiDoorOpenLight,
    title: "Move-In / Move-Out",
    description: "Preparation of the premises before or after a move.",
  },
  {
    icon: PiBathtubLight,
    title: "Kitchen & Bathroom",
    description: "Deep cleaning of kitchens and bathrooms, top to bottom.",
  },
  {
    icon: PiSprayBottleLight,
    title: "Disinfecting",
    description: "Sanitizing high-touch areas for a healthier space.",
  },
];

export const ServicesSection = () => {
  return (
    <section
      id="services"
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
              className="flex flex-col items-center gap-3 p-6 rounded-lg bg-card text-sm"
            >
              <Icon className="w-8 h-8 text-primary-foreground" />
              <h3 className="font-semibold">{title}</h3>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};