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
import { AddNewRowAndElementPlaceholder } from "../AddNewRowAndElementPlaceholder";
import {
  useFormBuilderDispatch,
  useFormBuilderSelector,
} from "../../store/store";
import { addMoreRow } from "../../store/formBuilderSlice";

interface RowContainerProps {
  sectionIdx: number;
  rowIdx: number;
  isLastRowOfSection: boolean;
  children: () => React.ReactNode;
}
const RowContainer = (props: RowContainerProps) => {
  const dispatch = useFormBuilderDispatch();
  const sections = useFormBuilderSelector(
    (state) => state.formBuilder.sections
  );
  console.log("new sectoins : ", { sections });
  const { sectionIdx, isLastRowOfSection, rowIdx, children } = props || {};
  const handleMoreRow = () => {
    // console.log("add more rows called : ", {
    //   sectionIdx,
    //   rowIdx,
    //   children,
    //   props,
    // });

    dispatch(addMoreRow({ sectionIndex: sectionIdx }));
  };

  return (
    <StyledRowContainer className="rowContainer">
      <Box className="rowCreatorActions">
        <Stack className="moveActions">
          <Tooltip title="Up" placement="top" arrow>
            <Stack className="iconWrapper">
              <ArrowUpwardOutlinedIcon className="icon" />
            </Stack>
          </Tooltip>
          <Tooltip title="Down" placement="top" arrow>
            <Stack className="iconWrapper">
              <ArrowDownwardOutlinedIcon className="icon" />
            </Stack>
          </Tooltip>
        </Stack>
        <Stack className="moreActions">
          <Tooltip title="Settings" placement="top" arrow>
            <Stack className="iconWrapper">
              <SettingsOutlinedIcon className="icon" />
            </Stack>
          </Tooltip>
          <Tooltip title="Clone" placement="top" arrow>
            <Stack className="iconWrapper">
              <RemoveRedEyeOutlinedIcon className="icon" />
            </Stack>
          </Tooltip>
          <Tooltip title="Save" placement="top" arrow>
            <Stack className="iconWrapper">
              <FileCopyOutlinedIcon className="icon" />
            </Stack>
          </Tooltip>
          <Tooltip title="Delete" placement="top" arrow>
            <Stack className="iconWrapper">
              <DeleteOutlineOutlinedIcon className="icon" />
            </Stack>
          </Tooltip>
        </Stack>
      </Box>
      {isLastRowOfSection ? (
        <Stack className="addNewRow">
          <Tooltip title="Add new Row" placement="bottom" arrow>
            <Stack className="iconWrapper" onClick={handleMoreRow}>
              <AddOutlinedIcon className="icon" />
            </Stack>
          </Tooltip>
        </Stack>
      ) : null}

      {children && children()}
      {/* <Stack className="column">
        <AddNewRowAndElementPlaceholder
          onClick={() => {
            console.log("add New Element clicked");
          }}
          buttonText="Add new Element"
          variant="element"
        />
      </Stack>
      <Stack className="column">
        <AddNewRowAndElementPlaceholder
          onClick={() => {
            console.log("add New Element clicked");
          }}
          buttonText="Add new Element"
          variant="element"
        />
      </Stack>
      <Stack className="column">
        <AddNewRowAndElementPlaceholder
          onClick={() => {
            console.log("add New Element clicked");
          }}
          buttonText="Add new Element"
          variant="element"
        />
      </Stack> */}
    </StyledRowContainer>
  );
};
export default RowContainer;
