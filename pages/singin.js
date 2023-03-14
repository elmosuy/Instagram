import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Singin = ({onc}) => {
    const [Username, setusername] = useState()
    const [password, setpassword] = useState()
   
 
   const fet= async()=>{
  const local=window.localStorage.getItem("Username")
    const res=await axios.post("http://localhost:4000/user/auth/",
    {"Username":local})
    
    console.log(res.data.sucess)
    if (res.data.sucess===true){
      
    }else{
      window.location.href="/login"

    }

    
    
}











  return (
  
      
<div class="form" id='login'>
  <h1>Login</h1>
  <div class="group">
    
    <input required="true" class="main-input" type="text" onChange={e=>setusername(e.target.value)}/>
    <span class="highlight-span"></span>
    <label class="lebal-email" >Email</label>
  </div>
  <div class="container-1">
    <div class="group">
      <input required="false" class="main-input" type="text"/>
      <span class="highlight-span"></span>
      <label class="lebal-email">password</label>
    </div>
  </div>
  <button class="submit" onClick={fet}>submit</button>

<p className='forget'>هل نسيت كلمة السر؟</p>
<p className='prev' onClick={onc}>الرجوع لقائمة التسجيل </p>
</div>
   
  )
}

export default Singin