import React from "react";
import { AppNavigator } from "./app.navigator";
import { BookContextProvider } from "../../services/books/book.context";

export const Navigation = () => {
  return (
    <BookContextProvider>
      <AppNavigator />
    </BookContextProvider>
  );
};
