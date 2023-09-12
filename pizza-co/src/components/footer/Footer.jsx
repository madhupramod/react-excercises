import React from "react";
import "./Footer.css";
function Footer() {
  const openHour = 11;
  const closeHour = 22;
  const currentHour = new Date().getHours();

  const isOpen = openHour < currentHour && currentHour < closeHour;

  const msg = isOpen
    ? `We're open until ${closeHour}:00. Come visit us or order online`
    : `We are currently closed. Please comeback between ${openHour}:00 and ${closeHour}:00`;
  return (
    <footer className="footer">
      <span className="msg">{msg}</span>
      {isOpen && <button className="footer-btn">Order online!</button>}
    </footer>
  );
}

export default Footer;
