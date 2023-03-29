<script lang="ts">
import { bagpacks,isCartOpen,cartItems } from "../../store";
import Cart from "../Cart.svelte";
interface bagpack {
        name:string,
        type:string,
        price:number
    }
function updateCart(bagpack:bagpack):void{
        let productAlreadyInCartIndex:number=$cartItems.findIndex((element)=>element.name===bagpack.name && element.size==='M');
        isCartOpen.set(true);
        if(productAlreadyInCartIndex !== -1){
            cartItems.update(items=>{
                const tempCart=[...items];
                tempCart[productAlreadyInCartIndex].quantity++;
                return tempCart;
            })
            return
        }
        cartItems.update(items=>[...items,{name:bagpack.name,type:bagpack.type,price:bagpack.price,size:'M',quantity:1}]);
}
</script>

<div class="text-5xl text-center mt-4">The Catalog</div>

<section id="featuredBagpacks" class="flex flex-wrap justify-center my-11 space-x-6">
    <div></div>
    {#each $bagpacks as bagpack}
        <section id="bagpacks" class="flex flex-col mb-44 h-96 w-96 items-center space-y-2">
            <a href="/bagpackDetails/{bagpack.name},{bagpack.type},{bagpack.price}">
                <div class="transition-all duration-500 hover:-translate-y-4 hover:cursor-pointer">
                    <img class="max-h-full max-w-full" src="/bagpacks/{bagpack.name}.jpg" alt="">
                </div>
            </a>

            
            <a href="/bagpackDetails/{bagpack.name},{bagpack.type},{bagpack.price}"><p class=" text-amber-700 text-3xl">{bagpack.name.replace('-',' ').toUpperCase()}</p></a>

            <p>From $ {bagpack.price}</p>

            <button on:click={()=>updateCart(bagpack)} class="transition-all duration-500 text-sm px-6 py-2 border border-black hover:bg-yellow-700 hover:text-white hover:border-white">ADD TO CART</button>
        </section>
    {/each}
</section>


{#if $isCartOpen}
    <Cart/>
{/if}
