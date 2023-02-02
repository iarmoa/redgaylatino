import React from "react";
import Link from "next/link";
import DropdownSubItem from "./DropdownSubItem";

const DropdownItem = ({ item }) => {

  const handleOpen = (e) => {
    const el = e.target;
    if (el.nextSibling) {
      e.preventDefault();
      if (el.parentElement.classList.contains("on")) {
        el.parentElement.classList.add("on");
        el.nextSibling.style.display = "block";
      } else {
        el.nextSibling.style.display = "none";
        el.parentElement.classList.remove("on");
        el.nextSibling.style.opacity = 1;
        el.nextSibling.classList.add("fadeIn");
      }
    }
  };

  return (
    <ul className="dropdown-menu animated">
      {item.map((val, i) => (
        <li key={i} className="dropdown">
          <Link
            className={val.subMenu ? "dropdown-toggle" : null}
            data-toggle="dropdown"
            href={val.link}
            onClick={(e) => handleOpen(e)}
          >
            {val.title}
          </Link>
          {val.subMenu ? <DropdownSubItem item={val.subMenu} /> : null}
        </li>
      ))}
    </ul>
  );
};

export default DropdownItem;
