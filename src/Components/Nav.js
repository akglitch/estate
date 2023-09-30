import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/react";
import { AcmeLogo } from "./AcmeLogo.js";
import { Link } from "react-router-dom";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Listings", path: "/listings" },
    { label: "Contact", path: "/contact" },
  ];

  const linkStyle = {
    textDecoration: "none", // Remove default underline
    color: "var(--geist-foreground)", // Set the text color for normal state
  };

  return (
    <div className="background">
      
<div className=' background-text container mt-2 mb-5'>
          <h1 class=" font-sans text-2xl mt-7  ">Welcome to Your Dream Home</h1>
          <p>At AKproperties, we understand that finding the perfect home is more than just a transaction; it's about finding a place where memories are created, <br></br>families grow, and dreams come to life. With our expertise and commitment to excellence, we're here to help you turn your real estate dreams into reality</p>
          <a href="#y" class="btn btn-outline-primary">Learn more</a>
          <p className="text-center"></p>
          </div>
    <Navbar isBordered isBlurred={false} shouldHideOnScroll text-black maxWidth="full" onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden m-0 p-0 "
        />
        <NavbarBrand className=" text-black m-0 mx-0">
          <AcmeLogo className="text-black" />
          <p className="logos  m-0 p-0 text-inherit">AKproperties</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="text-black hidden m-0 sm:flex gap-4" justify="center">
        {menuItems.map((item, index) => (
          <NavbarItem key={`${item.path}-${index}`}>
            <Link
              style={linkStyle} // Apply custom styles
              className="hover:text-primary hover:underline"
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
              className={`w-full ${
                index === 2 ? "text-primary" : index === menuItems.length - 1 ? "text-danger" : "text-foreground"
              } hover:text-white`}
              to={item.path}
              size="lg"
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
    </div>
  );
}
