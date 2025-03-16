import { useState } from "react";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@radix-ui/react-navigation-menu";
import { Menu, X } from "lucide-react";

import { URLSlug } from "@/config/constants";

import logo from "../../../assets/Logo.svg";

const navlinks = [
  { label: "Home", link: URLSlug.home },
  { label: "About", link: URLSlug.about },
  { label: "Menu", link: URLSlug.menu },
  { label: "Reservations", link: URLSlug.reservations },
  { label: "Order Online", link: URLSlug.orderOnline },
];

const NavigationBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <NavigationMenu className="w-full">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <img src={logo} alt="Little Lemon Logo" className="h-10" />

          {/* Desktop Navigation */}
          <NavigationMenuList className="hidden sm:flex justify-center items-center">
            {navlinks.map((navlink) => (
              <NavigationMenuItem key={navlink.link}>
                <NavigationMenuLink
                  className={navigationMenuTriggerStyle()}
                  href={navlink.link}
                >
                  {navlink.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
            <NavigationMenuItem>
              <NavigationMenuLink
                className={navigationMenuTriggerStyle()}
                href="#login"
              >
                Login
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>

          {/* Mobile Menu Button */}
          <button
            className="sm:hidden p-2"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="sm:hidden">
            <nav className="flex flex-col py-2">
              {navlinks.map((navlink) => (
                <NavigationMenuLink
                  key={navlink.link}
                  className="px-4 py-3 hover:bg-gray-100 text-center"
                  href={navlink.link}
                  onClick={toggleMobileMenu}
                >
                  {navlink.label}
                </NavigationMenuLink>
              ))}
              <NavigationMenuLink
                className="px-4 py-3 hover:bg-gray-100 text-center"
                href="#login"
                onClick={toggleMobileMenu}
              >
                Login
              </NavigationMenuLink>
            </nav>
          </div>
        )}
      </div>
    </NavigationMenu>
  );
};

export default NavigationBar;
