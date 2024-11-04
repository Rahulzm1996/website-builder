import { Box, Stack, styled } from "@mui/material";

export const AddNewRowOrElementwrapper = styled(Box)({
  display: "flex",
  flexBasis: "200px",
  flex: 1,
});

export const FormBuilderStyles = styled(Stack)({
  width: "100%",
  height: "100%",
  flex: 1,
  overflow: "hidden",

  "& .sectionWrapper": {
    width: "100%",
    height: "100%",
    flex: 1,
    overflow: "auto",
  },

  "& .rowsWrapper": {
    maxWidth: "1200px",
    margin: "0 auto",
  },
});
