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
  const { sectionIdx, rowIdx, columnIdx, type, children } = props || {};

  const handleElementSetting = () => {
    dispatch(
      toggleEditElementDrawer({
        open: true,
        editElementAttributes: { sectionIdx, rowIdx, columnIdx, type },
      })
    );
  };

  // const handleCloneElement = () => {
  //   dispatch(cloneElement({ sectionIdx, rowIdx }));
  // };

  // const handleDeleteElement = () => {
  //   console.log("handleDeleteElement");
  // };
  // const handleAddNewElement = () => {
  //   console.log("handleAddNewElement");
  // };

  return (
    <StyledElementContainer>
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
          {/* <Tooltip title="Clone" placement="top" arrow>
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
          </Tooltip> */}
        </Stack>
      </Box>
      {/* <Stack className="addNewElement">
        <Tooltip title="Add New Element" placement="bottom" arrow>
          <Stack className="iconWrapper" onClick={handleAddNewElement}>
            <AddOutlinedIcon className="icon" />
          </Stack>
        </Tooltip>
      </Stack> */}

      {children}
    </StyledElementContainer>
  );
};
export default ElementContainer;
