import React from "react";

const Profile = () => {
  return (
    <div className="profile">
      <div className="i-profile">
        <img src="/scoir2.svg" alt="" className="lain-1" width={50} />
        <div className="i-me">
          <h1>Hi my name is Ayman Elmosuy , I'am Web Developer</h1>{" "}
          <img
            src="/shak.svg"
            width={500}
            alt=""
            className="lain"
            draggable="false"
          />
          <img
            src="/scoir.svg"
            width={100}
            draggable="false"
            className="scoir-profile"
            alt=""
          />
          <p>
            work in Full stack Developer Front End developer and Back End
            developer
          </p>
        </div>{" "}
      </div>

      <div>
        <img src="/ayman.png" className="img-me" alt="" width={300} />
      </div>
    </div>
  );
};

export default Profile;
