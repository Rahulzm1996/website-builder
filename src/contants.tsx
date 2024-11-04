import { AddNewRowOrElement, Headline, SubHeadline } from "./components";
import { StoreState } from "./types";
import { v4 as uuidv4 } from "uuid";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SettingsIcon from "@mui/icons-material/Settings";
import PopupIcon from "@mui/icons-material/OpenInBrowser"; // Assuming this as "Pop up" icon
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LayersIcon from "@mui/icons-material/Layers";
import PreviewIcon from "@mui/icons-material/Visibility";
import SaveIcon from "@mui/icons-material/Save";
import { Fullscreen, ViewList, ViewModule, Code } from "@mui/icons-material";
import React from "react";
import CropFreeIcon from "@mui/icons-material/CropFree";
import MenuIcon from "@mui/icons-material/Menu";
import ViewColumnIcon from "@mui/icons-material/ViewColumn";
import CodeIcon from "@mui/icons-material/Code";
import PersonalVideoIcon from "@mui/icons-material/PersonalVideo";
import MobileScreenShareOutlinedIcon from "@mui/icons-material/MobileScreenShareOutlined";
import PowerOutlinedIcon from "@mui/icons-material/PowerOutlined";
import SettingsSuggestOutlinedIcon from "@mui/icons-material/SettingsSuggestOutlined";
import OpenInNewOutlinedIcon from "@mui/icons-material/OpenInNewOutlined";
import ReplayOutlinedIcon from "@mui/icons-material/ReplayOutlined";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";

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

const CONFIG = [
  {
    id: "ab886178-4315-4e4c-882e-dfb303834036",
    rows: [
      {
        id: "f2c5d15a-dd3c-4e3f-b784-fc26d669d5ce",
        components: [
          {
            id: "514d7815-1b65-41ca-86d0-88cf352506d4",
            type: "HEADLINE",
            span: [12],
            props: {
              text: "Heading text...",
              styles: {
                backgroundColor: "red",
              },
            },
          },
          {
            id: "2159402e-39d8-43d6-abb1-8753344ac19a",
            type: "HEADLINE",
            span: [12],
            props: {
              text: "Heading text...",
            },
          },
          {
            id: "d564f823-4da4-49ff-9ee7-4b3dbe0abe99",
            type: "HEADLINE",
            span: [12],
            props: {
              text: "Heading text...",
            },
          },
          {
            id: "f1c41b67-9e06-4ded-aa03-77d94278eaf1",
            type: "HEADLINE",
            span: [12],
            props: {
              text: "Heading text...",
            },
          },
        ],
        rowStyles: {},
        isDisabled: true,
        isPinned: true,
      },
      {
        id: "afe15d2d-2426-466b-9ef0-450ff9b942f0",
        components: [
          {
            id: "add8ef69-5442-4ed9-9075-79e7507e1f57",
            type: "EMPTY_ELEMENT",
            span: [12],
          },
          {
            id: "add8ef69-5442-4ed9-9075-79e7507e1f57",
            type: "EMPTY_ELEMENT",
            span: [12],
          },
        ],
        rowStyles: {},
        isDisabled: true,
        isPinned: true,
      },
      {
        id: "21ecdbad-f67d-46bc-9531-3181ccb77701",
        components: [
          {
            id: "9831b419-c4a0-43f3-8405-f37cf4609a6c",
            type: "EMPTY_ELEMENT",
            span: [12],
          },
          {
            id: "9831b419-c4a0-43f3-8405-f37cf4609a6c",
            type: "EMPTY_ELEMENT",
            span: [12],
          },
          {
            id: "9831b419-c4a0-43f3-8405-f37cf4609a6c",
            type: "EMPTY_ELEMENT",
            span: [12],
          },
          {
            id: "9831b419-c4a0-43f3-8405-f37cf4609a6c",
            type: "EMPTY_ELEMENT",
            span: [12],
          },
        ],
        rowStyles: {},
        isDisabled: true,
        isPinned: true,
      },
      {
        id: "666fc3dc-6569-4c2b-ae69-34aebfe6f1f0",
        components: [
          {
            id: "7953d8e5-bcc1-4a5b-ab86-fee48012b70c",
            type: "EMPTY_ELEMENT",
            span: [12],
          },
          {
            id: "7953d8e5-bcc1-4a5b-ab86-fee48012b70c",
            type: "EMPTY_ELEMENT",
            span: [12],
          },
          {
            id: "7953d8e5-bcc1-4a5b-ab86-fee48012b70c",
            type: "EMPTY_ELEMENT",
            span: [12],
          },
        ],
        rowStyles: {},
        isDisabled: true,
        isPinned: true,
      },
      {
        id: "99d5ddb3-d024-42b7-93df-638cac08457e",
        components: [
          {
            id: "9d357aef-e5f8-4d19-826d-9a8acb59def0",
            type: "EMPTY_ELEMENT",
            span: [12],
          },
          {
            id: "9d357aef-e5f8-4d19-826d-9a8acb59def0",
            type: "EMPTY_ELEMENT",
            span: [12],
          },
        ],
        rowStyles: {},
        isDisabled: true,
        isPinned: true,
      },
      {
        id: "346028c7-149a-4fc5-969e-6b0fb3a156c2",
        components: [
          {
            id: "08b8709a-12db-4216-9a6b-2ffcf72582a9",
            type: "EMPTY_ELEMENT",
            span: [12],
          },
        ],
        rowStyles: {},
        isDisabled: true,
        isPinned: true,
      },
      {
        id: "a0de18b6-c543-4a3b-8665-d11ce07fb897",
        components: [
          {
            id: "08d14561-c84e-40b2-90ce-9669e1af8a03",
            type: "EMPTY_ELEMENT",
            span: [12],
          },
          {
            id: "08d14561-c84e-40b2-90ce-9669e1af8a03",
            type: "EMPTY_ELEMENT",
            span: [12],
          },
          {
            id: "08d14561-c84e-40b2-90ce-9669e1af8a03",
            type: "EMPTY_ELEMENT",
            span: [12],
          },
          {
            id: "08d14561-c84e-40b2-90ce-9669e1af8a03",
            type: "EMPTY_ELEMENT",
            span: [12],
          },
        ],
        rowStyles: {},
        isDisabled: true,
        isPinned: true,
      },
      {
        id: "86422882-5fdf-4120-b5d4-1762c20362d1",
        components: [
          {
            id: "fdab1c0b-da72-446a-962b-858b39e6e574",
            type: "EMPTY_ELEMENT",
            span: [12],
          },
          {
            id: "fdab1c0b-da72-446a-962b-858b39e6e574",
            type: "EMPTY_ELEMENT",
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

export const initialState: StoreState = {
  //think about empty sections array here
  /*
  {
      id: "1",
      rows: [],
    },
  */
  sections: CONFIG,
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

  editElementDrawerConfig: {
    open: false,
    editElementAttributes: {
      sectionIdx: 0,
      rowIdx: 0,
      columnIdx: 0,
      type: "",
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
      styles: {},
      // placeholder: "",
      // defaultValue: "",
    },
  },
  [ComponentTypes.SUB_HEADLINE]: {
    // type: "onFiled" | "drawer";
    fieldProps: {
      text: "Sub heading text...",
      styles: {},
      // placeholder: "",
      // defaultValue: "",
    },
  },
  [ComponentTypes.PARAGRAPH]: {
    // type: "onFiled" | "drawer";
    fieldProps: {
      text: "Paragraph text",
      styles: {},
      // placeholder: "",
      // defaultValue: "",
    },
  },
  [ComponentTypes.LIST]: {
    // type: "onFiled" | "drawer";
    fieldProps: {
      items: ["Item 1", "Item 2", "Item 3"],
      styles: {},
    },
  },
  [ComponentTypes.IMAGE]: {
    // type: "onFiled" | "drawer";
    fieldProps: {
      src: "https://images.pexels.com/photos/158063/bellingrath-gardens-alabama-landscape-scenic-158063.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "image-alt",
      styles: {
        width: "100%",
        height: "200px",
      },
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
    label: "BUTTON",
    icon: "📋",
    type: ComponentTypes.HEADLINE,
    disable: true,
  },
  {
    category: "Form",
    label: "FACEBOOK OPTION",
    icon: "📋",
    type: ComponentTypes.FORM,
    disable: true,
  },
  {
    category: "Form",
    label: "INPUT",
    icon: "📋",
    type: ComponentTypes.INPUT,
    disable: true,
  },
  {
    category: "Form",
    label: "TEXT AREA",
    icon: "📋",
    type: ComponentTypes.TEXTAREA,
    disable: true,
  },
  {
    category: "Form",
    label: "CHECKBOX HEADLINE",
    icon: "📋",
    type: ComponentTypes.SELECT,
    disable: true,
  },
  {
    category: "Form",
    label: "SELECT BOX",
    icon: "📋",
    type: ComponentTypes.CHECKBOX,
    disable: true,
  },
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

export const NavBackButtonConfig = [
  {
    label: "",
    value: "back",
    icon: <ArrowBackIcon />,
    type: "normal",
    tooltip: {
      title: "Back",
      position: "top",
    },
  },
];

export const viewSwitcher = [
  {
    label: "Desktop",
    value: "desktop",
    icon: <PersonalVideoIcon />,
    type: "normal",
    tooltip: {
      title: "Desktop",
      position: "top",
    },
  },
  {
    label: "Mobile",
    value: "mobile",
    icon: <MobileScreenShareOutlinedIcon />,
    type: "normal",
    tooltip: {
      title: "Mobile",
      position: "top",
    },
  },
];

export const settingsControls = [
  {
    label: "",
    value: "app",
    icon: <PowerOutlinedIcon />,
    type: "normal",
    tooltip: {
      title: "App",
      position: "top",
    },
  },
  {
    label: "settings",
    value: "settings",
    icon: <SettingsSuggestOutlinedIcon />,
    type: "normal",
    tooltip: {
      title: "Settings",
      position: "top",
    },
  },
  {
    label: "Pop up",
    value: "pop up",
    icon: <OpenInNewOutlinedIcon />,
    type: "normal",
    tooltip: {
      title: "Pop up",
      position: "top",
    },
  },
  {
    label: "",
    value: "undo",
    icon: <ReplayOutlinedIcon />,
    type: "normal",
    tooltip: {
      title: "Undo",
      position: "top",
    },
  },
  {
    label: "",
    value: "redo",
    icon: <ReplayOutlinedIcon sx={{ transform: "rotateY(180deg)" }} />,
    type: "normal",
    tooltip: {
      title: "Redo",
      position: "top",
    },
  },
];

export const editorControls = [
  {
    label: "Sections",
    value: "sections",
    icon: <CropFreeIcon />,
    type: "normal",
    tooltip: {
      title: "Sections",
      position: "top",
    },
  },
  {
    label: "Rows",
    value: "rows",
    icon: <MenuIcon />,
    type: "menu",
    menuOptions: ["Add Row", "Manage"],
    tooltip: {
      title: "Rows",
      position: "top",
    },
  },
  {
    label: "Columns",
    value: "columns",
    icon: <ViewColumnIcon />,
    type: "menu",
    menuOptions: ["Add Column", "Manage"],
    tooltip: {
      title: "Columns",
      position: "top",
    },
  },
  {
    label: "Elements",
    value: "elements",
    icon: <CodeIcon />,
    type: "normal",
    tooltip: {
      title: "Elements",
      position: "top",
    },
  },
];

export const previewControls = [
  {
    label: "Preview",
    value: "preview",
    icon: <RemoveRedEyeIcon />,
    type: "normal",
    tooltip: {
      title: "Preview",
      position: "top",
    },
  },
  {
    label: "Save",
    value: "pave",
    icon: <SaveOutlinedIcon />,
    type: "normal",
    tooltip: {
      title: "Save",
      position: "top",
    },
  },
];
