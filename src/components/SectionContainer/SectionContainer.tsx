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
import {
  useFormBuilderDispatch,
  useFormBuilderSelector,
} from "../../store/store";
import {
  addMoreSection,
  cloneSection,
  deleteSection,
  moveSection,
} from "../../store/formBuilderSlice";

interface SectionContainerProps {
  sectionIdx: number;
  sectionId?: number | string;
  isFirstSection?: boolean;
  isLastSection?: boolean;
  children: () => React.ReactNode;
}

const SectionContainer = (props: SectionContainerProps) => {
  const dispatch = useFormBuilderDispatch();
  const { sections } = useFormBuilderSelector((state) => state.formBuilder);
  const { sectionIdx, sectionId, isFirstSection, isLastSection, children } =
    props || {};

  const totalsSections = sections.length;

  const handleAddMoreSection = () => {
    dispatch(addMoreSection({ sectionIdx }));
  };

  const handleMoveSection = ({ direction }: { direction: "up" | "down" }) => {
    dispatch(moveSection({ sectionIdx, direction }));
  };

  const handleCloneSection = () => {
    dispatch(cloneSection({ sectionIdx }));
  };

  const handleDeleteSection = () => {
    dispatch(deleteSection({ sectionId }));
  };

  return (
    <StyledSectionContainer className="sectionContainer">
      <Box className="creatorActions">
        <Stack className="moveActions">
          {!isFirstSection ? (
            <Tooltip title="Up" placement="right-start" arrow>
              <Stack
                className="iconWrapper"
                onClick={() => handleMoveSection({ direction: "up" })}
              >
                <ArrowUpwardOutlinedIcon className="icon" />
              </Stack>
            </Tooltip>
          ) : null}
          {!isLastSection ? (
            <Tooltip title="Down" placement="right-start" arrow>
              <Stack
                className="iconWrapper"
                onClick={() => handleMoveSection({ direction: "down" })}
              >
                <ArrowDownwardOutlinedIcon className="icon" />
              </Stack>
            </Tooltip>
          ) : null}
        </Stack>
        <Stack className="moreActions">
          <Tooltip title="Settings" placement="left" arrow>
            <Stack className="iconWrapper">
              <SettingsOutlinedIcon className="icon" />
            </Stack>
          </Tooltip>
          <Tooltip title="Clone" placement="left" arrow>
            <Stack className="iconWrapper" onClick={handleCloneSection}>
              <RemoveRedEyeOutlinedIcon className="icon" />
            </Stack>
          </Tooltip>
          <Tooltip title="Save" placement="left" arrow>
            <Stack className="iconWrapper">
              <FileCopyOutlinedIcon className="icon" />
            </Stack>
          </Tooltip>
          <Tooltip title="Delete" placement="left" arrow>
            <Stack className="iconWrapper" onClick={handleDeleteSection}>
              <DeleteOutlineOutlinedIcon className="icon" />
            </Stack>
          </Tooltip>
        </Stack>
      </Box>

      {totalsSections === 1 || isLastSection ? (
        <Stack className="AddNewSection">
          <Tooltip title="Add new Section" placement="bottom" arrow>
            <Stack className="iconWrapper" onClick={handleAddMoreSection}>
              <AddOutlinedIcon className="icon" />
            </Stack>
          </Tooltip>
        </Stack>
      ) : null}
      {children()}
    </StyledSectionContainer>
  );
};
export default SectionContainer;
