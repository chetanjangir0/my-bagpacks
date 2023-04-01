<script lang="ts">
import { bagpacks,isCartOpen,cartItems } from "../../store";
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

<div class="text-3xl text-center mt-4 font-majorMono sm:text-5xl">The Catalog</div>


<section id="allbagpacks" class="flex flex-wrap justify-around my-11 sm:justify-center sm:space-x-6">
    <div class="hidden sm:block"></div>
    {#each $bagpacks as bagpack}
        <section id="bagpacks" class="flex flex-col flex-wrap h-72 w-48 items-center sm:space-y-2 sm:h-96 sm:w-96 sm:flex-nowrap sm:mb-44">
            <a href="/bagpackDetails/{bagpack.name},{bagpack.type},{bagpack.price}">
                <div class="transition-all duration-500 sm:hover:-translate-y-4 sm:hover:cursor-pointer">
                    <img class="max-h-full max-w-full" src="/bagpacks/{bagpack.name}.jpg" alt="">
                </div>
            </a>

            
            <a class="font-mono text-center sm:text-left" href="/bagpackDetails/{bagpack.name},{bagpack.type},{bagpack.price}">
                <p class="text-amber-700 text-xl sm:text-3xl">{bagpack.name.replace('-',' ').toUpperCase()}</p>
            </a>

            <p>From $ {bagpack.price}</p>

            <button on:click={()=>updateCart(bagpack)} class="transition-all duration-500 text-sm px-4 py-1 border border-black hover:bg-yellow-700 hover:text-white hover:border-white sm:px-6 sm:py-2">ADD TO CART</button>
        </section>
    {/each}
</section>