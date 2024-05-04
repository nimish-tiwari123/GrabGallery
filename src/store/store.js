import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { authentication } from "../apis/service";

export const store = configureStore({
  reducer: {
    [authentication.reducerPath]: authentication.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authentication.middleware),
});

setupListeners(store.dispatch);
