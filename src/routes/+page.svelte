<script lang="ts">
    import ShowPacks from "$lib/components/ShowPacks.svelte";
</script>

<section class="hidden bg-white h-[43vh] sm:block"></section>
<section id="hero" class="flex flex-wrap justify-around bg-orange-300 sm:h-[50vh]">
    <img
        class="h-48 sm:h-[750px] sm:absolute sm:left-28 sm:bottom-0"
        src="/heroImage.png"
        alt=""
    />
    <!-- the below div adjusts for the removed width of the image when it turns into position absolute at screen break point -->
    <div class="sm:w-[550px] sm:h-[750px]"></div>
    <div class="mt-10 sm:mt-28">
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
    <div class="mt-6 sm:mt-28">
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

<ShowPacks showQuantity={6} />


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


