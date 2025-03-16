import FooterSubtitle from "@/components/commons/FooterSubtitle";
import verticalLogo from "../../../assets/logo-vertical-green.png";
import { URLSlug } from "@/config/constants";

const footerSections = [
  {
    title: "Navigation",
    mobileScreensHidden: true,
    children: [
      { label: "Home", link: URLSlug.home },
      { label: "About", link: URLSlug.about },
      { label: "Menu", link: URLSlug.menu },
      { label: "Reservations", link: URLSlug.reservations },
      { label: "Order Online", link: URLSlug.orderOnline },
      { label: "Login" },
    ],
  },
  {
    title: "Contact",
    mobileScreensHidden: false,
    children: [
      { label: "1234 Lemon St, Chicago, IL 60601" },
      { label: "(312) 555-1234" },
      { label: "info@littlelemon.com" },
    ],
  },
  {
    title: "Social Media",
    mobileScreensHidden: false,
    children: [
      { label: "Facebook", link: "#" },
      { label: "Twitter", link: "#" },
      { label: "TikTok", link: "#" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="w-full bg-secondary mt-10 sm:py-10 py-6">
      <div className="container mx-auto">
        <div className="grid sm:grid-cols-4 grid-cols-1 gap-4">
          <div className="sm:justify-center sm:flex hidden">
            <img
              src={verticalLogo}
              alt="little lemon logo - vertical"
              className="h-60 aspect-auto object-fill"
            />
          </div>
          {footerSections.map((section) => (
            <div
              className={`${section.mobileScreensHidden && "sm:block hidden"}`}
              key={section.title}
            >
              <FooterSubtitle title={section.title} />
              <div className="mt-5 flex flex-col sm:gap-1.5 gap-0.5 font-light">
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
