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
  columnsDrawerConfig: {
    open: false,
    layoutAttributes: {
      mode: "new",
      sectionIdx: 0,
    },
  },
  elementsDrawerConfig: {
    open: false,
    elementAttributes: {
      sectionIdx: 0,
      rowIdx: 0,
      columnIdx: 0,
    },
  },
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
  PARAGRAPH: "PARAGRAPH",
  LIST: "LIST",
  IMAGE: "IMAGE",
  VIDEO: "VIDEO",
  AUDIO: "AUDIO",
  FORM: "FORM",
  INPUT: "INPUT",
  TEXTAREA: "TEXTAREA",
  SELECT: "SELECT",
  CHECKBOX: "CHECKBOX",
};

export const ComponentTypesMap = {
  EMPTY_ROW: AddNewRowOrElement,
  EMPTY_ELEMENT: AddNewRowOrElement,
  HEADLINE: Headline,
  SUB_HEADLINE: SubHeadline,
};

export const componentDefaultPropsMap = {
  [ComponentTypes.HEADLINE]: {
    // type: "onFiled" | "drawer";
    fieldProps: {
      text: "Heading text...",
      // placeholder: "",
      // defaultValue: "",
    },
  },
  [ComponentTypes.SUB_HEADLINE]: {
    // type: "onFiled" | "drawer";
    fieldProps: {
      text: "Sub heading text...",
      // placeholder: "",
      // defaultValue: "",
    },
  },
  [ComponentTypes.PARAGRAPH]: {
    // type: "onFiled" | "drawer";
    fieldProps: {
      text: "Sub heading text",
      // placeholder: "",
      // defaultValue: "",
    },
  },
  [ComponentTypes.LIST]: {
    // type: "onFiled" | "drawer";
    fieldProps: {
      text: "Sub heading text",
      // placeholder: "",
      // defaultValue: "",
    },
  },
};

export const DRAWER_ELEMENTS = [
  {
    category: "Text",
    label: "HEADLINE",
    icon: "H",
    type: ComponentTypes.HEADLINE,
    disable: false,
  },
  {
    category: "Text",
    label: "SUB-HEADLINE",
    icon: "A",
    type: ComponentTypes.SUB_HEADLINE,
    disable: false,
  },
  {
    category: "Text",
    label: "PARAGRAPH",
    icon: "P",
    type: ComponentTypes.PARAGRAPH,
    disable: false,
  },
  {
    category: "Text",
    label: "BULLET LIST",
    icon: "L",
    type: ComponentTypes.LIST,
    disable: false,
  },
  {
    category: "Media",
    label: "IMAGE",
    icon: "🖼️",
    type: ComponentTypes.IMAGE,
    disable: false,
  },
  {
    category: "Media",
    label: "IMAGE POPUP",
    icon: "🖼️",
    type: ComponentTypes.IMAGE,
    disable: true,
  },
  {
    category: "Media",
    label: "VIDEO",
    icon: "▶️",
    type: ComponentTypes.VIDEO,
    disable: true,
  },
  {
    category: "Media",
    label: "VIDEO POPUP",
    icon: "▶️",
    type: ComponentTypes.VIDEO,
    disable: true,
  },
  {
    category: "Media",
    label: "AUDIO PLAYER",
    icon: "🔊",
    type: ComponentTypes.AUDIO,
    disable: true,
  },
  {
    category: "Form",
    label: "FORM INPUT",
    icon: "📋",
    type: ComponentTypes.HEADLINE,
    disable: true,
  },
  {
    category: "Form",
    label: "FORM INPUT",
    icon: "📋",
    type: ComponentTypes.FORM,
    disable: true,
  },
  {
    category: "Form",
    label: "FORM INPUT",
    icon: "📋",
    type: ComponentTypes.INPUT,
    disable: true,
  },
  {
    category: "Form",
    label: "FORM INPUT",
    icon: "📋",
    type: ComponentTypes.TEXTAREA,
    disable: true,
  },
  {
    category: "Form",
    label: "FORM INPUT",
    icon: "📋",
    type: ComponentTypes.SELECT,
    disable: true,
  },
  {
    category: "Form",
    label: "FORM INPUT",
    icon: "📋",
    type: ComponentTypes.CHECKBOX,
    disable: true,
  },
  // Advance Form
  {
    category: "Advance Form",
    label: "SMS SIGN UP",
    icon: "📋",
    type: ComponentTypes.FORM,
    disable: true,
  },
  {
    category: "Advance Form",
    label: "BILLING ADD",
    icon: "📋",
    type: ComponentTypes.FORM,
    disable: true,
  },
  {
    category: "Advance Form",
    label: "SHIPPING ADD",
    icon: "📋",
    type: ComponentTypes.FORM,
    disable: true,
  },
  {
    category: "Advance Form",
    label: "SURVEY",
    icon: "📋",
    type: ComponentTypes.FORM,
    disable: true,
  },
];
