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

export interface StoreState {
  sections: {
    id: string;
    rows: EmptyRow[];
  }[];
}
