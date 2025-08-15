import { useState } from "react";
import MenuList from "./MenuList";
import { Plus } from "lucide-react";
import type { MenuItemType } from "../types/MenuItemType";
import { Link } from "react-router";

interface MenuItemProps {
  item: MenuItemType;
}

const MenuItem = ({ item }: MenuItemProps) => {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState<
    Record<string, boolean>
  >({});

  const handleToggleClick = (label: string) => {
    setDisplayCurrentChildren({
      ...displayCurrentChildren,
      [label]: !displayCurrentChildren[label],
    });
  };

  return (
    <li className="mb-1">
      <div className="flex items-center justify-between px-3 py-2 bg-gray-800 rounded-md hover:bg-gray-700 transition-colors">
        <Link className="text-white font-medium flex-1" to={item.to}>
          {item.label}
        </Link>
        {item.children?.length ? (
          <button
            type="button"
            onClick={() => handleToggleClick(item.label)}
            className="p-1"
          >
            <Plus className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
          </button>
        ) : null}
      </div>
      {item.children?.length && displayCurrentChildren[item.label] ? (
        <div className="ml-5 mt-1 border-l-2 border-gray-700 pl-3">
          <MenuList list={item.children} />
        </div>
      ) : null}
    </li>
  );
};

export default MenuItem;
