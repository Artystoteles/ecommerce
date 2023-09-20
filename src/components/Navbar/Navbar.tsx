import React from "react";
import styles from "./Navbar.module.scss";

import { logo, user, search, favourite, cart } from "../../images";

const Navbar = () => {
  return (
    <nav className={styles.Navbar}>
      <div className={styles.navLogoContainer}>
        <img src={logo.src} alt="" />
      </div>
      <div className={styles.navLinksContainer}>
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
      <div className={styles.navIconsContainer}>
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
