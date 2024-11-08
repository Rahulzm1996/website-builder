import { StoreState } from "./types";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
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
import { v4 as uuidv4 } from "uuid";

export const initialState: StoreState = {
  sections: [
    {
      id: uuidv4(),
      rows: [],
    },
  ],
  isPreviewMode: false,
  viewMode: "desktop",
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
      elementIdx: 0,
      type: "",
    },
  },
};

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
    value: "save",
    icon: <SaveOutlinedIcon />,
    type: "normal",
    tooltip: {
      title: "Save",
      position: "top",
    },
  },
];
