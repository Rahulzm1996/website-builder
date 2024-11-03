import React from "react";
import Box from "@mui/material/Box";
import ArrowDownwardOutlinedIcon from "@mui/icons-material/ArrowDownwardOutlined";
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";
import Tooltip from "@mui/material/Tooltip";
import { Stack } from "@mui/material";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import FileCopyOutlinedIcon from "@mui/icons-material/FileCopyOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { StyledRowContainer } from "./styles";
import { AddNewRowAndElementPlaceholder } from "../AddNewRowOrElement";
import {
  useFormBuilderDispatch,
  useFormBuilderSelector,
} from "../../store/store";
import {
  addMoreRow,
  cloneSectionRow,
  deleteSectionRow,
  moveSectionRow,
  toggleColumnDrawer,
} from "../../store/formBuilderSlice";

interface RowContainerProps {
  sectionIdx: number;
  rowIdx: number;
  rowId: number;
  isFirstRowOfSection: boolean;
  isLastRowOfSection: boolean;
  children: () => React.ReactNode;
}
const RowContainer = (props: RowContainerProps) => {
  const dispatch = useFormBuilderDispatch();
  // const sections = useFormBuilderSelector(
  //   (state) => state.formBuilder.sections
  // );
  const {
    sectionIdx,
    rowIdx,
    rowId,
    isFirstRowOfSection,
    isLastRowOfSection,
    children,
  } = props || {};
  const handleAddMoreRow = () => {
    // dispatch(addMoreRow({ sectionIdx }));
    dispatch(
      toggleColumnDrawer({
        open: true,
        layoutAttributes: { sectionIdx, mode: "existing" },
      })
    );
  };

  const handleMoveRow = ({ direction }: { direction: "up" | "down" }) => {
    dispatch(moveSectionRow({ sectionIdx, rowIdx, direction }));
  };

  const handleCloneRow = () => {
    dispatch(cloneSectionRow({ sectionIdx, rowIdx }));
  };

  const handleDeleteRow = () => {
    dispatch(deleteSectionRow({ sectionIdx, rowId }));
  };

  return (
    <StyledRowContainer className="rowContainer" container spacing={2}>
      <Box className="rowCreatorActions">
        <Stack className="moveActions">
          {!isFirstRowOfSection ? (
            <Tooltip title="Up" placement="top" arrow>
              <Stack
                className="iconWrapper"
                onClick={() => handleMoveRow({ direction: "up" })}
              >
                <ArrowUpwardOutlinedIcon className="icon" />
              </Stack>
            </Tooltip>
          ) : null}
          {!isLastRowOfSection ? (
            <Tooltip title="Down" placement="top" arrow>
              <Stack
                className="iconWrapper"
                onClick={() => handleMoveRow({ direction: "down" })}
              >
                <ArrowDownwardOutlinedIcon className="icon" />
              </Stack>
            </Tooltip>
          ) : null}
        </Stack>
        <Stack className="moreActions">
          <Tooltip title="Settings" placement="top" arrow>
            <Stack className="iconWrapper">
              <SettingsOutlinedIcon className="icon" />
            </Stack>
          </Tooltip>
          <Tooltip title="Clone" placement="top" arrow>
            <Stack className="iconWrapper" onClick={handleCloneRow}>
              <RemoveRedEyeOutlinedIcon className="icon" />
            </Stack>
          </Tooltip>
          <Tooltip title="Save" placement="top" arrow>
            <Stack className="iconWrapper">
              <FileCopyOutlinedIcon className="icon" />
            </Stack>
          </Tooltip>
          <Tooltip title="Delete" placement="top" arrow>
            <Stack className="iconWrapper" onClick={handleDeleteRow}>
              <DeleteOutlineOutlinedIcon className="icon" />
            </Stack>
          </Tooltip>
        </Stack>
      </Box>
      {isLastRowOfSection ? (
        <Stack className="addNewRow">
          <Tooltip title="Add new Row" placement="bottom" arrow>
            <Stack className="iconWrapper" onClick={handleAddMoreRow}>
              <AddOutlinedIcon className="icon" />
            </Stack>
          </Tooltip>
        </Stack>
      ) : null}

      {children && children()}
    </StyledRowContainer>
  );
};
export default RowContainer;
