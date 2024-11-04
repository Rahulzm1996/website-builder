import React, { useState } from "react";
import {
  Drawer,
  TextField,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  IconButton,
  Stack,
} from "@mui/material";
import { styled } from "@mui/system";
import SearchIcon from "@mui/icons-material/Search";
import { DrawerProps } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { v4 as uuidv4 } from "uuid";
import {
  addElement,
  toggleAddElementsDrawer,
  toggleColumnDrawer,
  toggleEditElementDrawer,
} from "../../store/formBuilderSlice";
import {
  useFormBuilderDispatch,
  useFormBuilderSelector,
} from "../../store/store";
import {
  componentDefaultPropsMap,
  ComponentTypes,
  DRAWER_ELEMENTS,
} from "../../contants";
import { HeadlineEditor } from "../../components/Headline";
import { ComponentProperties } from "../../types";
import { ImageEditor } from "../../components/CustomImage";
import { CustomListEditor } from "../../components";
import { ParagraphEditor } from "../../components/Paragraph";

const drawerWidth = 400;

const EditElementDrawer = styled(Drawer)(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  minHeight: "100vh",
  overflow: "auto",
  "& .MuiDrawer-paper": {
    width: drawerWidth,
    boxSizing: "border-box",
    backgroundColor: "#white",
    // padding: "16px",
  },

  [theme.breakpoints.down("sm")]: {
    maxWidth: "90%",
  },
}));

const Header = styled(Stack)({
  fontWeight: "bold",
  textAlign: "center",
  color: "#455a64",
});

interface ElementsDrawerProps {
  open: boolean;
}

const ElementSettingDrawer = ({ open }: ElementsDrawerProps) => {
  const dispatch = useFormBuilderDispatch();
  const { sections, editElementDrawerConfig } = useFormBuilderSelector(
    (state) => state.formBuilder
  );
  console.log("editElementDrawerConfig", { editElementDrawerConfig });
  const { editElementAttributes } = editElementDrawerConfig || {};
  const { sectionIdx, rowIdx, columnIdx, type } = editElementAttributes || {};
  const existingComponentConfig =
    sections?.[sectionIdx]?.rows?.[rowIdx]?.components?.[columnIdx] || {};

  const closeDrawer = () => {
    dispatch(
      toggleEditElementDrawer({ open: false, editElementAttributes: {} })
    );
  };

  const onClose = (_, reason: "backdropClick" | "escapeKeyDown") => {
    if (reason === "backdropClick") {
      closeDrawer();
    }
  };

  const updateElementInColumn = (props: ComponentProperties["props"]) => {
    const defaultProps = componentDefaultPropsMap[type] || {};

    const componentToBeAdded = {
      ...existingComponentConfig,
      props: props,
    };
    console.log("updateElementInColumn : ", {
      editElementAttributes,
      defaultProps,
      props,
      componentToBeAdded,
    });
    dispatch(
      addElement({
        sectionIdx,
        rowIdx,
        columnIdx,
        componentToBeAdded,
      })
    );
    closeDrawer();
  };

  const getComponentEditors = (type: ComponentProperties["type"]) => {
    console.log("getComponentEditors :::", { type });
    switch (type) {
      case ComponentTypes.HEADLINE:
      case ComponentTypes.SUB_HEADLINE: {
        return (
          <HeadlineEditor
            existingComponentProps={existingComponentConfig?.props || {}}
            updateElementInColumn={updateElementInColumn}
          />
        );
      }
      case ComponentTypes.PARAGRAPH: {
        return (
          <ParagraphEditor
            existingComponentProps={existingComponentConfig?.props || {}}
            updateElementInColumn={updateElementInColumn}
          />
        );
      }
      case ComponentTypes.IMAGE: {
        return (
          <ImageEditor
            existingComponentProps={existingComponentConfig?.props || {}}
            updateElementInColumn={updateElementInColumn}
          />
        );
      }
      case ComponentTypes.LIST: {
        return (
          <CustomListEditor
            existingComponentProps={existingComponentConfig?.props || {}}
            updateElementInColumn={updateElementInColumn}
          />
        );
      }

      default:
        return null;
    }
  };

  return (
    <EditElementDrawer
      open={open}
      onClose={onClose}
      variant="temporary"
      anchor="right"
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        sx={{
          backgroundColor: "#f2f7fa",
          padding: "15px 20px",
          // marginBottom: "16px",
        }}
      >
        <Header>Edit Element</Header>
        <IconButton onClick={closeDrawer}>
          <CloseIcon />
        </IconButton>
      </Box>

      <Stack
        sx={{
          padding: "24px",
          height: "100%",
          flex: 1,
          overflow: "auto",
        }}
      >
        {getComponentEditors(type)}
        {/* render edit component here based on type */}
      </Stack>
    </EditElementDrawer>
  );
};

export default ElementSettingDrawer;
