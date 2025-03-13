import { createContext } from "react";


export interface IFood {
  _id:string
  name: string;
  protein: number;
  carbs: number;
  sugar: number;
  fat: number;
  fiber: number,
  sodium:number,
  potassium:number,
  catergory:string,
  servingSize:number,
  cholesterol:number,
  energy:number
}


export interface IFoodStateContext {
  isPending: boolean;  
  isSuccess: boolean;  
  isError: boolean;    
  food?: IFood;  
  foods?: IFood[]; 
}


export interface IFoodActionContext {
  getFoods: () => void;      
  getFoodbysearchterm: (term: string) => Promise<void>; 
  getFoodbyCatergory: (categ: string) => Promise<void>;  
  createFood: (Food: IFood) => void;    
}


export const INITIAL_STATE: IFoodStateContext = {
    isPending: false,  
    isSuccess: false,  
    isError: false, 
      
  };
  

export const FoodStateContext =
  createContext<IFoodStateContext>(INITIAL_STATE);


export const FoodActionContext =
  createContext<IFoodActionContext>(undefined);

