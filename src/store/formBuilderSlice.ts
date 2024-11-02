import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "../contants";
import { getEmptyRow } from "../utils";

const formBuilderSlice = createSlice({
  name: "formBuilder",
  initialState: initialState,
  reducers: {
    addNewRow: (state, { payload }) => {
      console.log("add new row reducer called : ", { state, payload });
      const { sectionIdx } = payload || {};
      state.sections[sectionIdx].rows = getEmptyRow(3);
    },
    addMoreRow: (state, { payload }) => {
      console.log("add more reducer called : ", { state, payload });
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
          text: "testing heading text",
        },
      };
    },
    // resetState: (state, action) => {},
  },
});

export const { addNewRow, addMoreRow, addElement } = formBuilderSlice.actions;
export default formBuilderSlice.reducer;
