import { configureStore } from "@reduxjs/toolkit";
import bookNameSliceReducer from "./bookNameSlice";
import bookDataSliceReducer from "./bookDataSlice";
export const store = configureStore({
  reducer: {
    bookName: bookNameSliceReducer,
    bookData: bookDataSliceReducer,
  },
});
