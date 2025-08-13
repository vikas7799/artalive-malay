import { menuData } from "/menuData";
import MenuItem from "./MenuItem";

const MegaMenu = ({ handleToggle, clicked, setIsDrawerOpen }) => {
  return (
    <div className="nav__container">
      <nav>
        <ul>
          {menuData.map(({ label, href, children, icon }, index) => {
            return (
              <MenuItem
                key={index}
                {...{
                  label,
                  href,
                  icon,
                  children,
                  setIsDrawerOpen,
                }}
                onToggle={() => handleToggle && handleToggle(index)}
                active={clicked === index}
              />
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default MegaMenu;
