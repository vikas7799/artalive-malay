import React from "react";
import { Link } from "react-router-dom";

const DropdownContent = ({ submenuscontent, setIsDrawerOpen, handleClick }) => {
  return (
    <div className="dropdown_content " style={{ animationDelay: "1s" }}>
      {submenuscontent.map((item, index) => (
        <React.Fragment key={index}>
          <section>
            <h4 className="fs-5 mb-3">
              <a href={item.href} className="black-1">
                {item.label}
              </a>
            </h4>
            <ul>
              {item.submenu.map(({ label, href, icon }, index) => (
                <li
                  key={index}
                  onClick={() => {
                    setIsDrawerOpen && setIsDrawerOpen(false);
                    handleClick();
                  }}
                >
                  <div className="d-flex align-items-center ">
                    {/* <i  className={icon}/>  */}
                    <Link to={href}>{label}</Link>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </React.Fragment>
      ))}
    </div>
  );
};

export default DropdownContent;
