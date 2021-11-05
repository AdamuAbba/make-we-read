import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchValue: "",
};

const bookNameSlice = createSlice({
  name: "bookName",
  initialState,
  reducers: {
    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
  },
});

export const { setSearchValue } = bookNameSlice.actions;

export default bookNameSlice.reducer;
