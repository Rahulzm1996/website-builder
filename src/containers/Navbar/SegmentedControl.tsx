// import { Fullscreen, ViewList, ViewModule, Code } from "@mui/icons-material";
// import { Box, Tooltip, Tabs, Tab } from "@mui/material";
// import React from "react";
// import { useState } from "react";

// interface SegmentedControlProps {
//   value: number | string;
//   defaultValue?: number | string;
//   tabsConfig: Array<{
//     label?: string;
//     value?: number | string;
//     icon: React.ReactNode;
//     tooltipTitle?: string;
//   }>;
// }
// const SegmentedControl = (props: SegmentedControlProps) => {
//   const { value, defaultValue, tabsConfig } = props;
//   const [selectedTab, setSelectedTab] = useState(defaultValue ?? value);

//   const handleChange = (_: React.SyntheticEvent, value: number | string) => {
//     setSelectedTab(value);
//   };

//   return (
//     <Box
//       sx={{
//         width: "100%",
//         bgcolor: "background.paper",
//         p: 1,
//         borderRadius: 2,
//         display: "flex",
//         justifyContent: "center",
//       }}
//     >
//       <Tabs
//         value={selectedTab}
//         onChange={handleChange}
//         aria-label="segmented control"
//         TabIndicatorProps={{ style: { display: "none" } }}
//         sx={{
//           "& .MuiTabs-flexContainer": {
//             gap: 1,
//           },
//           "& .MuiTab-root": {
//             minWidth: "auto",
//             padding: "8px 16px",
//             borderRadius: 1,
//             border: "1px solid #e0e0e0",
//             bgcolor: "white",
//             // "&.Mui-selected": {
//             //   bgcolor: "#bbdefb",
//             //   color: "#1e88e5",
//             // },
//           },
//         }}
//       >
//         {tabsConfig.map((tabConfig, index) => {
//           const { icon, label, tooltipTitle } = tabConfig || {};
//           return (
//             <Tooltip title={tooltipTitle} placement="top" arrow>
//               <Tab key={index} icon={icon} value={value} label={label} />
//             </Tooltip>
//           );
//         })}
//       </Tabs>
//     </Box>
//   );
// };

// export default SegmentedControl;

import React, { useState } from "react";
import styled from "@mui/material/styles/styled";
import Tooltip from "@mui/material/Tooltip";
import CropFreeIcon from "@mui/icons-material/CropFree";
import MenuIcon from "@mui/icons-material/Menu";
import ViewColumnIcon from "@mui/icons-material/ViewColumn";
import CodeIcon from "@mui/icons-material/Code";

const SegmentedControlContainer = styled("div")({
  display: "flex",
  backgroundColor: "#E3F2FD",
  borderRadius: "8px",
  padding: "4px",
});

const TabButton = styled("button")(({ theme, active }) => ({
  flex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "8px",
  backgroundColor: active ? "#BBDEFB" : "transparent",
  color: active ? "blue" : "#555",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  transition: "background-color 0.3s ease",
  "&:hover": {
    backgroundColor: "#BBDEFB",
  },
  "&:focus": {
    outline: "none",
  },
}));

const SegmentedControl = () => {
  const [activeTab, setActiveTab] = useState(1);

  const tabs = [
    { icon: <CropFreeIcon />, label: "Sections" },
    { icon: <MenuIcon />, label: "Rows" },
    { icon: <ViewColumnIcon />, label: "Columns" },
    { icon: <CodeIcon />, label: "Elements" },
  ];

  return (
    <SegmentedControlContainer>
      {tabs.map((tab, index) => (
        <Tooltip key={index} title={tab.label} arrow>
          <TabButton
            active={activeTab === index}
            onClick={() => setActiveTab(index)}
          >
            {tab.icon}
          </TabButton>
        </Tooltip>
      ))}
    </SegmentedControlContainer>
  );
};

export default SegmentedControl;
