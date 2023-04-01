<script lang="ts">
    import { featuredBagpacks,cartItems,isCartOpen } from "../store";
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
<section class="hidden bg-white h-[22rem] sm:block"></section>

<section id="hero" class="flex flex-wrap justify-around bg-orange-300 sm:h-[25rem] sm:justify-normal">
    <img
        class="h-48 sm:h-[750px] sm:relative sm:left-28 sm:bottom-[350px]"
        src="/heroImage.png"
        alt=""
    />
    <div class="mt-10 sm:mt-0 sm:left-44 sm:relative sm:top-20">
        <p class="font-bold text-xl font-josefin sm:text-5xl">The last bagpack</p>
        <p class="font-bold text-xl font-josefin mb-3 sm:text-5xl sm:mb-0">you'll ever buy.</p>
        <a href="/thePacks" class="hidden sm:relative sm:inline-block text-lg group ml-24 mt-10">
            <span
                class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-none rounded-lg group-hover:text-white"
            >
                <span
                    class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"
                />
                <span
                    class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-zinc-700 group-hover:-rotate-180 ease"
                />
                <span class="relative font-montserrat font-bold">Shop now</span>
            </span>
        </a>

        <!--below button for phones -->
        <a class="font-montserrat py-1 px-1 text-xs bg-white rounded-md font-bold sm:hidden" href="/thePacks">Shop now</a>

    </div>
    <div class="mt-6 sm:mt-0 sm:left-96 sm:top-24 sm:relative">
        <a target="_blank" href="https://www.facebook.com/chetan.jangir.520">
            <img
                class="h-3 hover:cursor-pointer my-7 sm:h-5"
                src="/facebook.png"
                alt=""/>
        </a>
        <a target="_blank"  href="https://twitter.com/chetanjangir0">
            <img
                class="h-3 hover:cursor-pointer my-7 sm:h-5"
                src="/twitter.png"
                alt=""/>
        </a>
        <a target="_blank"  href="https://instagram.com/_rohanjangir?igshid=ODM2MWFjZDg=">
            <img
                class="h-3 hover:cursor-pointer my-7 sm:h-5"
                src="/instagram.png"
                alt=""/>
        </a>
    </div>
</section>
<p class="text-3xl mt-10 font-majorMono sm:ml-72 sm:text-5xl sm:mt-16">Featured</p>

<section id="featuredBagpacks" class="flex flex-wrap justify-around my-11 sm:justify-center sm:space-x-6">
    <div class="hidden sm:block"></div>
    {#each $featuredBagpacks as bagpack}
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


<div class="flex justify-center">
    <a  href="/thePacks" class="relative font-montserrat font-bold bottom-6 text-2xl hover:text-amber-700">View all ></a>
</div>

<p class="text-3xl mt-10 font-thin sm:ml-72 sm:text-5xl sm:mt-16">REASONS TO BUY</p>


<section id="cards" class="flex flex-col items-center space-y-12 my-10 sm:my-24 sm:space-x-12 sm:flex-row sm:justify-center sm:space-y-0 sm:items-start">
    <div class="w-64 h-64 bg-[#f6f6f6] rounded-lg border-[#b89453] border-2 sm:w-72 sm:h-72">
        <img class="mx-auto w-20 mt-2" src="https://nashermiles-app-cdn.azureedge.net/uploads/media/source/VEdups-shipping.svg" alt="">
        <p class="my-5 text-xl font-bold text-center text-[#b89453]">SHIPPING</p>
        <p class="text-center text-lg">Free shipping for order above ₹500 across India.</p>
    </div>
    <div class="w-64 h-64 bg-[#f6f6f6] rounded-lg border-[#b89453] border-2 sm:w-72 sm:h-72">
        <img class="mx-auto w-20 mt-2" src="https://nashermiles-app-cdn.azureedge.net/uploads/media/source/iOxyee-return.svg" alt="">
        <p class="my-5 text-xl font-bold text-center text-[#b89453]">RETURNS</p>
        <p class="text-center text-lg">Hassle free 7 days return.</p>
    </div>
    <div class="w-64 h-64 bg-[#f6f6f6] rounded-lg border-[#b89453] border-2 sm:w-72 sm:h-72">
        <img class="mx-auto w-20 mt-2" src="https://nashermiles-app-cdn.azureedge.net/uploads/media/source/bkgJLB-guarantee.png" alt="">
        <p class="my-5 text-xl font-bold text-center text-[#b89453]">ASSURED QUALITY & VALUE</p>
        <p class="text-center text-lg">Brings you value without compromising on quality.</p>
    </div>
    <div class="w-64 h-64 bg-[#f6f6f6] rounded-lg border-[#b89453] border-2 sm:w-72 sm:h-72">
        <img class="mx-auto w-20 mt-2" src="https://nashermiles-app-cdn.azureedge.net/uploads/media/source/QBOnwE-CUSTOMER-SERVICE.svg" alt="">
        <p class="my-5 text-xl font-bold text-center text-[#b89453]">CUSTOMER SERVICE</p>
        <p class="text-center text-lg">A customer first service culture is core to our company values.</p>
    </div>
</section>


