import React from "react";
import style from "./Navbar.module.scss";

import { logo, user, search, favourite, cart } from "../../images";

const Navbar = () => {
  return (
    <nav className={style.Navbar}>
      <div className={style.navLogoContainer}>
        <img src={logo.src} alt="" />
      </div>
      <div className={style.navLinksContainer}>
        <a href="/">
          <span>Home</span>
        </a>
        <a href="/shop">
          <span>Shop</span>
        </a>
        <a href="/blog">
          <span>Blog</span>
        </a>
        <a href="/contact">
          <span>Contact</span>
        </a>
      </div>
      <div className={style.navIconsContainer}>
        <button>
          <img src={user.src} alt="" />
        </button>
        <button>
          <img src={search.src} alt="" />
        </button>
        <button>
          <img src={favourite.src} alt="" />
        </button>
        <button>
          <img src={cart.src} alt="" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
