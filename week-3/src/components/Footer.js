import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>©Copyright {year} by Jamie. All rights reserved.</p>
    </footer>
  );
};
export default Footer;
