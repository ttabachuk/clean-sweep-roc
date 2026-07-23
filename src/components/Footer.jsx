const navItems = [
  { name: "home", href: "#hero" },
  { name: "about", href: "#about" },
  { name: "services", href: "#services" },
  { name: "pricing", href: "#pricing" },
  { name: "contact", href: "#contact" },
];


export const Footer = () => {
  return (
    <footer className="py-10 px-4 bg-secondary">
      <div className="text-foreground/80 container mx-auto flex flex-col items-center gap-6 text-center">
        <p className="">clean sweep roc &copy; {new Date().getFullYear()}</p>
        <nav className="flex flex-wrap justify-center gap-6">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="hover:text-primary transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
};
