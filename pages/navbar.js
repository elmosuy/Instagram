import Link from 'next/link'
import React from 'react'

const Navbar = () => {





  return (
    <div className='nav' id='-home'>
     
         
        <ul>  
            <li><img  width={26} src="/home.svg" alt=""  /><a href="">Home</a></li>
            <li><img  width={26} src="/profil.svg" alt="" /><a href="">Profile</a></li>
            <li><img  width={26} src="/explore.svg" alt="" /><a href="">#explor</a></li>
            <li><img  width={26} src="/Gallery.svg" alt="" /><a href="">Gallery Image</a></li>
            <li><img  width={26} src="/studio.svg" alt="" /><a href="">Studio</a></li>
            <li><img  width={26} src="/flower.svg" alt="" /><a href="">Beautifil</a></li>
            <li><img  width={23} src="/ystudio.svg" alt="" /><a href="">Setting</a></li>
            <li><img  width={26} src="/groups.svg" alt="" /><Link href="/login"><a >Group</a></Link></li>

        </ul>
    </div>
  )
}

export default Navbar