<script>
    import { fade,fly } from "svelte/transition";
    import { isHamburgerOpen } from "../store";
</script>

<section>
    <button transition:fade on:click={()=>isHamburgerOpen.set(false)} class="fixed min-w-full h-screen top-0 left-0 bg-black opacity-25 z-50 cursor-default"></button>

    <div transition:fly="{{ x: 200, duration: 500 }}" class="fixed w-8/12 h-screen top-0 right-0 bg-white z-50">
        <div class="flex flex-col items-start ml-8 mt-16 space-y-8">
            <button on:click={()=>isHamburgerOpen.set(false)}>
                <a class="hover:text-gray-400 hover:underline underline-offset-4 decoration-emerald-500 decoration-2 font-montserrat font-bold text-4xl" href="/">Home</a>
            </button>
            <button on:click={()=>isHamburgerOpen.set(false)}>
                <a class="hover:text-gray-400 hover:underline underline-offset-4 decoration-emerald-500 decoration-2 font-montserrat font-bold text-4xl" href="/thePacks">The Packs</a>
            </button>
            <button on:click={()=>isHamburgerOpen.set(false)}>
                <a class="hover:text-gray-400 hover:underline underline-offset-4 decoration-emerald-500 decoration-2 font-montserrat font-bold text-4xl" href="/aboutUs">About Us</a>
            </button>
            <button on:click={()=>isHamburgerOpen.set(false)}>
                <a class="hover:text-gray-400 hover:underline underline-offset-4 decoration-emerald-500 decoration-2 font-montserrat font-bold text-4xl" href="/help">Help</a>
            </button>
          </div>
    </div>

</section>