import React from "react";
import style from "@/styles/ProductPage.module.scss";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { product1 } from "@/images.js";

const productPage = () => {
  return (
    <div className={style.productPage}>
      <Navbar />
      <div className={style.productContainer}>
        <div className={style.productLeft}>
          <div className={style.productPhoto}>
            <img src={product1.src} alt="" />
          </div>
        </div>
        <div className={style.productRight}>
          <h1 className={style.productName}>Asgaard sofa</h1>
          <p className={style.productPrice}>Rs. 250,000.00</p>
          <button className={style.addToCart}>Add To Cart</button>
        </div>
      </div>
      <div className={style.productDescriptionContainer}>
        <h2 className={style.productDescriptionHeading}>Description</h2>
        <p className={style.productDescription}>
          Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
          portable active stereo speaker takes the unmistakable look and sound
          of Marshall, unplugs the chords, and takes the show on the road.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default productPage;
