import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "../contants";
import { getEmptyRow, moveRow } from "../utils";
import { v4 as uuidv4 } from "uuid";

const formBuilderSlice = createSlice({
  name: "formBuilder",
  initialState: initialState,
  reducers: {
    addNewRow: (state, { payload }) => {
      // console.log("add new row reducer called : ", { state, payload });
      const { sectionIdx } = payload || {};
      state.sections[sectionIdx].rows = getEmptyRow(3);
    },
    addMoreRow: (state, { payload }) => {
      // console.log("add more reducer called : ", { state, payload });
      const { sectionIdx } = payload || {};
      state.sections[sectionIdx].rows = state.sections[sectionIdx].rows.concat(
        getEmptyRow(2)
      );
    },
    addElement: (state, { payload }) => {
      const { sectionIdx, rowIdx, columnIdx, componentType } = payload || {};
      //type and props will come from outside
      const currentColumn =
        state.sections[sectionIdx].rows[rowIdx].components[columnIdx];
      state.sections[sectionIdx].rows[rowIdx].components[columnIdx] = {
        ...currentColumn,
        type: "HEADLINE",
        props: {
          text: `${sectionIdx + 1} - ${rowIdx + 1} - ${
            columnIdx + 1
          } - "testing heading text`,
        },
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
  },
});

export const {
  addNewRow,
  addMoreRow,
  addElement,
  moveSectionRow,
  cloneSectionRow,
  deleteSectionRow,
  cloneElement,
} = formBuilderSlice.actions;
export default formBuilderSlice.reducer;
