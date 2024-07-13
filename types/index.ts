import { IconProps } from "@expo/vector-icons/build/createIconSet";

export type STATE_TYPE = {
  activeIndex: number | null;
};

export type ACCORDION_ITEM_TYPE = {
  id: string;
  title: string;
  content: string;
  icon: string;
};

export type ACCORDION_RENDER_ITEM_TYPE = {
  item: ACCORDION_ITEM_TYPE;
  index: number;
  onToggle: (id: number) => void;
  openIndex: number | null;
};
