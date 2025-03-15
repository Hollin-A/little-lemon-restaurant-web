import FooterSubtitle from "@/components/commons/FooterSubtitle";
import verticalLogo from "../../../assets/logo-vertical-green.png";

const footerSections = [
  {
    title: "Navigation",
    children: [
      { label: "Home", link: "/home" },
      { label: "About", link: "/about" },
      { label: "Menu", link: "/menu" },
      { label: "Reservations", link: "/reservations" },
      { label: "Order Online", link: "/order-online" },
      { label: "Login" },
    ],
  },
  {
    title: "Contact",
    children: [
      { label: "1234 Lemon St, Chicago, IL 60601" },
      { label: "(312) 555-1234" },
      { label: "info@littlelemon.com" },
    ],
  },
  {
    title: "Social Media",
    children: [
      { label: "Facebook", link: "#" },
      { label: "Twitter", link: "#" },
      { label: "TikTok", link: "#" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="w-full bg-secondary mt-10 py-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-4 gap-4">
          <div className="flex justify-center">
            <img
              src={verticalLogo}
              alt="little lemon logo - vertical"
              className="h-60 aspect-auto object-fill"
            />
          </div>
          {footerSections.map((section) => (
            <div className="" key={section.title}>
              <FooterSubtitle title={section.title} />
              <div className="mt-5 flex flex-col gap-1.5 font-light">
                {section.children.map((item) => (
                  <div key={item.label}>
                    {item.link ? (
                      <a
                        href={item.link}
                        className="hover:text-primary transition-colors duration-200"
                      >
                        {item.label}
                      </a>
                    ) : (
                      <p>{item.label}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
