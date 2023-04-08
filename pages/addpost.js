import axios from "axios";
import Link from "next/link";
import react, { useEffect, useState } from "react";
import Singin from "./singin";

const Addpost = () => {
  const [Username, setusername] = useState();
  const [Name, setname] = useState();
  const [Image, setimage] = useState();
  const [jwt, setjwt] = useState();

  // const {data,error}=useSWR()
  const jsondata = { Username: Username, Name: Name, Image: Image };
  const login = async () => {
    //   if (Username!=""&&Name!=""&&Image!=""){
    const res = await axios.post("http://localhost:4000/profile", jsondata);

    window.location.href="/"
    //    }  else{ console.log("not conect"); }
  };

  return (
    <div className="login">
      <div className="create-post" id="singin">
        <div class="forms ">
          <span class="title"> اضافة صور</span>
          <span class="subtitle">add pictures in portfolio HD </span>
        </div>
        <input
          type="file"
          name="image"
          id="image"
          placeholder="Set Image To Profile"
          onChange={(e) => {
            setimage(e.target.value.replace("C:\\fakepath\\", " "));
          }}
        />
        <div
          className="background-post"
          style={{ backgroundImage: `url(${Image})` }}
        ></div>
        <input
          type="text"
          placeholder=" اضف نصا للصورة"
          onChange={(e) => {
            setusername(e.target.value);
          }}
        />
        <br />
        <button onClick={login}>Create Post</button>
      </div>
    </div>
  );
};

export default Addpost;
