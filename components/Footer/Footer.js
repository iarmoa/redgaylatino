import React from "react";
import FooterCopyright from "./FooterCopyrigth";

const Footer = () => (
  <>
    <footer className="footer" id="footer-fixed">
      <FooterCopyright />
    </footer>
    <div className="footer-height" style={{ height: "100px" }}></div>
  </>
);

export default Footer;
