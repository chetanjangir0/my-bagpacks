
<script>
    import { fly } from "svelte/transition";
</script>
<p in:fly="{{ y: 50, duration: 500 }}" class="text-center text-3xl mt-4 font-majorMono sm:text-4xl sm:mt-16">About Us</p>

<section in:fly="{{ y: 100, duration: 500 }}" class="w-2/3 mx-auto mt-4 font-mono space-y-12 sm:text-2xl sm:mt-16">
    <p>
        Welcome to our backpack store! We are a team of passionate backpackers who understand the importance of having a high-quality backpack that is both durable and stylish. Our mission is to provide you with the best selection of backpacks on the market, from trusted brands that we personally use and trust ourselves. We believe in providing exceptional customer service, and we are committed to helping you find the perfect backpack to fit your needs. Thank you for choosing our store, and happy shopping!
    </p>
    <p>
        Our team is made up of experienced hikers and travelers who understand the importance of having a reliable and comfortable backpack. That's why we carefully curate our selection to ensure that every backpack we offer meets our high standards.
    </p>
    <p>
        We also believe in giving back to the community. That's why a portion of every purchase goes towards supporting environmental organizations and outdoor education programs.
    </p>
    <p>
        Thank you for choosing our bagpacks for your backpacking needs. We look forward to helping you make your next adventure unforgettable!
    </p>
</section>
