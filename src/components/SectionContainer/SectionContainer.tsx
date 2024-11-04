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
import { StyledSectionContainer } from "./styles";

const SectionContainer = ({ children }: { children: () => JSX.Element[] }) => {
  return (
    <StyledSectionContainer className="sectionContainer">
      <Box className="creatorActions">
        <Stack className="moveActions">
          <Tooltip title="Up" placement="right-start" arrow>
            <Stack className="iconWrapper">
              <ArrowUpwardOutlinedIcon className="icon" />
            </Stack>
          </Tooltip>
          <Tooltip title="Down" placement="right-start" arrow>
            <Stack className="iconWrapper">
              <ArrowDownwardOutlinedIcon className="icon" />
            </Stack>
          </Tooltip>
        </Stack>
        <Stack className="moreActions">
          <Tooltip title="Settings" placement="left" arrow>
            <Stack className="iconWrapper">
              <SettingsOutlinedIcon className="icon" />
            </Stack>
          </Tooltip>
          <Tooltip title="Clone" placement="left" arrow>
            <Stack className="iconWrapper">
              <RemoveRedEyeOutlinedIcon className="icon" />
            </Stack>
          </Tooltip>
          <Tooltip title="Save" placement="left" arrow>
            <Stack className="iconWrapper">
              <FileCopyOutlinedIcon className="icon" />
            </Stack>
          </Tooltip>
          <Tooltip title="Delete" placement="left" arrow>
            <Stack className="iconWrapper">
              <DeleteOutlineOutlinedIcon className="icon" />
            </Stack>
          </Tooltip>
        </Stack>
      </Box>
      <Stack className="AddNewSection">
        <Tooltip title="Add new Section" placement="bottom" arrow>
          <Stack className="iconWrapper">
            <AddOutlinedIcon className="icon" />
          </Stack>
        </Tooltip>
      </Stack>
      {children()}
    </StyledSectionContainer>
  );
};
export default SectionContainer;
