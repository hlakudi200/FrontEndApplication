import { createContext } from "react";
import { IUser } from "./models";

export interface IUserStateContext {
  isPending: boolean;
  isSuccess: boolean;
  isError: boolean;
  user?: IUser;
  users?:IUser[];
}

export interface IUserActionsContext {
  getClients: (idTrainer: string) => Promise<void>;
  getCurrentUser: () => void;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (user: IUser) => Promise<void>;
  signOut: () => void;
}

export const INITIAL_STATE: IUserStateContext = {
  isPending: false,
  isSuccess: false,
  isError: false,
};

export const UserStateContext = createContext<IUserStateContext>(INITIAL_STATE);
export const UserActionContext = createContext<IUserActionsContext>(undefined);
