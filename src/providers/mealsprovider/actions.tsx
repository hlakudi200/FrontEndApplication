import { createAction } from "redux-actions";
import { IPlan, IPlanStateContext } from "./context";

export enum PlanActionEnums {
  getAllMealPlansTrainerPending = "GET_PlANS_TRAINER_PENDING",
  getAllMealPlansTrainerSuccess = "GET_PlANS_TRAINER_SUCCESS",
  getAllMealPlansTrainerError = "GET_PlAS_TRAINER_ERROR",

  getAllMealPlansClientPending = "GET_PlANS_CLIENT_PENDING",
  getAllMealPlansClientSuccess = "GET_PlANS_CLIENT_SUCCESS",
  getAllMealPlansClientError = "GET_PlANS_CLIENT_ERROR",

  getAllMealPlansByIdPending = "GET_PlANS_BYID_PENDING",
  getAllMealPlansByIdSuccess = "GET_PlANS_BYID_SUCCESS",
  getAllMealPlansByIdError = "GET_PlANS_BYID_ERROR",

  createMealPlanPending = "CREATE_PlAN_PENDING",
  createMealPlansuccess = "CREATE_PlAN_SUCCESS",
  createMealPlanError = "CREATE_PLAN_ERROR",
}

export const getAllMealPlansTrainerPending = createAction<IPlanStateContext>(
    PlanActionEnums.getAllMealPlansTrainerPending,
  
    () => ({ isPending: true, isSuccess: false, isError: false })
  );
  
  export const getAllMealPlansTrainerSuccess = createAction<IPlanStateContext, IPlan[]>(
    PlanActionEnums.getAllMealPlansTrainerSuccess,
  
    (mealPlans: IPlan[]) => ({
      isPending: false,
      isSuccess: true,
      isError: false,
      mealPlans,
    })
  );
  
  export const getAllMealPlansTrainerError = createAction<IPlanStateContext>(
    PlanActionEnums.getAllMealPlansTrainerError,
  
    () => ({ isPending: false, isSuccess: false, isError: true })
  );

export const getAllMealPlansByIdPending = createAction<IPlanStateContext>(
  PlanActionEnums.getAllMealPlansTrainerPending,

  () => ({ isPending: true, isSuccess: false, isError: false })
);

export const getAllMealPlansByIdSuccess = createAction<IPlanStateContext, IPlan>(
  PlanActionEnums.getAllMealPlansByIdSuccess,

  (mealPlan: IPlan) => ({
    isPending: false,
    isSuccess: true,
    isError: false,
    mealPlan,
  })
);

export const getAllMealPlansByIdError = createAction<IPlanStateContext>(
  PlanActionEnums.getAllMealPlansByIdError,

  () => ({ isPending: false, isSuccess: false, isError: true })
);

export const getAllMealPlansClientPending = createAction<IPlanStateContext>(
    PlanActionEnums.getAllMealPlansTrainerPending,
  
    () => ({ isPending: true, isSuccess: false, isError: false })
  );
  
  export const getAllMealPlansClientSuccess = createAction<IPlanStateContext, IPlan[]>(
    PlanActionEnums.getAllMealPlansByIdSuccess,
  
    (mealPlans: IPlan[]) => ({
      isPending: false,
      isSuccess: true,
      isError: false,
      mealPlans,
    })
  );
  
  export const getAllMealPlansClientError = createAction<IPlanStateContext>(
    PlanActionEnums.getAllMealPlansClientError,
  
    () => ({ isPending: false, isSuccess: false, isError: true })
  );
//create
export const createMealPlanPending = createAction<IPlanStateContext>(
  PlanActionEnums.createMealPlanPending,
  () => ({ isPending: true, isSuccess: false, isError: false })
);

export const createMealPlansuccess = createAction<IPlanStateContext, IPlan>(
  PlanActionEnums.createMealPlansuccess,
  (mealPlan: IPlan) => ({
    isPending: false,
    isSuccess: true,
    isError: false,
    mealPlan,
  })
);

export const createMealPlanError = createAction<IPlanStateContext>(
  PlanActionEnums.createMealPlanError,
  () => ({ isPending: false, isSuccess: false, isError: true })
);
