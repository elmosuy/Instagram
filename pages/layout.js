import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import Chat from './chat'
import Navbar from './navbar'

const Layout = ({children}) => {

  const handelChatShow=()=>{
      const chat=document.getElementById("chat")
      chat.classList.toggle("chat-show")
      
  }

  const handelNavbarShow=()=>{
    const nav=document.getElementById('navbarhome')
    nav.classList.toggle("nav-show")
  }
  return (
    <div > 
      

    <Head>
      <title>
        IMGs
      </title>
    </Head>

      <div className='navbar2'>
      <div className='logo-moon'>
            <img src="/leaves.svg" alt="" width={40} />
            <h1>Moon</h1>
          </div>
          <div className='borgerr-layout' onClick={handelNavbarShow}>
           <p>|||</p> 
          </div>
         

      </div>
     
       <div className='layout'> <span><p>142</p></span>
            <Link href='/'><img src="home.svg" alt="" width={25} /></Link> 
            <Link href='/bell'><img src="bell.svg" alt="" width={25}/></Link>
            <Link href='/addpost'><img src="add-plus.svg" alt="" width={25}/></Link>
            <Link href="/profile"><img src="profil.svg" alt="" width={25}/></Link> 
            <img src="message.svg" alt="" onClick={handelChatShow} width={25}/>
        </div>
        <Chat  />
           
        <div className="navbar" id="navbarhome">
                 <Navbar/>
         </div>


        {children}
    </div>
  )
}

export default Layout