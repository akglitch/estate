import React from "react";

import {  Navbar,   NavbarBrand,   NavbarContent, Link,   NavbarItem,   NavbarMenuToggle,  NavbarMenu,  NavbarMenuItem} from "@nextui-org/react";
import {AcmeLogo} from "./AcmeLogo.js";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    

    
    <Navbar  isBlurred={false}    maxWidth={"fluid"}  onMenuOpenChange={setIsMenuOpen}>
    <NavbarContent>
      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="sm:hidden"
      />
      <NavbarBrand>
        <AcmeLogo />
        <p className=" logos font-bold text-inherit">AK properties</p>
      </NavbarBrand>
    </NavbarContent>

    <NavbarContent className="hidden sm:flex gap-4" justify="center">
      <NavbarItem>
        <Link color="foreground" href="#">
          Home
        </Link>
      </NavbarItem>
      <NavbarItem isActive>
        <Link href="#" aria-current="page">
          About
        </Link>
      </NavbarItem>
      <NavbarItem>
        <Link color="foreground" href="#">
          Listings
        </Link>
      </NavbarItem>
      <NavbarItem>
        <Link color="foreground" href="#">
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
            href="#"
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
