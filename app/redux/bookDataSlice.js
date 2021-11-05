import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: "",
  isLoading: false,
};

const bookDataSlice = createSlice({
  name: "bookData",
  initialState,
  reducers: {
    setBooksData: (state, action) => {
      state.books = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setBooksData, setIsLoading } = bookDataSlice.actions;

export default bookDataSlice.reducer;
