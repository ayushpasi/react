import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    addByValue: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, addByValue } = counterSlice.actions;
export default counterSlice.reducer;
