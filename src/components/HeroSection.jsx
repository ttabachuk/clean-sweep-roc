import roomImg from "../assets/room.jpeg";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative py-12 px-4 flex flex-col items-center justify-center bg-cover bg-center min-h-[70vh] lg:min-h-[80vh] text-secondary"
      style={{ backgroundImage: `url(${roomImg})` }}
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hi, I'm</span>
            <span className="opacity-0 animate-fade-in-delay-1">
              {" "}
              Lena
            </span>
          </h1>
          <p className="text-1xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-2">
            I started <b>clean sweep roc</b> because I believe cleaning should be more than a checklist — it's peace of mind. My team and I show up, do honest work, and treat your space like it matters.
          </p>
          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#about" className="button bg-secondary">
              view more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
