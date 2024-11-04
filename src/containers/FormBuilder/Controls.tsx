import { Stack } from "@mui/material";
import React from "react";
import { SegmentedControl } from "../../components/SegmentedControl";
import {
  NavBackButtonConfig,
  viewSwitcher,
  settingsControls,
  editorControls,
  previewControls,
} from "../../contants";

const Controls = () => {
  return (
    <Stack
      sx={{
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "16px",
        padding: "20px",
        width: "100%",
        backgroundColor: "#ddeefe",
      }}
    >
      <SegmentedControl
        tabsConfig={NavBackButtonConfig}
        onClick={(value) => console.log("formbuilder : ", { value })}
      />
      <SegmentedControl
        tabsConfig={viewSwitcher}
        onClick={(value) => console.log("formbuilder : ", { value })}
      />
      <SegmentedControl
        tabsConfig={settingsControls}
        onClick={(value) => console.log("formbuilder : ", { value })}
      />
      <SegmentedControl
        tabsConfig={editorControls}
        onClick={(value) => console.log("formbuilder : ", { value })}
      />
      <SegmentedControl
        tabsConfig={previewControls}
        onClick={(value) => console.log("formbuilder : ", { value })}
      />
    </Stack>
  );
};

export default Controls;
