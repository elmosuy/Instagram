import React from 'react'



const Story = ({posts}) => {
  return (
    <div>  <div className="storys" >  
    {posts.map((post)=>(
       <div className="story"  dir='rtl'>
          <h2></h2>
          <img src={post.Image} width={60} alt="" />
          <p>{post.Username}</p>
</div>
))}    </div></div>
  )
}

export default Story