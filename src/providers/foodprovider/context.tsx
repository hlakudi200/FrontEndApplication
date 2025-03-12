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
  getFoods: () => void;      // Fetch all Foods
  getFoodbysearchterm: (term: string) => Promise<void>; 
  getFoodbyCatergory: (categ: string) => Promise<void>;  // Fetch a single Food
  createFood: (Food: IFood) => void;  // Create a new Food
  updateFood: (Food: IFood) => void;  // Update existing Food
  deleteFood: (id: string) => void;         // Delete a Food
}

// Initial state object that defines the default values for our Food context
export const INITIAL_STATE: IFoodStateContext = {
    isPending: false,  // Indicates if a request is in progress
    isSuccess: false,  // Indicates if the last operation was successful
    isError: false, 
       // Indicates if the last operation resulted in an error
  };
  
// Create two separate contexts:
// 1. FoodStateContext - Holds the current state of our Foods
export const FoodStateContext =
  createContext<IFoodStateContext>(INITIAL_STATE);

// 2. FoodActionContext - Holds the methods to interact with our Foods
export const FoodActionContext =
  createContext<IFoodActionContext>(undefined);

