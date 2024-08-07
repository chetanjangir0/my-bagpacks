
import { readable,writable} from "svelte/store";
export const bagpacks=readable([
    {name:'geometry-black',type:'casual',price:1499},
    {name:'chemistry-orange',type:'casual',price:799},
    {name:'cricket2-yellow',type:'casual',price:799},
    {name:'cricket-blue',type:'casual',price:1749},
    {name:'chemistry-green',type:'casual',price:359},
    {name:'geometry-blue',type:'casual',price:690},
    {name:'skye-red',type:'casual',price:990},
    {name:'chemistry-blue',type:'casual',price:1000},
    {name:'geometry-grey',type:'casual',price:499},
    {name:'faroe-blue',type:'casual',price:1700},
    {name:'skye-blue',type:'casual',price:1690},
    {name:'faroe-black',type:'casual',price:1440},
    {name:'champion-blue',type:'casual',price:899},
    {name:'kobe-black',type:'casual',price:590},
    {name:'virton-black',type:'casual',price:740},
    {name:'kona-red',type:'casual',price:560}
])

export const featuredBagpacks=readable([
    {name:'geometry-black',type:'casual',price:1499},
    {name:'chemistry-orange',type:'casual',price:799},
    {name:'cricket2-yellow',type:'casual',price:799},
    {name:'cricket-blue',type:'casual',price:1749},
    {name:'chemistry-blue',type:'casual',price:1000},
    {name:'geometry-blue',type:'casual',price:690}
])
export const isCartOpen=writable(false);
export const isHamburgerOpen=writable(false);
export const cartItems=writable([{name:'0',type:'0',price:0,size:'0',quantity:0}]);