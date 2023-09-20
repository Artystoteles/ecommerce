import React from "react";
import styles from "./BrowseComponent.module.scss";
import { StaticImageData } from "next/image";

const BrowseComponent = ({
  name,
  image,
}: {
  name: string;
  image: StaticImageData;
}) => {
  return (
    <div className={styles.browseComponent}>
      <div className={styles.browseImageContainer}>
        <img src={image.src} alt="" />
      </div>
      <h3 className={styles.categoryTitle}>{name}</h3>
    </div>
  );
};

export default BrowseComponent;
