export interface MenuItemType {
  label: string;
  to: string;
  children?: MenuItemType[];
}
