<script lang="ts">
    import { isCartOpen, cartItems} from "../../store";
    import { fade,fly } from "svelte/transition";
    import { removeItemFromCart } from "$lib/utils";

    $: subTotal=$cartItems.reduce((total,currentValue)=>{return total+currentValue.quantity*currentValue.price},0);

</script>

<section>
    <button transition:fade on:click={()=>isCartOpen.set(false)} class="fixed min-w-full h-screen top-0 left-0 bg-black opacity-25 z-50 cursor-default"></button>


    <div transition:fly="{{ x: 200, duration: 500 }}" class="fixed w-11/12 h-screen top-0 right-0 bg-white z-50 sm:w-1/3">
        <div class="flex text-3xl justify-center items-center space-x-32 font-mono  h-16 border-b border-b-gray-300 sm:space-x-80 sm:h-20">
            <p>Cart</p>
            <button on:click={()=>isCartOpen.set(false)} class="flex justify-center items-center w-16 h-16 active:bg-gray-200"><img class="h-5" src="/cancel.png" alt=""></button>
        </div>

        <div id="cartItems" class="flex flex-col overflow-y-scroll h-4/6 space-y-6 sm:h-2/3">
            {#each $cartItems as cartItem,i}
                {#if cartItem.name!=='0'}
                    <section class="flex space-x-4 border-b border-b-gray-300">
                        <img class="w-24 h-24 sm:w-28 sm:h-auto" src="/bagpacks/{cartItem.name}.jpg" alt="">

                        <div class="flex flex-col space-y-2 w-44">
                            <p class="font-semibold">{cartItem.name.toUpperCase()}</p>
                            <p>Size: {cartItem.size}</p>
                            <p>Quantity: {cartItem.quantity}</p>
                        </div>

                        <div class="flex flex-col w-28 items-end justify-center space-y-10">
                            <button on:click={()=>removeItemFromCart(i)}><img class="w-7" src="/removeCartItem.png" alt=""></button>
                            <p class="w-[3rem] sm:w-auto">Price: ${cartItem.price}</p>
                        </div>
                    </section>
                {/if}
            {/each}
        </div>

        <div id="total" class="border-t border-t-gray-600 h-1/4 sm:h-full ">
            <div class="flex justify-center space-x-32 text-lg sm:space-x-64">
                <p class="font-montserrat font-bold">SUBTOTAL</p>
                <p>${subTotal}</p>
            </div>
            <div class="flex justify-center">
                <button class="bg-white px-10 py-1 mt-5 transition-all duration-500 text-sm border border-black hover:bg-yellow-700 hover:text-white hover:border-white sm:mt-8 sm:px-24 sm:py-2">Pay ₹6039 Now + 0% EMIs later</button>
            </div>
            <div class="flex justify-center">
                <button class="bg-black mt-4 px-24 py-1 text-white transition-all duration-500 text-sm border border-black hover:bg-yellow-700 hover:text-white hover:border-white sm:px-40 sm:py-2">CHECK OUT</button>
            </div>
        </div>
    </div>
</section>