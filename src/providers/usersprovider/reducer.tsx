import { handleActions } from "redux-actions";
import { INITIAL_STATE, IUserStateContext } from "./context";
import { UserActionsEnum } from "./actions";

export const UserReducer = handleActions<IUserStateContext, IUserStateContext>(
  {
    [UserActionsEnum.getClientsPending]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [UserActionsEnum.getClientsSuccess]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [UserActionsEnum.getclientsError]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [UserActionsEnum.signInPending]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [UserActionsEnum.signInSuccess]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [UserActionsEnum.signInError]: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },

    [UserActionsEnum.signUpPending]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [UserActionsEnum.signUpSuccess]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [UserActionsEnum.signUpError]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [UserActionsEnum.signOutPending]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [UserActionsEnum.signOutSuccess]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [UserActionsEnum.signOutError]: (state, action) => ({
      ...state,
      ...action.payload,
    }),

    [UserActionsEnum.getCurrentUserPending]: (state, action) => ({
      ...state,
      ...action.payload,
    }),

    [UserActionsEnum.getCurrentUserSuccess]: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },

    [UserActionsEnum.getCurrentUserError]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [UserActionsEnum.createClientPending]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    
    [UserActionsEnum.createClientSuccess]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    
    [UserActionsEnum.createClientError]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
  },
  INITIAL_STATE
);
