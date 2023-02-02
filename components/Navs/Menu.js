import React from "react";
import dataNav from "../../data/Navbar/navbar-data.json";
import useWindowResizeListener from "../../helpers/useWindowResizeListener";
import MenuItem from "./MenuItem";

const Menu = () => {

  useWindowResizeListener();
  
  const handleHover = (e) => {
    e.preventDefault();
    const width = window.innerWidth;
    if (width < 991) {
        const el = e.target;
        if (e.target.nextSibling) {
            if (el.parentElement.classList.contains("on")) {
                el.nextSibling.style.display = "none";
                el.parentElement.classList.remove("on");
                el.nextSibling.style.opacity = 0;
                el.nextSibling.classList.remove("fadeIn");
            } else {
                el.parentElement.classList.add("on");
                el.nextSibling.style.display = "block";
                el.nextSibling.style.opacity = 1;
                el.nextSibling.classList.add("fadeIn");
            }
        }
    }
  };

  return (
    <div className="collapse navbar-collapse" id="navbar-menu">
      <ul className="nav navbar-nav" data-in="fadeIn" data-out="fadeOut">
        {dataNav.map((item, i) => {
          const hasSubMenu = item.subMenu && item.subMenu.length > 0
          const menuClass = [];
          
          if(hasSubMenu)
            menuClass.push("dropdown");

          if(item.megaMenu)
            menuClass.push("megamenu-fw");

          return (
            <li className={ menuClass.join(" ") } onMouseOver={ (e) => handleHover(e) } key={i}>
              <MenuItem item = { item }/>
            </li>
          )
        })}
      </ul>
    </div>
  );
};

export default Menu;
