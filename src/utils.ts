import { v4 as uuidv4 } from "uuid";
import { ComponentProperties, EmptyRow, StoreState } from "./types";
import { ComponentTypes } from "./contants";

/**
 * Generates an empty row component object with a unique ID, default span, and a single empty element.
 * This function can be used to create a placeholder row with minimal configuration.
 *
 * @returns An object representing an empty row component, with the following structure:
 *  - `id`: A unique identifier for the row.
 *  - `span`: An array indicating the row's column span, with a default of `[12]` (full width).
 *  - `elements`: An array containing a single empty element, with:
 *     - `id`: A unique identifier for the element.
 *     - `type`: Specifies the type as `ComponentTypes.EMPTY_ELEMENT`, indicating an empty or placeholder element.
 *     - `props`: An empty object for additional properties, allowing for future configuration.
 */
const getEmptyRowComponent = (): ComponentProperties => {
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

/**
 * Generates an array containing a single empty row object with a specified number of column components.
 * Each component within the row is initialized as an empty row component.
 *
 * @param {number} columns - The number of columns to create within the row.
 *                           Defaults to 1 if no value is provided.
 *
 * @returns {Array<EmptyRow>} An array containing a single `EmptyRow` object, structured as follows:
 *  - `id`: A unique identifier for the row.
 *  - `components`: An array of empty row components, each generated by `getEmptyRowComponent()`.
 *                  The array length is equal to the `columns` parameter.
 *  - `rowStyles`: An empty object to define custom CSS styles for the row.
 *  - `isDisabled`: A boolean flag set to `true`, indicating that the row is disabled by default.
 *  - `isPinned`: A boolean flag set to `true`, indicating that the row is pinned in place by default.
 */
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

/**
 * Generates an empty section object with a unique identifier and an empty array of rows.
 *
 * @returns An object representing an empty section with the following structure:
 *  - `id`: A unique numeric identifier for the section.
 *          `uuidv4()` is cast to `number` to meet the expected type, though UUIDs are typically strings.
 *  - `rows`: An empty array of `EmptyRow` objects, representing the rows within the section.
 *            Rows can be added to this array later as needed.
 */
export const getEmptySection = (): {
  id: number;
  rows: EmptyRow[];
} => {
  return {
    id: uuidv4() as unknown as number,
    rows: [],
  };
};

type MoveRows = {
  /**
   * An array of `EmptyRow` objects representing the rows involved in the move action.
   * This array may include multiple rows, depending on the operation.
   */
  rows: EmptyRow[];

  /**
   * The index of the row to be moved within the `rows` array.
   * This value is used to identify the specific row that will be repositioned.
   */
  rowIdx: number;

  /**
   * The direction in which the specified row should be moved.
   * Can be either `"up"` to move the row up one position, or `"down"` to move it down.
   */
  direction: "up" | "down";
};

// Function to move a row up or down
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
  /**
   * An array of `sections` from the `StoreState`, representing the sections involved in the move action.
   * Each section may contain multiple rows and other properties, depending on the state structure.
   */
  sections: StoreState["sections"];

  /**
   * The index of the section to be moved within the `sections` array.
   * This value is used to identify and reposition the specified section.
   */
  sectionIdx: number;

  /**
   * The direction in which the specified section should be moved.
   * Can be either `"up"` to move the section up one position, or `"down"` to move it down.
   */
  direction: "up" | "down";
};

// Function to move a section up or down
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
