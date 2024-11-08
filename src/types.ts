export interface ElementProperties {
  id: string;
  type: string;
  props?: {
    text?: string;
    styles?: React.CSSProperties;
    src?: string;
    alt?: string;
    items?: string[];
    ordered?: boolean;
  };
}

export interface ComponentProperties {
  id: string;
  elements: Array<ElementProperties>;
  span: number[];
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
  elementIdx?: number;
  mode?: "new" | "existing";
};
type EditElementAttributes = {
  sectionIdx: number;
  rowIdx: number;
  columnIdx: number;
  elementIdx: number;
  type: string;
};

export interface StoreState {
  sections: {
    id: number | string;
    rows: EmptyRow[];
  }[];
  isPreviewMode?: boolean;
  viewMode: "desktop" | "mobile";
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
