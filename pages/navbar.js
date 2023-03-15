import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="nav" id="-home">
      <ul>
        <li>
          <img width={26} src="/home.svg" alt="" />
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <img width={26} src="/profil.svg" alt="" />
          <Link href="/profile">
            <a>Profile</a>
          </Link>
        </li>
        <li>
          <img width={26} src="/explore.svg" alt="" />
          <Link href="">
            <a>#explor</a>
          </Link>
        </li>
        <li>
          <img width={26} src="/Gallery.svg" alt="" />
          <Link href="">
            <a>Gallery Image</a>
          </Link>
        </li>
        <li>
          <img width={26} src="/studio.svg" alt="" />
          <Link href="">
            <a>Studio</a>
          </Link>
        </li>
        <li>
          <img width={26} src="/flower.svg" alt="" />
          <Link href="">
            <a>Beautifil</a>
          </Link>
        </li>
        <li>
          <img width={23} src="/ystudio.svg" alt="" />
          <Link href="">
            <a>Setting</a>
          </Link>
        </li>
        <li>
          <img width={26} src="/groups.svg" alt="" />
          <Link href="/login">
            <a>Sign In</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
