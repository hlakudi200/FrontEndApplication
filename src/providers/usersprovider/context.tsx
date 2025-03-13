import { createContext } from "react";
import { IClient, IUser } from "./models";

export interface IUserStateContext {
  isPending: boolean;
  isSuccess: boolean;
  isError: boolean;
  user?: IUser;
  users?:IUser[];
}

export interface IUserActionsContext {
  getClients: (idTrainer: string) => Promise<void>;
  getCurrentUser: () => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (user: IUser) => Promise<void>;
  signOut: () => void;
  createClient: (client: IClient) => Promise<void>;  
  client?:IClient;

}

export const INITIAL_STATE: IUserStateContext = {
  isPending: false,
  isSuccess: false,
  isError: false,
  users:[]
};

export const UserStateContext = createContext<IUserStateContext>(INITIAL_STATE);
export const UserActionContext = createContext<IUserActionsContext>(undefined);
