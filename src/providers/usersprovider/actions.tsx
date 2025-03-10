import { createAction } from "redux-actions";
import { IUser } from "./models";
import { IUserStateContext } from "./context";

export enum UserActionsEnum {
  getClientsPending = "GET_CLIENTS_PENDING",
  getClientsSuccess = "GET_CLIENTS_SUCCESS",
  getclientsError = "GET_CLIENTS_ERROR",

  getCurrentUserPending = "GET_CURRENT_USER_PENDING",
  getCurrentUserSuccess = "GET_CURRENT_USER_SUCCESS",
  getCurrentUserError = "GET_CURRENT_USER_ERROR",

  signInPending = "SIGN_IN_PENDING",
  signInSuccess = "SIGN_IN_SUCCESS",
  signInError = "SIGN_IN_ERROR",

  signUpPending = "SIGN_UP_PENDING",
  signUpSuccess = "SIGN_UP_SUCCESS",
  signUpError = "SIGN_UP_ERROR",

  signOutPending = "SIGN_OUT_PENDING",
  signOutSuccess = "SIGN_OUT_SUCCESS",
  signOutError = "SIGN_OUT_ERROR",
}

//GET CURRENT USER ACTIONS
export const getCurrentUserPending = createAction<IUserStateContext>(
  UserActionsEnum.getClientsPending,
  () => ({ isPending: true, isSuccess: false, isError: false })
);
export const getCurrentUserSuccess = createAction<IUserStateContext, IUser>(
  UserActionsEnum.getClientsSuccess,
  (user: IUser) => ({
    isPending: false,
    isSuccess: true,
    isError: false,
    user: user,
  })
);
export const getCurrentUserError = createAction<IUserStateContext>(
  UserActionsEnum.getclientsError,
  () => ({ isPending: false, isSuccess: false, isError: true })
);

//GET CLIENTS ACTIONS
export const getClientsPending = createAction<IUserStateContext>(
  UserActionsEnum.getClientsPending,
  () => ({ isPending: true, isSuccess: false, isError: false })
);

export const getClientsSuccess = createAction<IUserStateContext, IUser[]>(
  UserActionsEnum.getClientsSuccess,
  (users: IUser[]) => ({
    isPending: false,
    isSuccess: true,
    isError: false,
    users: users,
  })
);

export const getClientsError = createAction<IUserStateContext>(
  UserActionsEnum.getclientsError,
  () => ({ isPending: false, isSuccess: false, isError: true })
);

//SIGN IN ACTIONS
export const signInPending = createAction<IUserStateContext>(
  UserActionsEnum.signInPending,
  () => ({ isPending: true, isSuccess: false, isError: false })
);

export const signInSuccess = createAction<IUserStateContext, string>(
  UserActionsEnum.signInSuccess,
  (token: string) => ({
    isPending: false,
    isSuccess: true,
    isError: false,
    token: token,
  })
);

export const signInError = createAction<IUserStateContext>(
  UserActionsEnum.signInError,
  () => ({ isPending: false, isSuccess: false, isError: true })
);

//SIGN UP ACTIONS
export const signUpPending = createAction<IUserStateContext>(
  UserActionsEnum.signUpPending,
  () => ({ isPending: true, isSuccess: false, isError: false })
);

export const signUpSuccess = createAction<IUserStateContext, IUser>(
  UserActionsEnum.signUpSuccess,
  (user: IUser) => ({
    isPending: false,
    isSuccess: true,
    isError: false,
    user: user,
  })
);

export const signUpError = createAction<IUserStateContext>(
  UserActionsEnum.signOutError,
  () => ({ isPending: false, isSuccess: false, isError: true })
);

//SIGN OUT ACTIONS
export const signOutPending = createAction<IUserStateContext>(
  UserActionsEnum.signOutPending,
  () => ({ isPending: true, isSuccess: false, isError: false })
);

export const signOutSuccess = createAction<IUserStateContext>(
  UserActionsEnum.signOutSuccess,
  () => ({
    isPending: false,
    isSuccess: true,
    isError: false,
  })
);

export const signOutError = createAction<IUserStateContext>(
  UserActionsEnum.signOutError,
  () => ({ isPending: false, isSuccess: false, isError: true })
);
