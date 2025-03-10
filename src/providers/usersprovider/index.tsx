import { getAxiosInstace } from "@/utils/axios-instance";
import { INITIAL_STATE, UserStateContext, UserActionContext } from "./context";
import { IUser } from "./models";
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
} from "./actions";

export const UsersProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(UserReducer, INITIAL_STATE);
  const instance = getAxiosInstace();

  const getCurrentUser = async () => {
    dispatch(getCurrentUserPending());
    const endpoint = `user/current`;
    await instance
      .get(endpoint)
      .then((reponse) => {
        dispatch(getCurrentUserSuccess(reponse.data));
      })
      .catch((error) => {
        throw error;
      });
  };
  const getClients = async (idTrainer: string) => {
    dispatch(getClientsPending());
    const endpoint = `client/trainer/${idTrainer}/clients`;
    await instance
      .get(endpoint)
      .then((response) => {
        const filteredData = response.data.map((user) => ({
          name: user.fullName,
          email: user.email,
          contactNumber: user.contactNumber,
          dateOfBirth: user.dateOfBirth,
          sex: user.sex,
        }));
        dispatch(getClientsSuccess(filteredData));
      })
      .catch((error) => {
        dispatch(getClientsError());
        throw error;
      });
  };

  const signIn = async (email: string, password: string) => {
    dispatch(signInPending());
    const endpoint = `users/login`;

    await instance
      .post(endpoint, {
        email: email,
        password: password,
      })
      .then((response) => {
        dispatch(signInSuccess(response.data.token));
        console.log(response.data)
        localStorage.setItem("token", response.data.token);
      })
      .catch((error) => {
        dispatch(signInError());
        throw error;
      });
  };

  const signUp = async (user: IUser) => {
    dispatch(signUpPending());
    const endpointTrainer = `users/register`;
    const endpointClient = `users/register/mobile`;
    user == null
      ? singUpHelper(endpointClient, user)
      : singUpHelper(endpointTrainer, user);
  };

  const singUpHelper = async (endPoint: string, user: IUser) => {
    await instance
      .post(endPoint, user)
      .then((response) => {
        dispatch(signUpSuccess(response.data));
      })
      .catch((error) => {
        dispatch(signUpError());
        throw error;
      });
  };

  const signOut = () => {
    try {
      dispatch(signOutPending());
      localStorage.removeItem("token");
      dispatch(signOutSuccess());
    } catch (error) {
      dispatch(signOutError());
    }
  };

  return(
    <UserStateContext.Provider value={state}>
        <UserActionContext.Provider value={{getClients,getCurrentUser,signIn,signUp,signOut}}>
             {children}
        </UserActionContext.Provider>
    </UserStateContext.Provider>
  )
};

export const useUserSate=()=>{
    const context=useContext(UserStateContext);
    if(!context){
        throw new Error('useUserState must be used within a userProvider');
    }
    return context;
}

export const useUserActions=()=>{
    const context=useContext(UserActionContext);
    if(!context){
        throw new Error('useUserActions must be used within a userProvider');
    }
    return context;
}
