import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const LS_FAV_KEY = 'rfk';

interface UnspashState {
  favourites: string[];
};

const initialState: UnspashState = {
  favourites: JSON.parse(localStorage.getItem(LS_FAV_KEY) ?? '[]')
};

export const unsplashSlice = createSlice({
  name: 'unsplash',
  initialState,
  reducers: {
    addFavourite(state, action: PayloadAction<string>) {
      state.favourites.push(action.payload);
      localStorage.setItem( LS_FAV_KEY, JSON.stringify(state.favourites));
    },
    removeFavourite(state, action: PayloadAction<string>) {
      state.favourites = state.favourites.filter(f => f !== action.payload);
      localStorage.setItem( LS_FAV_KEY, JSON.stringify(state.favourites));
    }
  }
});

export const unsplashActions = unsplashSlice.actions;
export const unsplashReducer = unsplashSlice.reducer;
