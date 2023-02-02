import React from "react";
import dataSocial from "../../data/Social/social-data.json";
import Link from "next/link";
import Icon from "../Elements/Icon";

const SocialItem = ({ icon, link }) => (
  <li>
    <Link passHref href={link}>
      <a><Icon className={icon} icon={icon} /></a>
    </Link>
  </li>
);

const SocialNav = ({ items }) => (
    <ul className="social-media-dark social-top">
        {dataSocial.filter((val, i) => items ? i < items : i < dataSocial.length).map((social) => (
            <SocialItem key={social.id} link={social.link} icon={social.icon} />
        ))}
    </ul>
);

export default SocialNav;