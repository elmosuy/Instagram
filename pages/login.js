import axios from "axios"
import Link from "next/link"
import react, { useEffect, useState } from "react"


const Login =()=>{
    const [Username,setusername] = useState()
    const [Name,setname] = useState()
    const [Image,setimage] = useState()

    // const {data,error}=useSWR()
    const jsondata= { "Username":Username,"Name":Name,"Image":Image}
      const login=async()=>{
    if (Username!=""&&Name!=""&&Image!=""){
          const res=await axios.post("http://localhost:4000/profile",jsondata)
                                           
           window.localStorage.setItem("Username",Username);
            window.localStorage.setItem("Name",Name)
             window.localStorage.setItem("Image",Image)
              window.location.href="/"
                                            
                                                    
      } else{ console.log("not conect"); } 
       
      

                                       
                                      


    


     
      
  
    
}

    
    
   return(
    <div className="login">
       <section className="create-profile">  
       <div class="forms ">
    <span class="title">Sign up</span>
    <span class="subtitle">Create a free account with your email.</span></div>
          <input type="file" name="image" style={{backgroundImage: `url(${Image})` }} id="image" placeholder="Set Image To Profile"  onChange={e=>{setimage(e.target.value.replace('C:\\fakepath\\', ' '))}} /> 
            <input type="text"  placeholder="User Name" onChange={e=>{setusername(e.target.value)}}/><br/>
            <input type="text" placeholder="Name" onChange={e=>setname(e.target.value)}/><br/>
            
            <button onClick={login}>Create Account</button>
     
          <Link href="/singin"><p style={{color:"blue",textAlign:"center",}}>Sing in </p></Link>  </section>
            </div>
         



  
   ) 
}

export default Login