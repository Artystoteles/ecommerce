import { Inter } from "next/font/google";

import styles from "@/styles/Home.module.scss";
import { hero_image } from "../images.js";
import Navbar from "../components/Navbar/Navbar.tsx";

export default function Home() {
  return (
    <>
      <div className={styles.homePage}>
        <Navbar />
        <section
          style={{ backgroundImage: `url(${hero_image.src})` }}
          className={styles.heroSection}
        ></section>
      </div>
    </>
  );
}
