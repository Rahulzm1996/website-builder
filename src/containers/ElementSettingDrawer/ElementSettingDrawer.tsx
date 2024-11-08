import { Box, IconButton, Stack } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import {
  addElement,
  toggleEditElementDrawer,
} from "../../store/formBuilderSlice";
import {
  useFormBuilderDispatch,
  useFormBuilderSelector,
} from "../../store/store";
import { ComponentTypes } from "../../contants";
import { HeadlineEditor } from "../../components/Headline";
import { ComponentProperties } from "../../types";
import { ImageEditor } from "../../components/CustomImage";
import { CustomListEditor } from "../../components";
import { ParagraphEditor } from "../../components/Paragraph";
import { EditElementDrawer, Header } from "./styles";

interface ElementsDrawerProps {
  open: boolean;
}

const ElementSettingDrawer = ({ open }: ElementsDrawerProps) => {
  const dispatch = useFormBuilderDispatch();
  const { sections, editElementDrawerConfig } = useFormBuilderSelector(
    (state) => state.formBuilder
  );

  const { editElementAttributes } = editElementDrawerConfig || {};
  const { sectionIdx, rowIdx, columnIdx, elementIdx, type } =
    editElementAttributes || {};
  const existingElementConfig =
    sections?.[sectionIdx]?.rows?.[rowIdx]?.components?.[columnIdx]?.elements?.[
      elementIdx
    ] || {};

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
    const elementToBeAdded = {
      ...existingElementConfig,
      props: props,
    };

    dispatch(
      addElement({
        sectionIdx,
        rowIdx,
        columnIdx,
        elementIdx,
        elementToBeAdded,
      })
    );
    closeDrawer();
  };

  const getComponentEditors = (type: ComponentProperties["type"]) => {
    switch (type) {
      case ComponentTypes.HEADLINE:
      case ComponentTypes.SUB_HEADLINE: {
        return (
          <HeadlineEditor
            existingComponentProps={existingElementConfig?.props || {}}
            updateElementInColumn={updateElementInColumn}
          />
        );
      }
      case ComponentTypes.PARAGRAPH: {
        return (
          <ParagraphEditor
            existingComponentProps={existingElementConfig?.props || {}}
            updateElementInColumn={updateElementInColumn}
          />
        );
      }
      case ComponentTypes.IMAGE: {
        return (
          <ImageEditor
            existingComponentProps={existingElementConfig?.props || {}}
            updateElementInColumn={updateElementInColumn}
          />
        );
      }
      case ComponentTypes.LIST: {
        return (
          <CustomListEditor
            existingComponentProps={existingElementConfig?.props || {}}
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
      <Box className="editElementDrawerHeader">
        <Header>Edit Element</Header>
        <IconButton onClick={closeDrawer}>
          <CloseIcon />
        </IconButton>
      </Box>

      <Stack className="editElementWrapper">{getComponentEditors(type)}</Stack>
    </EditElementDrawer>
  );
};

export default ElementSettingDrawer;
