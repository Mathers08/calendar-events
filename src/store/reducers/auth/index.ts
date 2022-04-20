import {AuthAction, AuthActionEnum, AuthState} from "./types";
import {IUser} from "../../../types/user";

const initialState: AuthState = {
  isAuth: false,
  isLoading: false,
  user: {} as IUser,
  error: ''
}

export default function authReducer(state = initialState, action: AuthAction): AuthState {
  switch (action.type) {
    case AuthActionEnum.SET_IS_AUTH:
      return {...state, isLoading: false, isAuth: action.payload}
    case AuthActionEnum.SET_IS_LOADING:
      return {...state, isLoading: action.payload}
    case AuthActionEnum.SET_USER:
      return {...state, user: action.payload}
    case AuthActionEnum.SET_ERROR:
      return {...state, isLoading: false, error: action.payload}
    default:
      return state;
  }
}