import { cartItems,isCartOpen } from "../store";
import {get} from "svelte/store";

export interface Backpack {
    name:string,
    type:string,
    price:number
}

export type Size= 'XS' | 'S' | 'M' | 'L' | 'XL';

export function updateCart(backpack:Backpack,size:Size="M",quantity:number=1):void{
    let productAlreadyInCartIndex:number=get(cartItems).findIndex((element)=>element.name===backpack.name && element.size===size);
    isCartOpen.set(true);
    if(productAlreadyInCartIndex !== -1){
        cartItems.update(items=>{
            const tempCart=[...items];
            tempCart[productAlreadyInCartIndex].quantity+=quantity;
            return tempCart;
        })
        return
    }
    cartItems.update(items=>[...items,{name:backpack.name,type:backpack.type,price:backpack.price,size:size,quantity:quantity}]);
}