import { Typography, Box, Grid, CardContent, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ViewColumnIcon from "@mui/icons-material/ViewColumn";
import {
  useFormBuilderDispatch,
  useFormBuilderSelector,
} from "../../store/store";
import {
  addMoreRow,
  addNewRow,
  toggleColumnDrawer,
} from "../../store/formBuilderSlice";
import { Header, LayoutCard, StyledColumnDrawer } from "./styles";

type LayoutOption = {
  /**
   * Label to display in the UI,
   * representing the column layout (e.g., "1 column", "2 columns").
   */
  label: string;

  /**
   * Numeric value representing the number of columns (e.g., 1, 2).
   */
  value: number;

  /**
   * Indicates if the option is currently disabled and cannot be added as a column.
   * This can be enabled and added in the future if needed.
   */
  disable: boolean;
};
const layoutOptions: LayoutOption[] = [
  { label: "1 COLUMN", value: 1, disable: false },
  { label: "2 COLUMN", value: 2, disable: false },
  { label: "3 COLUMN", value: 3, disable: false },
  { label: "4 COLUMN", value: 4, disable: false },
  { label: "5 COLUMN", value: 5, disable: false },
  { label: "6 COLUMN", value: 6, disable: false },
  { label: "LEFT SIDEBAR", value: 1, disable: true },
  { label: "RIGHT SIDEBAR", value: 1, disable: true },
];

interface ColumnLayoutDrawerProps {
  open: boolean;
}

const ColumnLayoutDrawer = ({ open }: ColumnLayoutDrawerProps) => {
  const dispatch = useFormBuilderDispatch();
  const { columnsDrawerConfig } = useFormBuilderSelector(
    (state) => state.formBuilder
  );
  const { layoutAttributes } = columnsDrawerConfig || {};
  const { mode, sectionIdx } = layoutAttributes || {};

  const closeDrawer = () => {
    dispatch(toggleColumnDrawer({ open: false, layoutAttributes: {} }));
  };

  const onClose = (_, reason: "backdropClick" | "escapeKeyDown") => {
    if (reason === "backdropClick") {
      closeDrawer();
    }
  };

  const addColumnsInRow = (option: {
    label: string;
    value: number;
    disable: boolean;
  }) => {
    if (!option.disable) {
      if (mode === "existing") {
        dispatch(
          addMoreRow({
            sectionIdx: sectionIdx,
            numberOfColumns: option.value,
          })
        );
      } else {
        dispatch(
          addNewRow({
            sectionIdx: sectionIdx,
            numberOfColumns: option.value,
          })
        );
      }

      closeDrawer();
    }
  };

  return (
    <StyledColumnDrawer
      anchor="right"
      open={open}
      onClose={onClose}
      variant="temporary"
    >
      <Box className="columnsDrawerHeader">
        <Header>Add Row</Header>
        <IconButton onClick={closeDrawer}>
          <CloseIcon />
        </IconButton>
      </Box>
      <Grid container spacing={2} sx={{ padding: "16px", marginTop: "16px" }}>
        {layoutOptions.map((option) => {
          const { label, disable } = option;
          return (
            <Grid
              item
              xs={12}
              sm={6}
              key={label}
              onClick={() => addColumnsInRow(option)}
            >
              <LayoutCard disable={disable}>
                <CardContent>
                  <ViewColumnIcon fontSize="large" color="disabled" />
                  <Typography variant="body2" sx={{ marginTop: "8px" }}>
                    {label}
                  </Typography>
                </CardContent>
              </LayoutCard>
            </Grid>
          );
        })}
      </Grid>
    </StyledColumnDrawer>
  );
};

export default ColumnLayoutDrawer;
