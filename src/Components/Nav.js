import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/react";
import { AcmeLogo } from "./AcmeLogo.js";
import { Link} from "react-router-dom"; // Import Link and Outlet from React Router

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Home",
    "About",
    "Listings",
    "Contact",
    
  ];

  return (
    <Navbar      maxWidth="full" onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent   >
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden m-0 p-0 "
        
        />
        <NavbarBrand  className="m-0 mx-0">
          <AcmeLogo />
          <p className="logos font-bold m-0 p-0 text-inherit">AK properties</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden m-0 sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" aria-current="page" to="/Home">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground"  to="/about">
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" to="/listings">
            Listings
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" to="/contact">
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              className="w-full"
              to={`/${item.toLowerCase()}`} // Use the item as part of the URL
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
