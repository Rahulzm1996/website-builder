import { ComponentTypes } from "./contants";

export interface ComponentProperties {
  id: string;
  type: string;
  span?: number[];
  props?: {
    text?: string;
    styles?: React.CSSProperties;
    src?: string;
    alt?: string;
    items?: string[];
    ordered?: boolean;
  };
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
type ElementAttributes = {
  sectionIdx?: number;
  rowIdx?: number;
  columnIdx?: number;
};
type EditElementAttributes = {
  sectionIdx: number;
  rowIdx: number;
  columnIdx: number;
  type: string;
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
  elementsDrawerConfig: {
    open: boolean;
    elementAttributes: ElementAttributes;
  };
  editElementDrawerConfig: {
    open: boolean;
    editElementAttributes: EditElementAttributes;
  };
}
