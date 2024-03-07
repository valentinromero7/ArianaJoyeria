import { createContext,useState } from "react";
import { CartContext } from "./cartContext";

export const CartContext = createContext([])

export function CartProvider({ children }){
    

    return <CartContext.Provider value={[]}> {children} </CartContext.Provider>
}
