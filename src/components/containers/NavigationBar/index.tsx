import React from "react";

import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@radix-ui/react-navigation-menu";

const navlinks: { label: string; link: string }[] = [
  { label: "Home", link: "/home" },
  { label: "About", link: "/about" },
  { label: "Menu", link: "/menu" },
  { label: "Reservations", link: "/reservations" },
  { label: "Order Online", link: "/order-online" },
];

type Props = {};

const NavigationBar = (props: Props) => {
  return (
    <NavigationMenu>
      <NavigationMenuList className="flex">
        {navlinks.map((navlink) => (
          <NavigationMenuItem key={navlink.link}>
            <a href={navlink.link}>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                {navlink.label}
              </NavigationMenuLink>
            </a>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavigationBar;
