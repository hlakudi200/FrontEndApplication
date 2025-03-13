import { handleActions } from "redux-actions";
import { INITIAL_STATE, IPlanStateContext} from "./context";
import { PlanActionEnums } from "./actions";

export const PlanReducer = handleActions<IPlanStateContext, IPlanStateContext>({
    [PlanActionEnums.getAllMealPlansTrainerPending]: (state, action) => ({
        ...state,
        ...action.payload,
    }),
    [PlanActionEnums.getAllMealPlansTrainerSuccess]: (state, action) => {
        return ({
            ...state,
            ...action.payload,
        })
    },
    [PlanActionEnums.getAllMealPlansTrainerError]: (state, action) => ({
        ...state,
        ...action.payload,
    }),
    [PlanActionEnums. getAllMealPlansClientPending]: (state, action) => ({
        ...state,
        ...action.payload,
    }),
    [PlanActionEnums.getAllMealPlansClientSuccess]: (state, action) => ({
        ...state,
        ...action.payload,
    }),
    [PlanActionEnums.getAllMealPlansClientError]: (state, action) => ({
        ...state,
        ...action.payload,
    }),
    [PlanActionEnums.getAllMealPlansByIdPending]: (state, action) => ({
        ...state,
        ...action.payload,
    }),
    [PlanActionEnums.getAllMealPlansByIdSuccess]: (state, action) => ({
        ...state,
        ...action.payload,
    }),
    [PlanActionEnums.getAllMealPlansByIdError]: (state, action) => ({
        ...state,
        ...action.payload,
    }),
    [PlanActionEnums.createMealPlanPending ]: (state, action) => ({
        ...state,
        ...action.payload,
    }),
    [PlanActionEnums.createMealPlansuccess ]: (state, action) => ({
        ...state,
        ...action.payload,
    }), 
    [PlanActionEnums.createMealPlanError]: (state, action) => ({
        ...state,
        ...action.payload,
    }),
   
}, INITIAL_STATE );
