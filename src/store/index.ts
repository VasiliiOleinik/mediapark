import { configureStore } from "@reduxjs/toolkit";
import { unsplashApi } from "./unsplash/unsplash.api";
import { unsplashReducer } from './unsplash/unsplash.slise';
import { usersReducer } from "./users/users.slice";

export const store = configureStore({
  reducer: {
    [unsplashApi.reducerPath]: unsplashApi.reducer,
    unsplash: unsplashReducer,
    users: usersReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(unsplashApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>;