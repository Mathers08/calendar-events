import {Event, Login} from "../pages";

interface IRoute {
  path: string;
  element: JSX.Element,
}

export enum RouteNames {
  EVENT = '/',
  LOGIN = '/login'
}

export const publicRoutes: IRoute[] = [
  {path: RouteNames.LOGIN, element: Login()}
]

export const privateRoutes: IRoute[] = [
  {path: RouteNames.EVENT, element: Event()}
]
