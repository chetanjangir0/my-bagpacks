<script>
    import {GoogleAuthProvider,signInWithPopup} from "firebase/auth"
    import {auth} from "$lib/firebase"

    async function signInWithGoogle(){
        const provider= new GoogleAuthProvider();
        const user = await signInWithPopup(auth,provider);

    }
</script>

<p class="text-3xl text-center mt-20 font-majorMono sm:text-4xl">Login</p>
<section class="flex justify-center mt-12 mb-80">
    <form class="flex flex-col items-start w-80 sm:w-96">
        <p class="text-lg font-mono tracking-widest sm:text-xl">EMAIL</p>
        <input class="border-2 border-gray-200 w-full py-2 px-4 text-center text-2xl" type="text">
        
        
        <div class="flex justify-between w-full mt-7">
            <p class="text-lg font-mono tracking-widest sm:text-xl">PASSWORD</p>
            <button>Forgot password</button>
        </div>
        <input class="border-2 border-gray-200 w-full py-2 px-4 text-center text-2xl" type="password">

        
        <button class="bg-black py-2 mt-12 mb-3 text-white transition-all duration-500 text-xl w-full border border-black hover:bg-yellow-700 hover:text-white hover:border-white">LOG IN</button>
        
        <button class="mx-auto">Create account</button>
    </form>
</section>
