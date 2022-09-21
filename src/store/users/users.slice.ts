import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const LS_USER_KEY = 'user';

interface UserState {
  user: boolean;
};

const initialState: UserState = {
  user: false,
};

export const usersSlise = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logIn(state, action: PayloadAction<boolean>) {
      state.user = action.payload;
      localStorage.setItem( LS_USER_KEY, JSON.stringify(state.user));
    },
    logOut(state, action: PayloadAction<boolean>) {
      state.user = action.payload;
      localStorage.setItem( LS_USER_KEY, JSON.stringify(state.user));
    }
  }
});

export const usersActions = usersSlise.actions;
export const usersReducer = usersSlise.reducer;
