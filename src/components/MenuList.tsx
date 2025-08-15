import type { MenuItemType } from "../types/MenuItemType";
import MenuItem from "./MenuItem";

interface MenuListProps {
  list: MenuItemType[];
}

const MenuList = ({ list }: MenuListProps) => {
  return (
    <ul className="list-none pl-0 space-y-1">
      {list && list.length
        ? list.map((listItem) => (
            <MenuItem key={listItem.label} item={listItem} />
          ))
        : null}
    </ul>
  );
};

export default MenuList;
