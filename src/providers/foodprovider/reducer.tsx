import { handleActions } from "redux-actions";
import { INITIAL_STATE, IFoodStateContext } from "./context";
import { FoodActionEnums } from "./actions";

export const FoodReducer = handleActions<IFoodStateContext, IFoodStateContext>({
    [FoodActionEnums.getFoodsPending]: (state, action) => ({
        ...state,
        ...action.payload,
    }),
    [FoodActionEnums.getFoodsSuccess]: (state, action) => {
        console.log('state, action', state, action)
        return ({
            ...state,
            ...action.payload,
        })
    },
    [FoodActionEnums.getFoodsError]: (state, action) => ({
        ...state,
        ...action.payload,
    }),
    [FoodActionEnums.getFoodbysearchtermPending]: (state, action) => ({
        ...state,
        ...action.payload,
    }),
    [FoodActionEnums.getFoodbysearchtermSuccess]: (state, action) => ({
        ...state,
        ...action.payload,
    }),
    [FoodActionEnums.getFoodbysearchtermError]: (state, action) => ({
        ...state,
        ...action.payload,
    }),
    [FoodActionEnums.createFoodPending]: (state, action) => ({
        ...state,
        ...action.payload,
    }),
    [FoodActionEnums.createFoodSuccess]: (state, action) => ({
        ...state,
        ...action.payload,
    }),
    [FoodActionEnums.createFoodError]: (state, action) => ({
        ...state,
        ...action.payload,
    }),
    [FoodActionEnums.updateFoodPending]: (state, action) => ({
        ...state,
        ...action.payload,
    }),
    [FoodActionEnums.updateFoodSuccess]: (state, action) => ({
        ...state,
        ...action.payload,
    }),
    [FoodActionEnums.updateFoodError]: (state, action) => ({
        ...state,
        ...action.payload,
    }),
    [FoodActionEnums.deleteFoodPending]: (state, action) => ({
        ...state,
        ...action.payload,
    }),
    [FoodActionEnums.deleteFoodSuccess]: (state, action) => ({
        ...state,
        ...action.payload,
    }),
    [FoodActionEnums.deleteFoodError]: (state, action) => ({
        ...state,
        ...action.payload,
    }),
}, INITIAL_STATE );
