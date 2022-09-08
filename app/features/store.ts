import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

//slice Reducers
import bookNameSliceReducer from "../redux/bookNameSlice";
import bookDataSliceReducer from "../redux/bookDataSlice";
import { googleBooksApi } from "@services/API/googleBooksApi";

//api Reducers

export const store = configureStore({
  reducer: {
    [googleBooksApi.reducerPath]: googleBooksApi.reducer,
    bookName: bookNameSliceReducer,
    bookData: bookDataSliceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(googleBooksApi.middleware),
});
