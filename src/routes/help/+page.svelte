
<script>
    import { fly } from "svelte/transition";
    import Cart from "../Cart.svelte";
    import { isCartOpen } from "../../store";
</script>
<p in:fly="{{ y: 50, duration: 500 }}" class="text-center text-4xl mt-16">RETURN & EXCHANGE POLICY</p>

<ul in:fly="{{ y: 100, duration: 500 }}" class="text-2xl w-2/3 mx-auto mt-10 font-mono space-y-8 list-disc">
    <li class="">
        As all of our products are made to order - We don't offer refunds on any of our products, Only exchanges or store credits.
    </li>
    <li>
        All returns for exchange are only valid for 10 calendar days from the time you receive the original order of goods.
    </li>
    <li>
        We accept returns only in cases of products having any manufacturing defects or wrong product delivery. We manufacture the products ourselves and are sure that the product being delivered is as per the fabric description given on the product page.
    </li>
    <li>
        For the rest we offer exchanges.
    </li>
    <li>
        The terms and conditions on the website are constantly changed and updated without prior notice. You are recommended to review the site regularly for updates. It will be taken for granted for the consistent users & the ones that place an order with us, that they have accepted the terms & conditions along with the changes.
    </li>
    <li>
        Reverse pickup facility is available only in pin codes where COD is available. For the rest customers need to send the packet back to us at the address given below for which Courier Charges up to Rs.120 are refunded back.
    </li>
</ul>

{#if $isCartOpen}
    <Cart/>
{/if}