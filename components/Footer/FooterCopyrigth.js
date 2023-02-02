import React from "react";
import dataSocial from "../../data/Social/social-footer.json";
import Link from "next/link";
import Icon from "../Elements/Icon";

const FooterCopyright = () => (
  <div className="footer-copyright">
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-xs-12">
          <ul className="social-media">
            {dataSocial.filter((v,i) => i < 5).map((item) => (
              <li key={item.id}>
                <Link href={item.link}>
                  <a><Icon className={item.icon} icon={item.icon} /></a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-md-6 col-xs-12">
          <div className="copy-right text-right">
            © GAYLATINO
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default FooterCopyright;