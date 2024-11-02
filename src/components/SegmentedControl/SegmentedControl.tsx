import React, { useState } from "react";
import styled from "@mui/material/styles/styled";
import Tooltip from "@mui/material/Tooltip";
import CropFreeIcon from "@mui/icons-material/CropFree";
import MenuIcon from "@mui/icons-material/Menu";
import ViewColumnIcon from "@mui/icons-material/ViewColumn";
import CodeIcon from "@mui/icons-material/Code";

interface SegmentedControlProps {
  value: number | string;
  defaultValue?: number | string;
  tabsConfig: Array<{
    label?: string;
    value?: number | string;
    icon: React.ReactNode;
    tooltipTitle?: string;
  }>;
}

const SegmentedControl = (props: SegmentedControlProps) => {
  return <div>SegmentedControl</div>;
};

export default SegmentedControl;
