import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "../contants";
import { getEmptyRow, getEmptySection, moveRow, moveSections } from "../utils";
import { v4 as uuidv4 } from "uuid";

const formBuilderSlice = createSlice({
  name: "formBuilder",
  initialState: initialState,
  reducers: {
    initializeSections: (state, { payload }) => {
      const { sections } = payload;
      state.sections = sections;
    },
    toggleColumnDrawer: (state, { payload }) => {
      const { open, layoutAttributes } = payload || {};
      state.columnsDrawerConfig.open = open;
      state.columnsDrawerConfig.layoutAttributes = layoutAttributes;
    },
    addNewRow: (state, { payload }) => {
      const { sectionIdx, numberOfColumns } = payload || {};
      state.sections[sectionIdx].rows = getEmptyRow(numberOfColumns);
    },
    addMoreRow: (state, { payload }) => {
      const { sectionIdx, numberOfColumns } = payload || {};
      state.sections[sectionIdx].rows = state.sections[sectionIdx].rows.concat(
        getEmptyRow(numberOfColumns)
      );
    },
    toggleAddElementsDrawer: (state, { payload }) => {
      const { open, elementAttributes } = payload || {};
      state.elementsDrawerConfig.open = open;
      state.elementsDrawerConfig.elementAttributes = elementAttributes;
    },
    addElement: (state, { payload }) => {
      const { sectionIdx, rowIdx, columnIdx, componentToBeAdded } =
        payload || {};
      const currentColumn =
        state.sections[sectionIdx].rows[rowIdx].components[columnIdx];
      state.sections[sectionIdx].rows[rowIdx].components[columnIdx] = {
        ...currentColumn,
        ...componentToBeAdded,
      };
    },
    moveSectionRow: (state, { payload }) => {
      const { sectionIdx, rowIdx, direction } = payload || {};
      const currentSectionRows = state.sections[sectionIdx].rows;
      state.sections[sectionIdx].rows = moveRow({
        rows: currentSectionRows,
        rowIdx,
        direction,
      });
    },
    cloneSectionRow: (state, { payload }) => {
      const { sectionIdx, rowIdx } = payload || {};
      const currentSectionRows = state.sections[sectionIdx].rows;
      const rowToBeCloned = state.sections[sectionIdx].rows[rowIdx];
      currentSectionRows.splice(rowIdx + 1, 0, {
        ...rowToBeCloned,
        id: uuidv4(),
      });
      state.sections[sectionIdx].rows = currentSectionRows;
    },
    deleteSectionRow: (state, { payload }) => {
      const { sectionIdx, rowId } = payload || {};
      const currentSectionRows = state.sections[sectionIdx].rows;
      state.sections[sectionIdx].rows = currentSectionRows.filter(
        (row) => row.id !== rowId
      );
    },
    cloneElement: (state, { payload }) => {
      const { sectionIdx, rowId } = payload || {};
      const currentSectionRows = state.sections[sectionIdx].rows;
      state.sections[sectionIdx].rows = currentSectionRows.filter(
        (row) => row.id !== rowId
      );
    },
    toggleEditElementDrawer: (state, { payload }) => {
      const { open, editElementAttributes } = payload || {};
      state.editElementDrawerConfig.open = open;
      state.editElementDrawerConfig.editElementAttributes =
        editElementAttributes;
    },
    togglePreviewMode: (state) => {
      state.isPreviewMode = !state.isPreviewMode;
    },
    addMoreSection: (state, { payload }) => {
      const { sectionIdx } = payload || {};
      state.sections[sectionIdx + 1] = getEmptySection();
    },
    moveSection: (state, { payload }) => {
      const { sectionIdx, direction } = payload || {};
      const currentSections = state.sections;
      state.sections = moveSections({
        sections: currentSections,
        sectionIdx,
        direction,
      });
    },
    cloneSection: (state, { payload }) => {
      const { sectionIdx } = payload || {};
      const sectionToBeCloned = state.sections[sectionIdx];
      state.sections.splice(sectionIdx + 1, 0, {
        ...sectionToBeCloned,
        id: uuidv4(),
      });
    },
    deleteSection: (state, { payload }) => {
      const { sectionId } = payload || {};
      const currentSectionRows = state.sections;
      state.sections = currentSectionRows.filter(
        (section) => section.id !== sectionId
      );
    },
    updateViewMode: (state, { payload }) => {
      const { mode } = payload || {};
      state.viewMode = mode;
    },
  },
});

export const {
  initializeSections,
  toggleColumnDrawer,
  addNewRow,
  addMoreRow,
  toggleAddElementsDrawer,
  addElement,
  moveSectionRow,
  cloneSectionRow,
  deleteSectionRow,
  cloneElement,
  toggleEditElementDrawer,
  togglePreviewMode,
  addMoreSection,
  moveSection,
  cloneSection,
  deleteSection,
  updateViewMode,
} = formBuilderSlice.actions;
export default formBuilderSlice.reducer;
