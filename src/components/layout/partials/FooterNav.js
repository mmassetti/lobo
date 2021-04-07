import React from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";

const FooterNav = ({ className, ...props }) => {
  const classes = classNames("footer-nav", className);

  return (
    <nav {...props} className={classes}>
      <ul className="list-reset">
        <li>
          ABRIL 2021 - Te quiero lobo{" "}
          <span role="img" aria-label="corazon">
            ❤️
          </span>
          {/* <Link to="#0">Contact</Link> */}
        </li>
      </ul>
    </nav>
  );
};

export default FooterNav;
