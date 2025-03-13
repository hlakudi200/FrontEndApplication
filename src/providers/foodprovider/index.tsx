import { getAxiosInstace } from "@/utils/axios-instance";
import {
  INITIAL_STATE,
  IFood,
  FoodActionContext,
  FoodStateContext,
} from "./context";
import { FoodReducer } from "./reducer";
import { useContext, useReducer } from "react";
import {
  getFoodsError,
  getFoodsPending,
  getFoodsSuccess,
  getFoodbysearchtermError,
  getFoodbysearchtermPending,
  getFoodbysearchtermSuccess,
  createFoodPending,
  createFoodError,
  createFoodSuccess,
} from "./actions";

export const FoodProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(FoodReducer, INITIAL_STATE);
  const instance = getAxiosInstace();

  const getFoods = async () => {
    dispatch(getFoodsPending());
    const endpoint = `food/`;
    try {
      const response = await instance.get(endpoint);
      if (response?.data?.status == 200 && response.data?.data) {
        dispatch(getFoodsSuccess(response.data.data));
      } else {
        dispatch(getFoodsError());
      }
    } catch (error) {
      console.log(error);
      dispatch(getFoodsError());
    }
  };
 
  const getFoodbysearchterm = async (term: string) => {

    dispatch(getFoodbysearchtermPending());
    const endpoint = `/food/search/${term}`;
    await instance
      .get(endpoint)
      .then((response) => {
        dispatch(getFoodbysearchtermSuccess(response.data.data));
      })
      .catch((error) => {
        console.error(error);
        dispatch(getFoodbysearchtermError());
      });
  };
  const getFoodbyCatergory = async (categ: string) => {
    dispatch(getFoodbysearchtermPending());
    const endpoint = `/food/category/${categ}`;
    await instance
      .get(endpoint)
      .then((response) => {
        dispatch(getFoodbysearchtermSuccess(response.data.data));
      })
      .catch((error) => {
        console.error(error);
        dispatch(getFoodbysearchtermError());
      });
  };

  const createFood = async (food: IFood) => {
    dispatch(createFoodPending());
    const endpoint = `/food`;
    await instance
      .post(endpoint, food)
      .then((response) => {
        dispatch(createFoodSuccess(response.data));
       
      })
      .catch((error) => {
        console.error(error);
        dispatch(createFoodError());
      });
  };



  return (
    <FoodStateContext.Provider value={state}>
      <FoodActionContext.Provider
        value={{
          getFoods,
          getFoodbysearchterm,
          getFoodbyCatergory,
          createFood,
        }}
      >
        {children}
      </FoodActionContext.Provider>
    </FoodStateContext.Provider>
  );
};

export const useFoodState = () => {
  const context = useContext(FoodStateContext);
  if (!context) {
    throw new Error("useFoodState must be used within a FoodProvider");
  }
  return context;
};

export const useFoodActions = () => {
  const context = useContext(FoodActionContext);
  if (!context) {
    throw new Error("useFoodActions must be used within a FoodProvider");
  }
  return context;
};
