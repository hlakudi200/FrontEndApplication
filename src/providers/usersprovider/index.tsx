import { getAxiosInstace } from "@/utils/axios-instance";
import { INITIAL_STATE, UserStateContext, UserActionContext } from "./context";
import { IClient, IUser } from "./models";
import { UserReducer } from "./reducer";
import { useContext, useReducer } from "react";
import {
  getClientsError,
  getClientsPending,
  getClientsSuccess,
  signInPending,
  signInSuccess,
  signInError,
  signUpPending,
  signUpSuccess,
  signUpError,
  signOutPending,
  signOutSuccess,
  signOutError,
  getCurrentUserPending,
  getCurrentUserSuccess,
  getCurrentUserError,
  createClientPending,
  createClientSuccess,
  createClientError,
} from "./actions";
import { message } from "antd";

export const UsersProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(UserReducer, INITIAL_STATE);
  const instance = getAxiosInstace();

  const getCurrentUser = async () => {
    dispatch(getCurrentUserPending());
    const endpoint = `user/current`;
    try {
      const response = await instance.get(endpoint);
      if (response.status === 200 && response.data) {
        const userData: IUser = { ...response.data.data };
        console.log("User Data", userData);
        dispatch(getCurrentUserSuccess(userData));
      } else {
        dispatch(getCurrentUserError());
      }
    } catch (error) {
      console.log(error);
      dispatch(getCurrentUserError());
    }
  };

  const getClients = async (idTrainer: string) => {
    dispatch(getClientsPending());
    const endpoint = `client/trainer/${idTrainer}/clients`;
    try {
      const response = await instance.get(endpoint);
      const filteredData = response.data.data.map((user: IUser) => ({
        fullName: user.fullName,
        email: user.email,
        contactNumber: user.contactNumber,
        dateOfBirth: user.dateOfBirth,
        sex: user.sex,
        trainerId: user.trainerId,
        _id: user._id,
      }));
      console.log(filteredData);
      dispatch(getClientsSuccess(filteredData));
    } catch (error) {
      dispatch(getClientsError());
      console.log("Error message", error);
    }
  };

  const signIn = async (email: string, password: string) => {
    dispatch(signInPending());
    const endpoint = `users/login`;
    try {
      const response = await instance.post(endpoint, { email, password });
      const token = response.data.data.token;
      localStorage.setItem("token", token);
      getCurrentUser();
      dispatch(signInSuccess(token));
    } catch {
      dispatch(signInError());
    }
  };

  const signUp = async (user: IUser) => {
    dispatch(signUpPending());
    const endpoint = user.role ? `users/register` : `users/register/mobile`;
    try {
      await instance.post(endpoint, user);
      dispatch(signUpSuccess(user));
    } catch {
      dispatch(signUpError());
    }
  };

  const signOut = () => {
    try {
      dispatch(signOutPending());
      localStorage.removeItem("token");
      dispatch(signOutSuccess());
    } catch {
      dispatch(signOutError());
    }
  };
  const createClient = async (client: IClient) => {
    dispatch(createClientPending());
    const endpoint = `/client`;

    try {
      console.log("Client", client);
      const response = await instance.post(endpoint, client);
      if (response.status === 201 && response.data) {
        dispatch(createClientSuccess(response.data.data));
        console.log("Client", client);
      } else {
        dispatch(createClientError());
        message.error("Failed to create client.");
      }
    } catch (error) {
      dispatch(createClientError());
      console.log(error);
    }
  };
  return (
    <UserStateContext.Provider value={state}>
      <UserActionContext.Provider
        value={{
          getClients,
          getCurrentUser,
          signIn,
          signUp,
          signOut,
          createClient,
        }}
      >
        {children}
      </UserActionContext.Provider>
    </UserStateContext.Provider>
  );
};

export const useUserSate = () => {
  const context = useContext(UserStateContext);
  if (!context) {
    throw new Error("useUserState must be used within a UsersProvider");
  }
  return context;
};

export const useUserActions = () => {
  const context = useContext(UserActionContext);
  if (!context) {
    throw new Error("useUserActions must be used within a UsersProvider");
  }
  return context;
};
