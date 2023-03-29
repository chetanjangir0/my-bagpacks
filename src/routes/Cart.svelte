<script lang="ts">
    import { isCartOpen,cartItems } from "../store";
    import { fade,fly } from "svelte/transition";
    function removeItemFromCart(itemIndex:number):void{
        cartItems.update((items)=>{
            let tempItems=[...items];
            tempItems.splice(itemIndex,1);
            return tempItems;
        })
    }

    let subTotal=$cartItems.reduce((total,currentValue)=>{return total+currentValue.quantity*currentValue.price},0);

</script>

<section>
    <button transition:fade on:click={()=>isCartOpen.set(false)} class="fixed min-w-full h-screen top-0 left-0 bg-black opacity-25 z-50 cursor-default"></button>


    <div transition:fly="{{ x: 200, duration: 500 }}" class="fixed w-1/3 h-screen top-0 right-0 bg-white z-50">
        <div class="flex text-3xl justify-center items-center space-x-80 h-20 border-b border-b-gray-300">
            <p>Cart</p>
            <button on:click={()=>isCartOpen.set(false)} class="flex justify-center items-center w-16 h-16 active:bg-gray-200"><img class="h-5" src="/cancel.png" alt=""></button>
        </div>

        <div id="cartItems" class="flex flex-col overflow-y-scroll h-2/3 space-y-6">
            {#each $cartItems as cartItem,i}
                {#if cartItem.name!=='0'}
                    <section class="flex space-x-4 border-b border-b-gray-300">
                        <img class="w-28" src="/bagpacks/{cartItem.name}.jpg" alt="">

                        <div class="flex flex-col space-y-2 w-44">
                            <p class="font-semibold">{cartItem.name.toUpperCase()}</p>
                            <p>Size: {cartItem.size}</p>
                            <p>Quantity: {cartItem.quantity}</p>
                        </div>

                        <div class="flex flex-col w-28 items-end justify-center space-y-10">
                            <button on:click={()=>removeItemFromCart(i)}><img class="w-7" src="/removeCartItem.png" alt=""></button>
                            <p>Price: ${cartItem.price}</p>
                        </div>
                    </section>
                {/if}
            {/each}
        </div>

        <div id="total" class="border-t border-t-gray-600 h-full ">
            <div class="flex justify-center space-x-64 text-lg">
                <p>SUBTOTAL</p>
                <p>${subTotal}</p>
            </div>
            <div class="flex justify-center">
                <button class="bg-white mt-8  transition-all duration-500 text-sm px-24 py-2 border border-black hover:bg-yellow-700 hover:text-white hover:border-white">Pay ₹6039 Now + 0% EMIs later</button>
            </div>
            <div class="flex justify-center">
                <button class="bg-black mt-4 text-white transition-all duration-500 text-sm px-40 py-2 border border-black hover:bg-yellow-700 hover:text-white hover:border-white">CHECK OUT</button>
            </div>
        </div>
    </div>
</section>