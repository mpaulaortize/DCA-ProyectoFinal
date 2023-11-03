
export type Observer = ({ render: () => void } & HTMLElement);

export enum Screens {
  LOGIN = "LOGIN",
  DASHBOARD = "DASHBOARD",
  MESSAGESS = "MESSAGESS",
  NOTIFICATION = "NOTIFICATION",
  SEARCH =  "SEARCH",
  USER_PROFILE = "USER_PROFILE",
  SETTINGS = "SETTINGS",
  PASSWORD = "PASSWORD",
  SHARESCREEN = "SHARESCREEN"
}

export type AppState = {
screen: Screens;
}

export enum NavigationActions {
    "NAVIGATE" = "NAVIGATE",
}

export interface NavigateAction {
    action: NavigationActions.NAVIGATE,
    payload: Screens;
}

export type Actions = NavigateAction