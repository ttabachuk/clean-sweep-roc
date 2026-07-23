export const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-24 px-4 flex flex-col relative"
    >
      {" "}
      <div className="container mx-auto-max-w-5xl">
        <h2 className="text-1xl md:text-2xl font-semibold tracking-tight mb-4">
          A few words about our team
        </h2>
        <div className="space-y-4">
          <p>
            We help keep homes and offices in Rochester clean and cared for.
          </p>
          <p>
            We use quality products, pay attention to detail, and work hard to earn the trust of those we clean for. We're local, and we treat every space like it matters — because it does.
          </p>
          <p>
            Have a project in mind? Reach out and we'll put together a quote for your specific needs.
          </p>
        </div>
      </div>
    </section>
  );
};
