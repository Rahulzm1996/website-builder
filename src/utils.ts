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
