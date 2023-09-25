import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/react";
import { AcmeLogo } from "./AcmeLogo.js";
import { Link } from "react-router-dom";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { label: "Home", path: "/" }, // Use the root path for "Home"
    { label: "About", path: "/about" },
    { label: "Listings", path: "/listings" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <Navbar maxWidth="full" onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden m-0 p-0 "
        />
        <NavbarBrand className="m-0 mx-0">
          <AcmeLogo />
          <p className="logos font-bold m-0 p-0 text-inherit">AK properties</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden m-0 sm:flex gap-4" justify="center">
        {menuItems.map((item, index) => (
          <NavbarItem key={`${item.path}-${index}`}>
            <Link
              color="foreground"
              to={item.path}
            >
              {item.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.path}-${index}`}>
            <Link
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              className="w-full"
              to={item.path}
              size="lg"
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
