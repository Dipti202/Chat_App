import React, { createContext, useContext, useEffect, useState } from "react";
import { auth, database } from "../misc/firebase";

const ProfileContext=createContext();
export const ProfileProvider=({children})=>{
const [profile,setProfile]=useState(null)
const [isLoading,setLoading]=useState(true)
useEffect(()=>{
let useRef;

  const authUnsub  = auth.onAuthStateChanged(authObj)
    if(authObj){
useRef=database.ref(`/profiles/${authObj.uid}`)
useRef.on('value',(snap)=>{
const {name,cratedAt}=snap.val();
const data={
    name,
    cratedAt,
    uid:authObj.uid,
    email:authObj.email
}
setLoading(false)
setProfile(data)
});
      
    }else{
        if(useRef){
            useRef.off()
        }
setProfile(null)
setLoading(false)
    }
return()=>{

    authUnsub(); //clean up fun
    if(useRef){ //unsubscribed from user reference
        useRef.off()
    }
}

},[])
return(
    <ProfileContext.Provider value={{isLoading,profile}}>
        {children}
    </ProfileContext.Provider>
    
)
}
export const useProfile=()=>useContext(ProfileContext)