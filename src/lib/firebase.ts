import { initializeApp } from "firebase/app";
import {doc, getFirestore, onSnapshot} from "firebase/firestore";
import {getAuth, onAuthStateChanged, type User} from "firebase/auth";
import { derived, writable } from "svelte/store";


const firebaseConfig = {
    apiKey: "AIzaSyDBZbsGUe7d_LHn4EEeagR8qNm6alQioXY",
    authDomain: "bagpacks.firebaseapp.com",
    projectId: "bagpacks",
    storageBucket: "bagpacks.appspot.com",
    messagingSenderId: "194057227485",
    appId: "1:194057227485:web:5796e12fa1a4eb38ed9f34",
    measurementId: "G-G3BBLX0ZZT"
};

export const app=initializeApp(firebaseConfig);
export const db=getFirestore();
export const auth=getAuth();


function userStore(){
    let unsubscribe:()=>void;

    if(!auth || !globalThis.window){
        console.warn('auth is not initialized or not in browser');
        const {subscribe}=writable<User|null>(null)

        return {
            subscribe
        }
    }

    const {subscribe}=writable(auth?.currentUser ?? null,(set)=>{
        unsubscribe=onAuthStateChanged(auth,(user)=>{
            set(user)
        });
        return ()=> unsubscribe()

    });
    
    return {
        subscribe
    }
}

export const user=userStore()

export function docStore<T>(path:string){
    let unsubscribe:()=>void;
    const docRef=doc(db,path);
    const {subscribe}=writable<T|null>(null,(set)=>{
        unsubscribe=onSnapshot(docRef,(snapshot)=>{
            set((snapshot.data() as T) ?? null);
        });
        return ()=>unsubscribe()
    });

    return {
        subscribe
    }
}


export const userData=derived(user,($user,set)=>{
    if($user){
        return docStore(`users/${$user.uid}`).subscribe(set);
    }else{
        set(null)
    }
})