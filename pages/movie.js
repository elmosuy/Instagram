import React from 'react'
import data from "./hello.json"
const movie = () => {
    // let data = require('./hello.json')
  return (
    <div>
   {
    data.map((i)=>(
        <div>
           
            <img src='https://e.qfilm.tv/templates/qfilm/img/echo-lzld.png' alt="" />
            <iframe src={i.Link} frameborder="0"></iframe>
            <p>{i.title}</p>
        </div>
    ))
   }

    </div>
  )
}

export default movie