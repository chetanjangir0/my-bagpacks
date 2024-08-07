<script lang="ts">
    import "../app.css";
    import { fly } from "svelte/transition";
    import type { PageData } from './$types';
    import { isCartOpen,isHamburgerOpen } from "../store";
    import Hamburger from "./Hamburger.svelte";
    import Cart from "./Cart.svelte";
    export let data: PageData;

    import {user,userData} from "$lib/firebase"
    $user
    $userData
  </script>
<nav class="flex justify-end bg-white py-4 sm:h-[7vh] sm:justify-between">
  <div class="hidden sm:space-x-8  sm:block sm:ml-20">
    <a class="hover:text-gray-400 hover:underline underline-offset-4 decoration-emerald-500 decoration-2 font-montserrat font-bold" href="/">Home</a>
    <a class="hover:text-gray-400 hover:underline underline-offset-4 decoration-emerald-500 decoration-2 font-montserrat font-bold" href="/thePacks">The Packs</a>
    <a class="hover:text-gray-400 hover:underline underline-offset-4 decoration-emerald-500 decoration-2 font-montserrat font-bold" href="/aboutUs">About Us</a>
    <a class="hover:text-gray-400 hover:underline underline-offset-4 decoration-emerald-500 decoration-2 font-montserrat font-bold" href="/help">Help</a>
  </div>
  <div class="flex space-x-11 mr-10 sm:mr-24">
    <img class="h-5 hover:cursor-pointer" src="/searchIcon.png" alt="searchIcon">
    <a class="hidden sm:block hover:text-emerald-400 h-5 font-montserrat font-bold" href="/login">Login</a>
    <button class="h-6" on:click={()=>isCartOpen.set(true)}><img class="h-full hover:cursor-pointer" src="/cartIcon.png" alt="cartIcon"></button>
    <button class="sm:hidden" on:click={()=>isHamburgerOpen.set(true)}><img class="w-5 h-5 hover:cursor-pointer" src="/hamburger.png" alt="cartIcon"></button>
  </div>
</nav>

{#if $isHamburgerOpen}
    <Hamburger/>
{/if}

{#if $isCartOpen}
    <Cart/>
{/if}

<!-- for smooth transition between pages, +layout.ts file is also created for this reason -->
{#key data.currentPath}
  <div
    in:fly={{ x: -30, duration: 200, delay: 150 }}
  >
    <slot />
  </div>
{/key}


<footer class="bg-zinc-700 text-gray-400 sm:h-56">
  <section class="flex flex-col items-center space-y-5 pt-5 sm:flex-row sm:items-start sm:justify-around sm:space-y-0">
    <ul class="flex flex-col space-y-1">
      <p class=" text-white font-bold text-xl underline underline-offset-4 decoration-emerald-500 decoration-2">Company</p>
  
      <a class="transition-all duration-300 ease hover:translate-x-2 hover:text-gray-50" href="/">About Us</a>
      <a class="transition-all duration-300 ease hover:translate-x-2 hover:text-gray-50" href="/">Our Services</a>
      <a class="transition-all duration-300 ease hover:translate-x-2 hover:text-gray-50" href="/">Privacy Policy</a>
      <a class="transition-all duration-300 ease hover:translate-x-2 hover:text-gray-50" href="/">Affiliate Program</a>
    </ul>
    <ul class="flex flex-col space-y-1">
      <p class=" text-white font-bold text-xl underline underline-offset-4 decoration-emerald-500 decoration-2">Get Help</p>
  
      <a class="transition-all duration-300 ease hover:translate-x-2 hover:text-gray-50" href="/">FAQ</a>
      <a class="transition-all duration-300 ease hover:translate-x-2 hover:text-gray-50" href="/">Shipping</a>
      <a class="transition-all duration-300 ease hover:translate-x-2 hover:text-gray-50" href="/">Returns</a>
      <a class="transition-all duration-300 ease hover:translate-x-2 hover:text-gray-50" href="/">Order Status</a>
      <a class="transition-all duration-300 ease hover:translate-x-2 hover:text-gray-50" href="/">Payment Options</a>
    </ul>
    <ul class="flex flex-col space-y-1">
      <p class=" text-white font-bold text-xl underline underline-offset-4 decoration-emerald-500 decoration-2">Our Services</p>
  
      <a class="transition-all duration-300 ease hover:translate-x-2 hover:text-gray-50" href="/">Clothes</a>
      <a class="transition-all duration-300 ease hover:translate-x-2 hover:text-gray-50" href="/">Food</a>
      <a class="transition-all duration-300 ease hover:translate-x-2 hover:text-gray-50" href="/">Shoes</a>
      <a class="transition-all duration-300 ease hover:translate-x-2 hover:text-gray-50" href="/">Other</a>
    </ul>
    <ul class="flex flex-col space-y-1">
      <p class=" text-white font-bold text-xl underline underline-offset-4 decoration-emerald-500 decoration-2">Useful Links</p>
  
      <a class="transition-all duration-300 ease hover:translate-x-2 hover:text-gray-50" href="/">Facebook</a>
      <a class="transition-all duration-300 ease hover:translate-x-2 hover:text-gray-50" href="/">Instagram</a>
      <a class="transition-all duration-300 ease hover:translate-x-2 hover:text-gray-50" href="/">Twitter</a>
      <a class="transition-all duration-300 ease hover:translate-x-2 hover:text-gray-50" href="/">About Us</a>
    </ul>
  </section>
    

</footer>