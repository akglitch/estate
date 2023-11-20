import React from "react";

function Header() {
  return (
    <div className="container">
    <div className="bg-cover bg-center h-screen flex items-center justify-start">
      <div className="text-black text-left mx-8">
      <h1 className="display-5  font-sans mb-4">Akproperties</h1><hr className="w-25"></hr>
        <h1 className="text-4xl  font-sans mb-4">Find Your Dream Home</h1>
        <p className="text-lg mb-8">
          Explore a curated selection of premium homes in prime locations. From
          modern city apartments to luxurious countryside estates, we have the
          perfect property for every lifestyle. Let us help you find your dream
          home today.
        </p>
        <a href="#y" className="btn btn-outline-dark">
                View Properties
              </a>
        <hr className="my-8 border-t border-black" />
        <p className="text-sm">
          Contact us for personalized assistance and expert guidance in your
          real estate journey.
        </p>
      </div>
    </div>
    </div>
  );
}

export default Header;
