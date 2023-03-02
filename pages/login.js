import axios from "axios"
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
    <div>
       <section className="create-profile">  
       <div class="form ">
    <span class="title">Sign up</span>
    <span class="subtitle">Create a free account with your email.</span></div>
          <input type="file" name="image" style={{backgroundImage: `url(${Image})` }} id="image" placeholder="Set Image To Profile"  onChange={e=>{setimage(e.target.value.replace('C:\\fakepath\\', ' '))}} /><p>اختار صورة لملفك الشخصي</p> <br/>
            <input type="text"  placeholder="User Name" onChange={e=>{setusername(e.target.value)}}/><br/>
            <input type="text" placeholder="Name" onChange={e=>setname(e.target.value)}/><br/>
            
            <button onClick={login}>Create Account</button>
       </section>

           
       <div class="form-box ">
<div class="form ">
    <span class="title">Sign up</span>
    <span class="subtitle">Create a free account with your email.</span>
    <div class="form-container">
      <input type="text" class="input" placeholder="Full Name"/>
			<input type="text" class="input" placeholder="Email"/>
			<input type="password" class="input" placeholder="Password"/>
    </div>
    <button>Sign up</button>
</div>
<div class="form-section">
  <p>Have an account? <a href="">Log in</a> </p>
</div>
</div>
            </div>
         



  
   ) 
}

export default Login