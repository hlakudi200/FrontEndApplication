import { createContext } from "react";


export interface IProduct {
  id: string;
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
}


export interface IProductStateContext {
  isPending: boolean;  
  isSuccess: boolean;  
  isError: boolean;    
  product?: IProduct;  
  products?: IProduct[]; 
}


export interface IProductActionContext {
  getProducts: () => void;      // Fetch all products
  getProduct: (id: string) => void;  // Fetch a single product
  createProduct: (product: IProduct) => void;  // Create a new product
  updateProduct: (product: IProduct) => void;  // Update existing product
  deleteProduct: (id: string) => void;         // Delete a product
}

// Initial state object that defines the default values for our product context
export const INITIAL_STATE: IProductStateContext = {
    isPending: false,  // Indicates if a request is in progress
    isSuccess: false,  // Indicates if the last operation was successful
    isError: false,    // Indicates if the last operation resulted in an error
  };
  
// Create two separate contexts:
// 1. ProductStateContext - Holds the current state of our products
export const ProductStateContext =
  createContext<IProductStateContext>(INITIAL_STATE);

// 2. ProductActionContext - Holds the methods to interact with our products
export const ProductActionContext =
  createContext<IProductActionContext>(undefined);

