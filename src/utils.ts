import { v4 as uuidv4 } from "uuid";
import { EmptyRow } from "./types";
import { ComponentTypes } from "./contants";

const getEmptyRowComponent = () => {
  return {
    id: uuidv4(),
    type: ComponentTypes.EMPTY_ELEMENT,
    span: [12],
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

// Function to move a row up or down
type MoveRows = {
  rows: EmptyRow[];
  rowIdx: number;
  direction: "up" | "down";
};
export const moveRow = ({ rows, rowIdx, direction }: MoveRows) => {
  // Find the index of the row
  //   const index = rows.findIndex((row) => row.id === rowId);

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
