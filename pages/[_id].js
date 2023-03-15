import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

// export async function getStaticProps(context) {
//   const id = context.query
//   const res = await fetch('http://localhost:4000/homeApp/profile?_id=63ed1f2009e1f831652c9f7f')
//   console.log(id)
//   const post = await res.json()
//   return {
//     props: {
//       post,
//     },
//   }
// }
// export async function getStaticPaths() {

//   const res = await fetch('http://localhost:4000/homeApp')
//   const posts = await res.json()

//   const paths = posts.map((post) => ({
//     params: { _id: post._id },
//   }))

//   return { paths, fallback: false }
// }

const Profile = () => {
  const router = useRouter();
  const { _id } = router.query;
  const [post, setpost] = useState([]);
  const fetching = async () => {
    const res = await axios.get(
      "http://localhost:4000/homeApp/profile?_id=" + _id
    );
    setpost(res.data);
    console.log(res.data);
  };
  useEffect(() => {
    fetching();
  }, [_id]);

  const deletepost = () => {
    const del = document.getElementById("del");
    del.classList.add("show-delete");
  };

  const deleted = () => {
    axios.delete("http://localhost:4000/homeApp/profile?_id=" + _id);
    location.href = "/";
  };

  const delsection = () => {
    const del = document.getElementById("del");
    del.classList.remove("show-delete");
  };

  return (
    <div>
      {" "}
      <h1>|</h1>
      <h1>Hi my Name is {post.Username}</h1>
      <img src={post.Image} alt="" />
      <br />
      <button className="btn-d" onClick={deletepost}>
        Delete
      </button>
      <section className="delete" id="del">
        <h5>
          are you sure <b> Delete Post</b>
        </h5>
        <button onClick={deleted}>Yes</button>
        <button onClick={delsection}>No</button>
      </section>
    </div>
  );
};

export default Profile;
