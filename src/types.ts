import { ComponentTypes } from "./contants";

export interface ComponentProperties {
  type: string;
  span?: number[];
  props?: any;
}

export interface EmptyRow {
  id: number | string;
  components: ComponentProperties[];
  rowStyles?: React.CSSProperties;
  isDisabled?: boolean;
  isPinned?: boolean;
}

type LayoutAttributes = {
  sectionIdx?: number;
  mode: "new" | "existing";
};

export interface StoreState {
  sections: {
    id: string;
    rows: EmptyRow[];
  }[];
  columnsDrawerConfig: {
    open: boolean;

    layoutAttributes: LayoutAttributes;
  };
}
