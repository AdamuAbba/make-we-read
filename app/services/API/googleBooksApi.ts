import { Book } from "@configs/Types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  GET_BOOKS_BY_NAME_ENDPOINT,
  GOOGLE_BOOKS_URL,
  KEY_HEADER,
} from "@services/API/APIConfig";

export const googleBooksApi = createApi({
  reducerPath: "googleBooksApi",
  baseQuery: fetchBaseQuery({ baseUrl: GOOGLE_BOOKS_URL }),
  endpoints: (builder) => ({
    getBooksData: builder.query<Book | undefined, string>({
      query: (param) => `${GET_BOOKS_BY_NAME_ENDPOINT}${param}${KEY_HEADER}`,
    }),
  }),
});

export const { useGetBooksDataQuery } = googleBooksApi;
