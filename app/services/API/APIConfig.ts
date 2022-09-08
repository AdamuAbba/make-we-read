import { BOOKS_API_KEY } from "@env";
export const API_KEY = BOOKS_API_KEY;
export const GOOGLE_BOOKS_URL = "https://www.googleapis.com/books";
export const GET_BOOKS_BY_NAME_ENDPOINT = "/v1/volumes?q=";
export const KEY_HEADER = "&key" + BOOKS_API_KEY;
