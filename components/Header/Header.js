import React, { useState, useEffect, useCallback } from "react";
import AttributeNav from "../Navs/AttributeNav";
import SocialNav from "../Navs/SocialNav";
import MainLogo from "../MainLogo";
import Menu from "../Navs/Menu";

const Header = ({ social }) => {
  const [fixed, setFixed] = useState(false);
  const [collapse, setCollapse] = useState(false);
  const showMenu = () => {
    setCollapse(!collapse);
    const menu = document.getElementById("navbar-menu");
    collapse ? menu.classList.remove("in") : menu.classList.add("in");
  };

  const handleScroll = useCallback(() => {
    if (window.pageYOffset > 34) {
      setFixed(true);
    } else {
      setFixed(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <>
      <nav
        className={
          "navbar navbar-default navbar-fixed white bootsnav on no-full " 
        }
      >
        <div className="container">
          <AttributeNav>
            <SocialNav items={social} />
          </AttributeNav>
          <MainLogo showMenu={showMenu} />
          <Menu />
        </div>
      </nav>
    </>
  );
};

export default Header;