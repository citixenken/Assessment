import React, { useState } from "react";
// import Logo from "../../assets/faithplus-main-logo.png";

function Navbar() {
  const [open, setOpen] = useState(false);

  function toggleHamburgerButtonClick() {
    setOpen(!open);

    const nav = document.getElementById("menu");
    nav.classList.toggle("flex");
    nav.classList.toggle("hidden");
  }

  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <div>
      {/* navbar */}
      <nav className="relative container mx-auto p-6">
        {/* flex container */}
        <div className="flex items-center justify-between">
          {/* logo */}
          {/* <div className="flex pt-2 w-60">
            <a href="#">
              <img src={Logo} alt="Faith-Plus Logo" className="rounded-2xl" />
            </a>
          </div> */}
          {/* navbar items */}
          <div className="hidden md:flex space-x-12">
            <a href="#" className="hover:text-darkGrayishBlue">
              <span>About Us</span>
            </a>
            <a href="#" className="hover:text-darkGrayishBlue">
              <span>Services</span>
            </a>
            <a href="#" className="hover:text-darkGrayishBlue">
              <span>Schedule Appointment</span>
            </a>
            <a href="#" className="hover:text-darkGrayishBlue">
              <span>Location</span>
            </a>
            <a href="#" className="hover:text-darkGrayishBlue">
              <span>Contact Us</span>
            </a>
          </div>
          {/* take a tour button */}
          <button
            href="#"
            className="hidden md:block p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight"
            onClick={handleLogout}
          >
            Logout
          </button>

          {/* hamburger Icon */}
          <button
            id="menu-btn"
            className={
              open
                ? "open block hamburger md:hidden focus:outline-none"
                : "block hamburger md:hidden focus:outline-none"
            }
            onClick={toggleHamburgerButtonClick}
          >
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
        </div>
        {/* mobile menu */}
        <div className="md:hidden">
          <div
            id="menu"
            className="absolute flex-col items-center hidden self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center rounded-2xl left-6 right-6 drop-shadow-md"
          >
            <a href="#" className="hover:text-darkGrayishBlue">
              About Us
            </a>
            <a href="#" className="hover:text-darkGrayishBlue">
              Services
            </a>
            <a href="#" className="hover:text-darkGrayishBlue">
              Schedule Appointment
            </a>
            <a href="#" className="hover:text-darkGrayishBlue">
              Location
            </a>
            <a href="#" className="hover:text-darkGrayishBlue">
              Contact Us
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;