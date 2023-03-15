import axios from "axios";
import Link from "next/link";
import react, { useEffect, useState } from "react";
import Singin from "./singin";

const Login = () => {
  const [Username, setusername] = useState();
  const [Name, setname] = useState();
  const [Image, setimage] = useState();
  const [jwt, setjwt] = useState();

  // const {data,error}=useSWR()
  const jsondata = { Username: Username, Name: Name, Image: Image };
  const login = async () => {
    if (Username != "" && Name != "" && Image != "") {
      // const res=await axios.post("http://localhost:4000/profile",jsondata)
      const auth = await axios.get(
        "http://localhost:4000/user/token/?Username=" + Username
      );
      window.localStorage.setItem("Username", auth.data);
      window.localStorage.setItem("Name", Name);
      window.localStorage.setItem("Image", Image);
      // window.location.href="/"
    } else {
      console.log("not conect");
    }
  };

  const tosingin = () => {
    const singin = document.getElementById("singin");
    const login = document.getElementById("login");
    login.classList.toggle("show-login");
    singin.classList.toggle("show-singin");
  };

  return (
    <div className="login">
      <div className="create-profile" id="singin">
        <div class="forms ">
          <span class="title">Sign up</span>
          <span class="subtitle">Create a free account with your email.</span>
        </div>
        <input
          type="email"
          name="image"
          id="image"
          placeholder="Email or Phone Number"
          onChange={(e) => {
            setimage(e.target.value.replace("C:\\fakepath\\", " "));
          }}
        />
        <input
          type="text"
          placeholder="User Name"
          onChange={(e) => {
            setusername(e.target.value);
          }}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setname(e.target.value)}
        />
        <br />
        <button onClick={login}>Create Account</button>
        <p onClick={tosingin} className="prev">
          {" "}
          قائمة تسجيل الدخول{" "}
        </p>
      </div>
      <Singin onc={tosingin} Username={Username} />
    </div>
  );
};

export default Login;
