import React from "react";

const Footer = () => {
  return (
    <footer className="bg-(--primary-color) text-white py-8">
      <div className="max-w-[90%] mx-auto flex-col flex lg:flex-row justify-between items-center">
        <h4>Copy ©-MasterIT</h4>
        <ul className="flex gap-4">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Contact Us</a>
          </li>
          <li>
            <a href="">About Us</a>
          </li>
          <li>
            <a href="">Term and conditional</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
