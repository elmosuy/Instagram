
import { useEffect, useState } from "react"
import Chat from "./chat"
import Navbar from "./navbar"
import Post from "./post"
import Story from "./story"



export default function Home({posts}) {

  const handelNavbarShow=()=>{
    const nav=document.getElementById('navbarhome')
    nav.classList.toggle("nav-show")
  }

  const [loading,setloading]=useState()
  useEffect(() => {
              const loading=document.getElementById('loading')


      setTimeout(() => {
       loading.classList.add("loading-show")
      }, "5000")

         loading.classList.remove("loading-show")
 }, [])
  

  return (
 <div className="index">
         <div className="navbar" id="navbarhome">
                 <Navbar/>
         </div>

         <div className="home">

                      <Story posts={posts}/>
                      <Post posts={posts}/> 

         </div>

        
        <div className="loading-big" id="loading">
        <div className="loading" id="loading1">
          <img src="/leaves.svg" width={200} alt="" />
          <h1>Moon</h1>
          <div class="spinner">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                </div>
                
        </div><p className="ploading">Copyright © Made by Elmosuy</p></div>


         <div className='borgerr-layout' onClick={handelNavbarShow}>
           <p>|||</p> 
          </div>

 </div>
  )
}
 



export const getStaticProps=async()=>{

  const res =await fetch("http://localhost:4000/homeApp")
  const posts=await res.json()
  return{
    props:{posts}
  }
}