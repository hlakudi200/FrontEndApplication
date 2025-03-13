import { createContext } from "react";

export interface IPlan {
  id?:string; 
    _id:string;
  name: string;
  client: string;
  trainer: string;
  clientName: string;
  description: string;
  notes: string;
  clientNote: string[];
  meals: IMeals[];
  mealsTotals:IMealTotals
  base:boolean;
  __v:number
}

export interface IMeals {
   id?:string
  _id: string;
  name: string;
  note: string;
  clientNotes: string[];
  items:IItems[];
  itemsTotals:IItemsTotals[];
}
export interface IItems {
    id?:string;
  _id:string;
  name: string;
  quantity: number;
  unit: number;
  calories: 24;
  carbs: number;
  protein: number;
  fat: number;
  note: string|null;
}

export interface IItemsTotals{
    calories:number;
    carbs:number;
    protein:number;
    fat:number
}

export interface IMealTotals{
    calories:number;
    carbs:number;
    protein:number;
    fat:number
}

export interface IPlanStateContext {
  isPending: boolean;
  isSuccess: boolean;
  isError: boolean;
  mealPlan?: IPlan;
  mealPlans?:IPlan[];
}

export interface IPlanActionContext {
  getAllMealPlansTrainer:()=>void;
  getAllMealPlansClient:()=>void;
  getAllMealPlansById:(mealId:string)=>void;
  createMealPlan: (mealPlan: IPlan) => void; 
}

export const INITIAL_STATE: IPlanStateContext = {
  isPending: false,
  isSuccess: false,
  isError: false,
};

export const PlanStateContext =
  createContext<IPlanStateContext>(INITIAL_STATE);

export const PlanActionContext =
  createContext<IPlanActionContext>(undefined);
