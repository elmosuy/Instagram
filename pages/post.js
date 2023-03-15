import Link from "next/link";
import React from "react";

const Post = ({ posts }) => {
  return (
    <div>
      <div className="cards-post">
        {posts.map((post) => (
          <div className="card-post" key={post._id}>
            <div className="title-post" dir="ltr">
              {" "}
              <div>
                {" "}
                <img src={post.Image} alt="" />
                <Link href={`/${post._id}`}>
                  <a>
                    {" "}
                    <p>{post.Username}</p>
                  </a>
                </Link>
              </div>
              <div>
                <h5>بغداد الكرخ</h5>
                <img src="/menu.svg" className="image-menu" alt="" />
              </div>
            </div>
            <img className="image-post" src={post.Image} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Post;
