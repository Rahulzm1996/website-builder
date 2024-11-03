import React from "react";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import { Stack } from "@mui/material";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import FileCopyOutlinedIcon from "@mui/icons-material/FileCopyOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { StyledElementContainer } from "./styles";
import { useFormBuilderDispatch } from "../../store/store";
import {
  cloneElement,
  toggleEditElementDrawer,
} from "../../store/formBuilderSlice";

interface ElementContainerProps {
  sectionIdx: number;
  rowIdx: number;
  columnIdx: number;
  children: JSX.Element;
  type?: string;
}
const ElementContainer = (props: ElementContainerProps) => {
  const dispatch = useFormBuilderDispatch();
  // const sections = useFormBuilderSelector(
  //   (state) => state.formBuilder.sections
  // );
  const { sectionIdx, rowIdx, columnIdx, type, children } = props || {};

  const handleElementSetting = () => {
    console.log("handleElementSetting", { sectionIdx, rowIdx, columnIdx });
    // dispatch(addMoreRow({ sectionIdx }));
    dispatch(
      toggleEditElementDrawer({
        open: true,
        editElementAttributes: { sectionIdx, rowIdx, columnIdx, type },
      })
    );
  };

  const handleCloneElement = () => {
    console.log("handleCloneElement");
    dispatch(cloneElement({ sectionIdx, rowIdx }));
  };

  const handleDeleteElement = () => {
    console.log("handleDeleteElement");
    // dispatch(deleteSectionRow({ sectionIdx, rowId }));
  };
  const handleAddNewElement = () => {
    console.log("handleAddNewElement");
    // dispatch(deleteSectionRow({ sectionIdx, rowId }));
  };

  return (
    <StyledElementContainer
      className="elementContainer"
      item
      xs={12} // 100% width on extra-small screens (1 item per row)
      sm={6} // 50% width on small screens (2 items per row)
      md={4} // 33.33% width on medium screens (3 items per row)
      lg={3} // 25% width on large screens (4 items per row)
      xl={2} // 20% width on extra-large screens (5 items per row)
      // sx={{
      //   // flexBasis: "200px", // Minimum width of 200px
      //   flexGrow: 1, // Allow items to grow to fill space
      //   maxWidth: "100%", // Prevent items from overflowing
      // }}
    >
      <Box className="elementCreatorActions">
        <Stack className="moreElementActions">
          <Tooltip
            title="Settings"
            placement="top"
            arrow
            onClick={handleElementSetting}
          >
            <Stack className="iconWrapper">
              <SettingsOutlinedIcon className="icon" />
            </Stack>
          </Tooltip>
          <Tooltip title="Clone" placement="top" arrow>
            <Stack className="iconWrapper" onClick={handleCloneElement}>
              <RemoveRedEyeOutlinedIcon className="icon" />
            </Stack>
          </Tooltip>
          <Tooltip title="Save" placement="top" arrow>
            <Stack className="iconWrapper">
              <FileCopyOutlinedIcon className="icon" />
            </Stack>
          </Tooltip>
          <Tooltip title="Delete" placement="top" arrow>
            <Stack className="iconWrapper" onClick={handleDeleteElement}>
              <DeleteOutlineOutlinedIcon className="icon" />
            </Stack>
          </Tooltip>
        </Stack>
      </Box>
      <Stack className="addNewElement">
        <Tooltip title="Add New Element" placement="bottom" arrow>
          <Stack className="iconWrapper" onClick={handleAddNewElement}>
            <AddOutlinedIcon className="icon" />
          </Stack>
        </Tooltip>
      </Stack>

      {children}
    </StyledElementContainer>
  );
};
export default ElementContainer;
