import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux"
import { unsplashActions } from "../store/unsplash/unsplash.slise";
import { usersActions } from "../store/users/users.slice";


const actions = {
  ...unsplashActions,
  ...usersActions
}

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actions, dispatch);
}