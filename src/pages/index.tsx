import { Inter } from "next/font/google";
import { StaticImageData } from "next/image";
import styles from "@/styles/Home.module.scss";
import { hero_image, Bedroom, Dining, Living } from "../images.js";
import Navbar from "../components/Navbar/Navbar.tsx";
import Footer from "../components/Footer/Footer.tsx";
import BrowseComponent from "@/components/BrowseComponent/BrowseComponent.tsx";

export default function Home() {
  type Category = {
    id: number;
    name: string;
    image: StaticImageData;
  }[];

  const categories: Category = [
    {
      id: 1,
      name: "Dining",
      image: Dining,
    },
    {
      id: 2,
      name: "Living",
      image: Living,
    },
    {
      id: 3,
      name: "Bedroom",
      image: Bedroom,
    },
  ];
  return (
    <>
      <div className={styles.homePage}>
        <Navbar />
        <section
          style={{ backgroundImage: `url(${hero_image.src})` }}
          className={styles.heroSection}
        >
          <div className={styles.heroContainer}>
            <span className={styles.heroSpan}>New Arrival</span>
            <h1 className={styles.heroHeading}>
              Discover Our <br /> New Collection
            </h1>
            <p className={styles.heroParagraph}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut <br />{" "}
              elit tellus, luctus nec ullamcorper mattis.
            </p>
            <button className={styles.heroButton}>BUY Now</button>
          </div>
        </section>
        <section className={styles.browseSection}>
          <h2 className={styles.browseHeading}>Browse The Range</h2>
          <span className={styles.browseSpan}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </span>
          <div className={styles.browseContainer}>
            {categories.map((item) => (
              <BrowseComponent
                key={item.id}
                name={item.name}
                image={item.image}
              />
            ))}
          </div>
        </section>
        <section className={styles.productsSection}>
          <h2 className={styles.productHeading}>Our Products</h2>
          <div className={styles.productsContainer}></div>
          <a href="/shop">
            <button> Show</button>
          </a>
        </section>
        <section className={styles.sliderSection}></section>
        <section className={styles.setupSection}></section>
        <Footer />
      </div>
    </>
  );
}
