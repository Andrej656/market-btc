import Link from "next/link";

import menuItems from "../../../data/nav-menu";

const NavMenu = () => {
  return (
    <>
      <ul>

        {
          menuItems.map((item, index) => (
            <li key={index} className={item.hasDropdown ? `has-dropdown ${item.megamenu ? 'megamenu-full' : ''}` : ''}>
              <Link href={`${item.link}`}>{item.title}</Link>
             {item.hasDropdown && <ul className={item.megamenu ? 'megamenu' : 'submenu'}>
                {
                  item?.dropdownItems?.map((menuItem, menuItemIndex) => (
                    <li key={menuItemIndex} className={menuItem.class ? menuItem.class : ''}>
                      <Link href={`${menuItem.link}`}><a>{menuItem.title}</a></Link>
                      {menuItem.hasDropdownChild && <ul className="submenu">
                        {menuItem.hasDropdownChild.map((childMenu,childMenuIndex) => (
                          <li key={childMenuIndex}>
                            <Link href={`${childMenu.link}`}><a>{childMenu.title}</a></Link>
                          </li>
                        ))}
                      </ul>}
                    </li>
                  ))
                }
              </ul>}
            </li>
          ))
        }

      </ul>

    </>
  );
};

export default NavMenu;