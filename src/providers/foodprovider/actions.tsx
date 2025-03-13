import { createAction } from "redux-actions";
import { IFood, IFoodStateContext } from "./context";

// Enum defining the type of actions that can be dispatched
export enum FoodActionEnums {
  // Each operation (get/create/update/delete) has three states:
  // PENDING: Action started
  // SUCCESS: Action completed successfully
  // ERROR: Action failed
  getFoodsPending = "GET_FOODS_PENDING",
  getFoodsSuccess = "GET_FOODS_SUCCESS",
  getFoodsError = "GET_FOODS_ERROR",

  getFoodbysearchtermPending = "GET_SERACH_FOOD_PENDING",
  getFoodbysearchtermSuccess = "GET_SERACH_FOOD_SUCCESS",
  getFoodbysearchtermError = "GET_SERACH_FOOD_ERROR",

  getFoodbyCatergoryPending = "GET_CATERGORY_FOOD_PENDING",
  getFoodbyCatergorySuccess = "GET_CATERGORY_FOOD_SUCCESS",
  getFoodbyCatergoryError = "GET_CATERGORY_FOOD_ERROR",

  createFoodPending = "CREATE_FOOD_PENDING",
  createFoodSuccess = "CREATE_FOOD_SUCCESS",
  createFoodError = "CREATE_FOOD_ERROR",

}

// createAction<PayloadType>(actionType, payloadCreator)
// - PayloadType: The type of data the action will contain
// - actionType: The string identifier for this action
// - payloadCreator: Function that returns the action payload

// Get All Foods Actions
export const getFoodsPending = createAction<IFoodStateContext>(
  FoodActionEnums.getFoodsPending,
  // Returns state object indicating loading started
  () => ({ isPending: true, isSuccess: false, isError: false })
);

// Example of createAction with multiple generic types:
// createAction<ReturnType, PayloadType>
export const getFoodsSuccess = createAction<
  IFoodStateContext, // What the payload creator returns
  IFood[] // Type of argument passed to payload creator
>(
  FoodActionEnums.getFoodsSuccess,
  // Receives Foods array and returns state with Foods
  (foods: IFood[]) => ({
    isPending: false,
    isSuccess: true,
    isError: false,
    foods, // Include fetched Foods in state
  })
);

export const getFoodsError = createAction<IFoodStateContext>(
  FoodActionEnums.getFoodsError,
  // Returns state object indicating error occurred
  () => ({ isPending: false, isSuccess: false, isError: true })
);


export const getFoodbysearchtermPending = createAction<IFoodStateContext>(
  FoodActionEnums.getFoodbysearchtermPending,
  () => ({ isPending: true, isSuccess: false, isError: false })
);

export const getFoodbysearchtermSuccess = createAction<
  IFoodStateContext,
  IFood[]
>(FoodActionEnums.getFoodbysearchtermSuccess, (foods: IFood[]) => ({
  isPending: false,
  isSuccess: true,
  isError: false,
  foods,
}));

export const getFoodbysearchtermError = createAction<IFoodStateContext>(
  FoodActionEnums.getFoodbysearchtermError,
  () => ({ isPending: false, isSuccess: false, isError: true })
);

//Catergory
export const getFoodbyCatergoryPending = createAction<IFoodStateContext>(
  FoodActionEnums.getFoodbyCatergoryPending,
  () => ({ isPending: true, isSuccess: false, isError: false })
);

export const getFoodbyCatergorySuccess = createAction<
  IFoodStateContext,
  IFood[]
>(FoodActionEnums.getFoodbyCatergorySuccess, (foods: IFood[]) => ({
  isPending: false,
  isSuccess: true,
  isError: false,
  foods,
}));

export const getFoodbyCatergoryError = createAction<IFoodStateContext>(
  FoodActionEnums.getFoodbyCatergoryError,
  () => ({ isPending: false, isSuccess: false, isError: true })
);

export const createFoodPending = createAction<IFoodStateContext>(
  FoodActionEnums.createFoodPending,
  () => ({ isPending: true, isSuccess: false, isError: false })
);

export const createFoodSuccess = createAction<IFoodStateContext, IFood>(
  FoodActionEnums.createFoodSuccess,
  (food: IFood) => ({
    isPending: false,
    isSuccess: true,
    isError: false,
    food,
  })
);

export const createFoodError = createAction<IFoodStateContext>(
  FoodActionEnums.createFoodError,
  () => ({ isPending: false, isSuccess: false, isError: true })
);



