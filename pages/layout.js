import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import Chat from './chat'

const Layout = ({children}) => {

  const handelChatShow=()=>{
      const chat=document.getElementById("chat")
      chat.classList.toggle("chat-show")
      
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
         

      </div>
     
       <div className='layout'> <span><p>142</p></span>
            <Link href='/'><img src="home.svg" alt="" width={25} /></Link> 
            <Link href='/bell'><img src="bell.svg" alt="" width={25}/></Link>
            <Link href="/profile"><img src="profil.svg" alt="" width={25}/></Link> 
            <img src="message.svg" alt="" onClick={handelChatShow} width={25}/>
        </div>
        <Chat  />
           
      


        {children}
    </div>
  )
}

export default Layout