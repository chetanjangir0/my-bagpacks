<script lang="ts">
    import {GoogleAuthProvider,signInWithPopup,signOut} from "firebase/auth"
    import {auth, user, db} from "$lib/firebase";
    import {doc,setDoc, getDoc} from "firebase/firestore"

    async function signInWithGoogle(){
        const provider= new GoogleAuthProvider();
        const userCredential = await signInWithPopup(auth,provider);
        if (user){
            const docRef=doc(db,"users",userCredential.user.uid)
            const docSnap=await getDoc(docRef);
            
            // Document doesn't exist, create it with initial cart items
            if(!docSnap.exists()){
                await setDoc(docRef, {
                    cartItems:[
                        {name:'0',type:'0',price:0,size:'0',quantity:0}
                    ]
    
                })

            }
            
        }

    }
</script>

<p class="text-3xl text-center mt-20 font-majorMono sm:text-4xl">Login</p>
<section class="flex justify-center mt-12 mb-80">
    <form class="flex flex-col items-start w-80 sm:w-96">
        <!-- <p class="text-lg font-mono tracking-widest sm:text-xl">EMAIL</p>
        <input class="border-2 border-gray-200 w-full py-2 px-4 text-center text-2xl" type="text">
        
        
        <div class="flex justify-between w-full mt-7">
            <p class="text-lg font-mono tracking-widest sm:text-xl">PASSWORD</p>
            <button>Forgot password</button>
        </div>
        <input class="border-2 border-gray-200 w-full py-2 px-4 text-center text-2xl" type="password"> -->

        {#if $user}
            <div class="mx-auto text-green-500 mt-8">You are signed in</div>
            <button class="bg-black py-2 mt-3 mb-3 text-white transition-all duration-500 text-xl w-full border border-black hover:bg-yellow-700 hover:text-white hover:border-white" on:click={()=>signOut(auth)}>Sign Out</button>
        {:else}
            <button class="bg-black py-2 mt-11 mb-3 text-white transition-all duration-500 text-xl w-full border border-black hover:bg-yellow-700 hover:text-white hover:border-white" on:click={signInWithGoogle}>Sign In With Google</button>
        {/if}
    </form>
</section>
