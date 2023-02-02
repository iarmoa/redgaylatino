import React from "react";
import Link from "next/link";

const DropdownSubItem = ({ item }) => (
  <ul className="dropdown-menu animated">
    {item.map((val, i) => (
      <li key={i}>
        <Link href={val.link}>{val.title}</Link>
      </li>
    ))}
  </ul>
);

export default DropdownSubItem;
