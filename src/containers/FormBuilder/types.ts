import { ComponentProperties, ElementProperties } from "../../types";

export interface RenderColumnComponent {
  sectionIdx: number;
  rowIdx: number;
  columnIdx: number;
  singleColumnComponent: ComponentProperties;
}

export interface RenderColumnElementComponent {
  sectionIdx: number;
  rowIdx: number;
  columnIdx: number;
  elementIdx: number;
  singleElementComponent: ElementProperties;
}
