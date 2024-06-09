import React from "react";
import styles from "./ProductCard.module.scss";
import { StaticImageData } from "next/image";
import { share, compare, like } from "@/images";

const ProductCard = ({
  id,
  name,
  description,
  price,
  image,
  discount,
  isNew,
}: {
  id: number;
  name: string;
  description: string;
  price: number;
  image: StaticImageData;
  discount?: number | undefined;
  isNew: boolean;
}) => {
  return (
    <div className={styles.productCard}>
      <div className={styles.productCardActive}>
        <button className={styles.productAddButton}>Add to cart</button>
        <button className={styles.productAddButton}>
          <a href={`/shop/${id}`}>Details</a>
        </button>
        <div className={styles.productActionContainer}>
          <button className={styles.productActionButton}>
            <span>
              <img src={share.src} alt="" />
            </span>
            Share
          </button>
          <button className={styles.productActionButton}>
            <span>
              <img src={compare.src} alt="" />
            </span>
            Compare
          </button>
          <button className={styles.productActionButton}>
            <span>
              <img src={like.src} alt="" />
            </span>
            Like
          </button>
        </div>
      </div>
      {discount ? (
        <span className={styles.productDiscountBadge}>{discount}%</span>
      ) : null}
      {isNew ? <span className={styles.productNewBadge}>New</span> : null}

      <div className={styles.productImageContainer}>
        <img src={image.src} alt="" />
      </div>
      <div className={styles.productFooter}>
        <h3 className={styles.productTitle}>{name}</h3>
        <span className={styles.productDescription}>{description}</span>

        {discount ? (
          <span className={styles.productPrice}>
            <s>${price}</s> ${Math.round(price * (1 - discount / 100))}
          </span>
        ) : (
          <span className={styles.productPrice}>${price}</span>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
