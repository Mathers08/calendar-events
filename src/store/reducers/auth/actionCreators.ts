import {IUser} from "../../../types/IUser";
import {AuthActionEnum, SetErrorAction, SetIsAuthAction, SetIsLoadingAction, SetUserAction} from "./types";
import {AppDispatch} from "../../index";
import axios from "axios";

export const AuthActionCreators = {
  setUser: (payload: IUser): SetUserAction => ({type: AuthActionEnum.SET_USER, payload}),
  setIsAuth: (payload: boolean): SetIsAuthAction => ({type: AuthActionEnum.SET_IS_AUTH, payload}),
  setIsLoading: (payload: boolean): SetIsLoadingAction => ({type: AuthActionEnum.SET_IS_LOADING, payload}),
  setError: (payload: string): SetErrorAction => ({type: AuthActionEnum.SET_ERROR, payload}),
  login: (username: string, password: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(AuthActionCreators.setIsLoading(true));
      setTimeout(async () => {
        const {data: users} = await axios.get<IUser[]>('./users.json');
        const mockUser = users.find(user => user.username === username && user.password === password);
        if (mockUser) {
          localStorage.setItem('auth', 'true');
          localStorage.setItem('username', mockUser.username);
          dispatch(AuthActionCreators.setIsAuth(true));
          dispatch(AuthActionCreators.setUser(mockUser));
        } else {
          dispatch(AuthActionCreators.setError('Некорректный логин или пароль!'));
        }
        dispatch(AuthActionCreators.setIsLoading(false));
      }, 1500);
    } catch (e) {
      dispatch(AuthActionCreators.setError('Произошла ошибка при логине!'));
    }
  },
  logout: () => async (dispatch: AppDispatch) => {
    localStorage.removeItem('auth');
    localStorage.removeItem('username');
    dispatch(AuthActionCreators.setUser({} as IUser));
    dispatch(AuthActionCreators.setIsAuth(false));
  }
}