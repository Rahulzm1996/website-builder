import { v4 as uuidv4 } from "uuid";
import { EmptyRow, StoreState } from "./types";
import { ComponentTypes } from "./contants";

const getEmptyRowComponent = () => {
  return {
    id: uuidv4(),
    span: [12],
    elements: [
      {
        id: uuidv4(),
        type: ComponentTypes.EMPTY_ELEMENT,
        props: {},
      },
    ],
  };
};

export const getEmptyRow = (columns: number = 1): Array<EmptyRow> => {
  return [
    {
      id: uuidv4(),
      components: new Array(columns).fill(getEmptyRowComponent()),
      rowStyles: {},
      isDisabled: true,
      isPinned: true,
    },
  ];
};

export const getEmptySection = (): {
  id: number;
  rows: EmptyRow[];
} => {
  return {
    id: uuidv4() as unknown as number,
    rows: [],
  };
};

// Function to move a row up or down
type MoveRows = {
  rows: EmptyRow[];
  rowIdx: number;
  direction: "up" | "down";
};
export const moveRow = ({ rows, rowIdx, direction }: MoveRows) => {
  // If the row is not found, return the original array
  if (rowIdx === -1) return rows;

  if (direction === "up" && rowIdx > 0) {
    // Move up: Swap with the previous row
    const temp = rows[rowIdx - 1];
    rows[rowIdx - 1] = rows[rowIdx];
    rows[rowIdx] = temp;
  } else if (direction === "down" && rowIdx < rows.length - 1) {
    // Move down: Swap with the next row
    const temp = rows[rowIdx + 1];
    rows[rowIdx + 1] = rows[rowIdx];
    rows[rowIdx] = temp;
  }

  return rows;
};

type MoveSections = {
  sections: StoreState["sections"];
  sectionIdx: number;
  direction: "up" | "down";
};
export const moveSections = ({
  sections,
  sectionIdx,
  direction,
}: MoveSections) => {
  // If the section is not found, return the original array
  if (sectionIdx === -1) return sections;

  if (direction === "up" && sectionIdx > 0) {
    // Move up: Swap with the previous section
    const temp = sections[sectionIdx - 1];
    sections[sectionIdx - 1] = sections[sectionIdx];
    sections[sectionIdx] = temp;
  } else if (direction === "down" && sectionIdx < sections.length - 1) {
    // Move down: Swap with the next section
    const temp = sections[sectionIdx + 1];
    sections[sectionIdx + 1] = sections[sectionIdx];
    sections[sectionIdx] = temp;
  }

  return sections;
};
