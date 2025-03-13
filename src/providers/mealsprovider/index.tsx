import { getAxiosInstace } from "@/utils/axios-instance";
import {
  INITIAL_STATE,
  IPlan,
  PlanActionContext,
  PlanStateContext,
} from "./context";
import { PlanReducer } from "./reducer";
import { useContext, useReducer } from "react";
import {
  getAllMealPlansTrainerPending,
  getAllMealPlansTrainerSuccess,
  getAllMealPlansTrainerError,
  getAllMealPlansClientPending,
  getAllMealPlansClientSuccess,
  getAllMealPlansClientError,
  getAllMealPlansByIdPending,
  getAllMealPlansByIdSuccess,
  getAllMealPlansByIdError,
  createMealPlanPending,
  createMealPlansuccess,
  createMealPlanError,
} from "./actions";

export const PlanProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(PlanReducer, INITIAL_STATE);
  const instance = getAxiosInstace();

  const getAllMealPlansClient = async () => {
    dispatch(getAllMealPlansClientPending());
    const endpoint = `Plan/`;
    try {
      const response = await instance.get(endpoint);
      if (response?.data?.status == 200 && response.data?.data) {
        dispatch(getAllMealPlansClientSuccess(response.data.data));
      } else {
        dispatch(getAllMealPlansClientError());
      }
    } catch (error) {
      console.log(error);
      dispatch(getAllMealPlansClientError());
    }
  };

  const getAllMealPlansTrainer = async () => {
    dispatch(getAllMealPlansTrainerPending());
    const endpoint = `plan/`;
    try {
      const response = await instance.get(endpoint);
      if (response?.data?.status == 200 && response.data?.data) {
        dispatch(getAllMealPlansTrainerSuccess(response.data.data));
      } else {
        dispatch(getAllMealPlansTrainerError());
      }
    } catch (error) {
      console.log(error);
      dispatch(getAllMealPlansTrainerError());
    }
  };

  const getAllMealPlansById = async (mealId: string) => {
    dispatch(getAllMealPlansByIdPending());
    const endpoint = `/plan/search/${mealId}`;
    await instance
      .get(endpoint)
      .then((response) => {
        dispatch(getAllMealPlansByIdSuccess(response.data.data));
      })
      .catch((error) => {
        console.error(error);
        dispatch(getAllMealPlansByIdError());
      });
  };

  const createMealPlan = async (mealPlan: IPlan) => {
    dispatch(createMealPlanPending());
    const endpoint = `/plan`;
    await instance
      .post(endpoint, mealPlan)
      .then((response) => {
        dispatch(createMealPlansuccess(response.data));
      })
      .catch((error) => {
        console.error(error);
        dispatch(createMealPlanError());
      });
  };

  return (
    <PlanStateContext.Provider value={state}>
      <PlanActionContext.Provider
        value={{
         getAllMealPlansTrainer,
         getAllMealPlansClient,
         getAllMealPlansById,
         createMealPlan,
        }}
      >
        {children}
      </PlanActionContext.Provider>
    </PlanStateContext.Provider>
  );
};

export const usePlanState = () => {
  const context = useContext(PlanStateContext);
  if (!context) {
    throw new Error("usePlanState must be used within a PlanProvider");
  }
  return context;
};

export const usePlanActions = () => {
  const context = useContext(PlanActionContext);
  if (!context) {
    throw new Error("usePlanActions must be used within a PlanProvider");
  }
  return context;
};
