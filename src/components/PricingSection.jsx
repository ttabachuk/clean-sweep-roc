export const PricingSection = () => {
  return (
    <section
      id="pricing"
      className="py-24 px-4 flex flex-col relative"
    >
      {" "}
      <div className="container mx-auto-max-w-5xl">
        <h2 className="text-1xl md:text-2xl font-semibold tracking-tight mb-4">
          A note on pricing
        </h2>
        <div className="space-y-4">
          <p>
            There will be a $50 non-refundable payment to hold your appointment. 
            Final payment is due on the day of service by credit or debit card, or Zelle. 
            We no longer accept checks, but we appreciate your understanding.</p>
        </div>
      </div>
    </section>
  );
};