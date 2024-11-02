export interface ComponentTypes {
  type: string;
  span?: number[];
  props?: {
    value: string;
    label: string;
  };
}

export interface EmptyRow {
  id: number | string;
  components: ComponentTypes[];
  rowStyles?: React.CSSProperties;
  isDisabled?: boolean;
  isPinned?: boolean;
}

export interface StoreState {
  sections: {
    id: string;
    rows: EmptyRow[];
  }[];
}
