import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "../contants";
import { getEmptyRow } from "../utils";

const formBuilderSlice = createSlice({
  name: "formBuilder",
  initialState: initialState,
  reducers: {
    addNewRow: (state, { payload }) => {
      console.log("add new row reducer called : ", { state, payload });
      const { sectionIndex } = payload || {};
      state.sections[sectionIndex].rows = getEmptyRow(2);
    },
    addMoreRow: (state, { payload }) => {
      console.log("add more reducer called : ", { state, payload });
      const { sectionIndex } = payload || {};
      state.sections[sectionIndex].rows = state.sections[
        sectionIndex
      ].rows.concat(getEmptyRow(2));
    },
    // resetState: (state, action) => {},
  },
});

export const { addNewRow, addMoreRow } = formBuilderSlice.actions;
export default formBuilderSlice.reducer;
