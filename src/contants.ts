import { AddNewRowOrElement, Headline, SubHeadline } from "./components";
import { StoreState } from "./types";
import { v4 as uuidv4 } from "uuid";

/* eslint-disable @typescript-eslint/no-unused-vars */
const row = [
  {
    id: "",
    components: [
      {
        type: "componentsType",
        span: [12, 6, 3, 4],
        propss: {
          value: "",
          label: "",
        },
      },
    ],
    rowStyles: {},
    isDisabled: true,
    isPinned: true,
  },
];

//row[rowIndex].components[columnIndex]

/*
Assuming we dont have poer to add more sections then
if sections is empty that means we need to show empty add new row placeholder
-on click of add new row, we need to row with columns layout (default one column layout)
*/

export const initialState: StoreState = {
  sections: [
    {
      id: uuidv4(),
      rows: [],
    },
  ],
};

const section = [
  {
    id: "sectionId",
    rows: [
      {
        id: "ae23b214-8f51-48aa-bdc9-255546202ea2",
        components: [
          {
            id: "7a5427a5-aa5d-423f-8263-1fc842b82668",
            type: "emptyRowComponent",
            span: [12],
          },
          {
            id: "7a5427a5-aa5d-423f-8263-1fc842b82668",
            type: "emptyRowComponent",
            span: [12],
          },
        ],
        rowStyles: {},
        isDisabled: true,
        isPinned: true,
      },
      {
        id: "ae23b214-8f51-48aa-bdc9-255546202ea2",
        components: [
          {
            id: "7a5427a5-aa5d-423f-8263-1fc842b82668",
            type: "emptyRowComponent",
            span: [12],
          },
          {
            id: "7a5427a5-aa5d-423f-8263-1fc842b82668",
            type: "emptyRowComponent",
            span: [12],
          },
        ],
        rowStyles: {},
        isDisabled: true,
        isPinned: true,
      },
    ],
  },
];

export const ComponentTypes = {
  EMPTY_ROW: "EMPTY_ROW",
  EMPTY_ELEMENT: "EMPTY_ELEMENT",
  HEADLINE: "HEADLINE",
  SUB_HEADLINE: "SUB_HEADLINE",
};

export const ComponentTypesMap = {
  EMPTY_ROW: AddNewRowOrElement,
  EMPTY_ELEMENT: AddNewRowOrElement,
  HEADLINE: Headline,
  SUB_HEADLINE: SubHeadline,
};

const componentDefaultPropsMap = {
  HEADLINE: {
    // type: "onFiled" | "drawer";
    fieldProps: {
      text: "Heading text",
      // placeholder: "",
      // defaultValue: "",
    },
  },
  SUB_HEADLINE: {
    // type: "onFiled" | "drawer";
    fieldProps: {
      text: "Sub heading text",
      // placeholder: "",
      // defaultValue: "",
    },
  },
};
