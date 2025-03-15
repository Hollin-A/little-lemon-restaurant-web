import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@radix-ui/react-navigation-menu";

import { URLSlug } from "@/config/constants";

import logo from "../../../assets/Logo.svg";

const navlinks: { label: string; link: string }[] = [
  { label: "Home", link: URLSlug.home },
  { label: "About", link: URLSlug.about },
  { label: "Menu", link: URLSlug.menu },
  { label: "Reservations", link: URLSlug.reservations },
  { label: "Order Online", link: URLSlug.orderOnline },
];

const NavigationBar = () => {
  return (
    <NavigationMenu className="flex justify-between items-center container mx-auto">
      <img src={logo} alt="Little Lemon Logo" className="h-10" />
      <NavigationMenuList className="flex justify-center py-4 items-center">
        {navlinks.map((navlink) => (
          <NavigationMenuItem key={navlink.link}>
            {/* <a href={navlink.link}> */}
            <NavigationMenuLink
              className={navigationMenuTriggerStyle()}
              href={navlink.link}
            >
              {navlink.label}
            </NavigationMenuLink>
            {/* </a> */}
          </NavigationMenuItem>
        ))}
        <NavigationMenuItem>
          <NavigationMenuLink
            className={navigationMenuTriggerStyle()}
            onClick={() => {}}
          >
            Login
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavigationBar;
