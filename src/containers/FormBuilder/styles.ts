import { Box, Stack, styled } from "@mui/material";

export const AddNewRowOrElementwrapper = styled(Box)({
  display: "flex",
});

export const FormBuilderStyles = styled(Stack)<{ isMobileView?: boolean }>(
  ({ isMobileView }) => ({
    width: "100%",
    height: "100%",
    flex: 1,
    overflow: "hidden",

    "& .sectionWrapper": {
      width: "100%",
      height: "100%",
      flex: 1,
      overflow: "auto",

      ...(isMobileView
        ? {
            maxWidth: "400px",
            minWidth: 0,
            margin: "0 auto",
          }
        : {}),
    },

    "& .rowsWrapper": {
      maxWidth: "1200px",
      margin: "0 auto",
    },
  })
);

export const ControlsStyles = styled(Stack)({
  flexDirection: "row",
  alignItems: "center",
  flexWrap: "wrap",
  gap: "16px",
  padding: "20px",
  width: "100%",
  backgroundColor: "#ddeefe",
  justifyContent: "space-between",

  "& .leftContainer": {
    gap: "16px",
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },

  "& .rightContainer": {
    gap: "16px",
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
