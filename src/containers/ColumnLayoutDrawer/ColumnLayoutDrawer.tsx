import React from "react";
import {
  Drawer,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  IconButton,
  Stack,
} from "@mui/material";
import { styled } from "@mui/system";
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

const drawerWidth = 400;

const StyledColumnDrawer = styled(Drawer)(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  "& .MuiDrawer-paper": {
    width: drawerWidth,
    boxSizing: "border-box",
    backgroundColor: "white",
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

const LayoutCard = styled(Card)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  borderRadius: "8px",
  cursor: "pointer",
  color: "#455a64",
  boxShadow: "none",
  border: "1px solid #cfd8dc",
  "&:hover": {
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
  },
});

const layoutOptions = [
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
    console.log("addColumnsInRow", { mode, layoutAttributes });
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
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        sx={{ backgroundColor: "#f2f7fa", padding: "15px 20px" }}
      >
        <Header variant="h6">Add Row</Header>
        <IconButton onClick={closeDrawer}>
          <CloseIcon />
        </IconButton>
      </Box>
      <Grid container spacing={2} marginTop={2} sx={{ padding: "16px" }}>
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
              <LayoutCard
                sx={{
                  border: "2px solid #f2f7fa",
                  transition: "all 0.2s ease-in-out 0s",
                  cursor: disable ? "not-allowed" : "pointer",

                  ":hover": {
                    transform: disable ? "none" : "rotate(5deg)",
                    backgroundColor: "#f2f7fa",
                    borderColor: "#e0ecf3",
                  },
                }}
              >
                <CardContent>
                  <ViewColumnIcon fontSize="large" color="disabled" />
                  <Typography variant="body2" style={{ marginTop: "8px" }}>
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
