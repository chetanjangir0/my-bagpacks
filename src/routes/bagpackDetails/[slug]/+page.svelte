<script lang="ts">
    import type { PageData } from "./$types";
    import Cart from "../../Cart.svelte";
    import { cartItems,isCartOpen } from "../../../store";
    export let data: PageData;
    let bagColor:string=data.name.split('-')[1];
    let quantity:number=1;
    function increaseQuantity():void{
        if(quantity===20) return
        quantity++;
    }
    function decreaseQuantity():void{
        if(quantity===1) return
        quantity--;
    }
    type size= 'XS' | 'S' | 'M' | 'L' | 'XL';
    let size:size='M';
    const sizeButtonClass='w-7 h-7 text-xs text-gray-500 rounded-full transition-all duration-200 hover:border hover:border-gray-700 hover:text-gray-700';
    const sizeButtonClassWhenSelected='w-7 h-7 text-xs rounded-full transition-all duration-200 border border-gray-700 text-gray-700';

    function updateCart():void{
        let productAlreadyInCartIndex:number=$cartItems.findIndex((element)=>element.name===data.name && element.size===size);
        isCartOpen.set(true);
        if(productAlreadyInCartIndex !== -1){
            cartItems.update(items=>{
                const tempCart=[...items];
                tempCart[productAlreadyInCartIndex].quantity+=quantity;
                return tempCart;
            })
            return
        }
        cartItems.update(items=>[...items,{name:data.name,type:data.type,price:data.price,size:size,quantity:quantity}]);
    }
</script>
<section class="flex h-[47rem] items-center space-x-28">
    <div class="max-h-full max-w-full">
        <img class="h-[40rem]" src="/bagpacks/{data.name}.jpg" alt="">
    </div>

    <div class="flex flex-col justify-center items-start">
        <p class="text-5xl text-amber-700 font-semibold">{data.name.toUpperCase()}</p>
        <p class="text-2xl font-semibold">{data.type.toUpperCase()}</p>
        <p class="mt-5">COLOR: {bagColor.toUpperCase()}</p>
        <p class="text-2xl mt-2">$ {data.price}</p>
        <div class="flex space-x-2 mt-9">
            <p>SIZE:</p>
            <button on:click={()=>size='XS'} class="{size==='XS' ? sizeButtonClassWhenSelected : sizeButtonClass}">XS</button>
            <button on:click={()=>size='S'} class="{size==='S' ? sizeButtonClassWhenSelected : sizeButtonClass}">S</button>
            <button on:click={()=>size='M'} class="{size==='M' ? sizeButtonClassWhenSelected : sizeButtonClass}">M</button>
            <button on:click={()=>size='L'} class="{size==='L' ? sizeButtonClassWhenSelected : sizeButtonClass}">L</button>
            <button on:click={()=>size='XL'} class="{size==='XL' ? sizeButtonClassWhenSelected : sizeButtonClass}">XL</button>
        </div>
        <p class="mt-4">QUANTITY</p>
        <div class="flex border border-gray-400">
            <button on:click={decreaseQuantity} class="w-8 h-8 hover:bg-gray-400 active:bg-gray-500">-</button>
            <p class="w-8 h-8 text-center text-xl">{quantity}</p>
            <button on:click={increaseQuantity} class="w-8 h-8 hover:bg-gray-400 active:bg-gray-500">+</button>
        </div>
        <p class="mt-6">
            <button on:click={updateCart} class="transition-all duration-500 text-sm px-28 py-2 border border-black hover:bg-yellow-700 hover:text-white hover:border-white">ADD TO CART</button>
        </p>
    </div>
</section>


{#if $isCartOpen}
    <Cart/>
{/if}
