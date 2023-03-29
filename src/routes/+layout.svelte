<script lang="ts">
    import "../app.css";
    import { fly } from "svelte/transition";
    import type { PageData } from './$types';
    import { isCartOpen } from "../store";
    export let data: PageData;
  </script>
<nav class="flex justify-between bg-white py-4 h-14">
  <div class="space-x-8 ml-20">
    <a class="hover:text-gray-400 hover:underline underline-offset-4 decoration-emerald-500 decoration-2" href="/">Home</a>
    <a class="hover:text-gray-400 hover:underline underline-offset-4 decoration-emerald-500 decoration-2" href="/thePacks">The Packs</a>
    <a class="hover:text-gray-400 hover:underline underline-offset-4 decoration-emerald-500 decoration-2" href="/aboutUs">About Us</a>
    <a class="hover:text-gray-400 hover:underline underline-offset-4 decoration-emerald-500 decoration-2" href="/help">Help</a>
  </div>
  <div class="flex space-x-11 mr-24">
    <img class="h-5 hover:cursor-pointer" src="/searchIcon.png" alt="searchIcon">
    <a class="hover:text-emerald-400 h-5" href="/login">Login</a>
    <button on:click={()=>isCartOpen.set(true)}><img class="h-5 hover:cursor-pointer" src="/cartIcon.png" alt="cartIcon"></button>
  </div>
</nav>

<!-- for smooth transition between pages, +layout.ts file is also created for this reason -->
{#key data.currentPath}
  <div
    in:fly={{ x: -30, duration: 200, delay: 150 }}
  >
    <slot />
  </div>
{/key}


<footer class="bg-zinc-700 h-56 text-gray-400">
  <section class="flex justify-around pt-5">
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