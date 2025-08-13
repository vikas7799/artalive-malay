import { NavLink } from "react-router-dom";
import DropdownContent from "./DropdownContent";

const MenuItem = ({
  label,
  href,
  children,
  onToggle,
  active,
  setIsDrawerOpen,
}) => {
  const handleClick = () => {
    const activeElement = document.activeElement;
    activeElement.blur();
  };

  return (
    <li>
      <div className="nav_item_content">
        <NavLink
          to={href}
          className={({ isActive }) => (isActive ? "active" : "")}
          onClick={() => {
            setIsDrawerOpen && setIsDrawerOpen(false);
            handleClick();
          }}
        >
          {label}
        </NavLink>
        {children && (
          <button
            className="md:hidden"
            onClick={onToggle}
            aria-label="Toggle dropdown"
            aria-haspopup="menu"
            aria-expanded={active ? "true" : "false"}
            style={{background:"transparent", marginRight:"30px"}}
          >
            {active ? <i className="fa-solid fa-caret-up"></i> :  <i className="fa-solid fa-caret-down"></i>}
          </button>
        )}
      </div>
      {children && (
        <div
          role="menu"
          className={`dropdown ${
            active ? "h-auto" : "h-0 overflow-hidden md:h-auto"
          }`}
        >
          <div className="container-xl p-3 ">
            <DropdownContent
              submenuscontent={children}
              setIsDrawerOpen={setIsDrawerOpen}
              handleClick={handleClick}
            />
          </div>
        </div>
      )}
    </li>
  );
};

export default MenuItem;
