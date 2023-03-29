<script lang="ts">
    import { featuredBagpacks,cartItems,isCartOpen } from "../store";
    import Cart from "./Cart.svelte";
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
<section class="bg-white h-[22rem]"></section>

<section class="flex h-[25rem] bg-orange-300">
    <img
        class="relative left-28 bottom-[350px] h-[750px]"
        src="/heroImage.png"
        alt=""
    />
    <div class="relative left-44 top-11">
        <p class="text-5xl font-bold">The last bagpack</p>
        <p class="text-5xl font-bold">you'll ever buy.</p>
        <a href="/shop" class="relative inline-block text-lg group ml-24 mt-10">
            <span
                class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-none rounded-lg group-hover:text-white"
            >
                <span
                    class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"
                />
                <span
                    class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-zinc-700 group-hover:-rotate-180 ease"
                />
                <span class="relative">Shop now</span>
            </span>
        </a>
    </div>
    <div class="relative left-96 top-24">
        <a href="www.google.com">
            <img
                class="h-5 hover:cursor-pointer my-7"
                src="/facebook.png"
                alt=""/>
        </a>
        <a href="www.google.com">
            <img
                class="h-5 hover:cursor-pointer my-7"
                src="/twitter.png"
                alt=""/>
        </a>
        <a href="www.google.com">
            <img
                class="h-5 hover:cursor-pointer my-7"
                src="/instagram.png"
                alt=""/>
        </a>
    </div>
</section>
<p class="text-6xl ml-72 mt-16">Featured</p>

<section id="featuredBagpacks" class="flex flex-wrap justify-center my-11 space-x-6">
    <div></div>
    {#each $featuredBagpacks as bagpack}
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


<div class="flex justify-center">
    <a  href="/thePacks" class="relative bottom-6 text-2xl hover:text-amber-700">View all ></a>
</div>

<p class="text-6xl ml-72 mt-16">REASONS TO BUY</p>


<section id="cards" class="flex justify-center space-x-12 my-24">
    <div class="w-72 h-72 bg-[#f6f6f6] rounded-lg border-[#b89453] border-2">
        <img class="mx-auto w-20 mt-2" src="https://nashermiles-app-cdn.azureedge.net/uploads/media/source/VEdups-shipping.svg" alt="">
        <p class="my-5 text-xl font-bold text-center text-[#b89453]">SHIPPING</p>
        <p class="text-center text-lg">Free shipping for order above ₹500 across India.</p>
    </div>
    <div class="w-72 h-72 bg-[#f6f6f6] rounded-lg border-[#b89453] border-2">
        <img class="mx-auto w-20 mt-2" src="https://nashermiles-app-cdn.azureedge.net/uploads/media/source/iOxyee-return.svg" alt="">
        <p class="my-5 text-xl font-bold text-center text-[#b89453]">RETURNS</p>
        <p class="text-center text-lg">Hassle free 7 days return.</p>
    </div>
    <div class="w-72 h-72 bg-[#f6f6f6] rounded-lg border-[#b89453] border-2">
        <img class="mx-auto w-20 mt-2" src="https://nashermiles-app-cdn.azureedge.net/uploads/media/source/bkgJLB-guarantee.png" alt="">
        <p class="my-5 text-xl font-bold text-center text-[#b89453]">ASSURED QUALITY & VALUE</p>
        <p class="text-center text-lg">Our efficient supply chain brings you value without compromising on quality.</p>
    </div>
    <div class="w-72 h-72 bg-[#f6f6f6] rounded-lg border-[#b89453] border-2">
        <img class="mx-auto w-20 mt-2" src="https://nashermiles-app-cdn.azureedge.net/uploads/media/source/QBOnwE-CUSTOMER-SERVICE.svg" alt="">
        <p class="my-5 text-xl font-bold text-center text-[#b89453]">CUSTOMER SERVICE</p>
        <p class="text-center text-lg">A customer first service culture is core to our company values.</p>
    </div>
</section>



{#if $isCartOpen}
    <Cart/>
{/if}
