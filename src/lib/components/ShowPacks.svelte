<script lang="ts">
    import {backpacks} from "../../store";
    import {updateCart} from "$lib/utils";

    export let showQuantity=$backpacks.length;
    

    
</script>


<section class="flex flex-wrap justify-around my-11 sm:justify-center sm:space-x-6">
    <div class="hidden sm:block"></div>
    {#each $backpacks.slice(0,showQuantity) as backpack}
        <section id="bagpacks" class="flex flex-col flex-wrap h-80 w-48 items-center sm:space-y-2 sm:h-96 sm:w-96 sm:flex-nowrap sm:mb-44">
            <a href="/bagpackDetails/{backpack.name},{backpack.type},{backpack.price}">
                <div class="transition-all duration-500 sm:hover:-translate-y-4 sm:hover:cursor-pointer">
                    <img class="max-h-full max-w-full" src="/bagpacks/{backpack.name}.jpg" alt="">
                </div>
            </a>

            
            <a class="font-mono text-center w-20 sm:w-auto sm:text-left" href="/bagpackDetails/{backpack.name},{backpack.type},{backpack.price}">
                <p class="text-amber-700 text-xl sm:text-3xl">{backpack.name.replace('-',' ').toUpperCase()}</p>
            </a>

            <p>From $ {backpack.price}</p>

            <button on:click={()=>updateCart(backpack)} class="transition-all duration-500 text-sm px-4 py-1 border border-black hover:bg-yellow-700 hover:text-white hover:border-white sm:px-6 sm:py-2">ADD TO CART</button>
        </section>
    {/each}
</section>