import React from "react";
import { ElementContainer } from "./ElementContainer";
import { Stack } from "@mui/material";

const DynamicElementContainer = ({ component: Component, ...props }) => {
  const { sectionIdx, rowIdx, columnIdx, type } = props;

  return (
    <ElementContainer
      key={columnIdx}
      sectionIdx={sectionIdx}
      rowIdx={rowIdx}
      columnIdx={columnIdx}
      type={type}
    >
      {/* <Stack>
        <Stack className="column">
      </Stack> */}
      <Component {...props} />
    </ElementContainer>
  );
};

export default DynamicElementContainer;
