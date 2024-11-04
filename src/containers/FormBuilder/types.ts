import { ComponentProperties } from "../../types";

export interface RenderColumnComponent {
  sectionIdx: number;
  rowIdx: number;
  columnIdx: number;
  singleRowComponent: ComponentProperties;
}
