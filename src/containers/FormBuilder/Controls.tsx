import { Stack } from "@mui/material";
import { SegmentedControl } from "../../components/SegmentedControl";
import {
  NavBackButtonConfig,
  viewSwitcher,
  settingsControls,
  editorControls,
  previewControls,
} from "../../contants";
import { ControlsStyles } from "./styles";
import {
  useFormBuilderDispatch,
  useFormBuilderSelector,
} from "../../store/store";
import {
  togglePreviewMode,
  updateViewMode,
} from "../../store/formBuilderSlice";

const Controls = () => {
  const dispatch = useFormBuilderDispatch();
  const { sections } = useFormBuilderSelector((state) => state.formBuilder);

  const handleViewSwitcher = (action: string | undefined) => {
    dispatch(updateViewMode({ mode: action }));
  };

  const handlePreviewControls = (action: string | undefined) => {
    if (action === "save") {
      localStorage.setItem(
        "sectionsFromLocalStorage",
        JSON.stringify(sections)
      );
    } else if (action === "preview") {
      dispatch(togglePreviewMode());
    }
  };

  return (
    <ControlsStyles className="ControlsStyles">
      <Stack className="leftContainer">
        <SegmentedControl
          tabsConfig={NavBackButtonConfig}
          onClick={(value) => console.log("NavBackButtonConfig : ", { value })}
        />
        <SegmentedControl
          tabsConfig={viewSwitcher}
          onClick={handleViewSwitcher}
        />
        <SegmentedControl
          tabsConfig={settingsControls}
          onClick={(value) => console.log("settingsControls : ", { value })}
        />
      </Stack>

      <Stack className="rightContainer">
        <SegmentedControl
          tabsConfig={editorControls}
          onClick={(value) => console.log("editorControls : ", { value })}
        />
        <SegmentedControl
          tabsConfig={previewControls}
          onClick={handlePreviewControls}
        />
      </Stack>
    </ControlsStyles>
  );
};

export default Controls;
