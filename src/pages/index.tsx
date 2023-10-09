import { Inter } from "next/font/google";
import { StaticImageData } from "next/image";
import styles from "@/styles/Home.module.scss";
import { hero_image, Bedroom, Dining, Living } from "../images.js";
import {
  grifo,
  leviosa,
  lolito,
  muggo,
  pingky,
  potty,
  respira,
  syltherin,
} from "../images.js";
import Navbar from "../components/Navbar/Navbar.tsx";
import Footer from "../components/Footer/Footer.tsx";
import BrowseComponent from "@/components/BrowseComponent/BrowseComponent.tsx";
import ProductCard from "@/components/ProductCard/ProductCard.tsx";

export default function Home() {
  type Category = {
    id: number;
    name: string;
    image: StaticImageData;
  }[];

  type Product = {
    id: number;
    name: string;
    description: string;
    price: number;
    image: StaticImageData;
    discount?: number | undefined;
    isNew: boolean;
  }[];

  const categories: Category = [
    {
      id: 0,
      name: "Dining",
      image: Dining,
    },
    {
      id: 1,
      name: "Living",
      image: Living,
    },
    {
      id: 2,
      name: "Bedroom",
      image: Bedroom,
    },
  ];

  const products: Product = [
    {
      id: 0,
      name: "Syltherine",
      description: "Stylish cafe chair",
      price: 160,
      image: syltherin,
      discount: 50,
      isNew: false,
    },
    {
      id: 1,
      name: "Leviosa",
      description: "Stylish cafe chair",
      price: 160,
      image: leviosa,
      isNew: true,
    },
    {
      id: 2,
      name: "Lolito",
      description: "Luxury big sofa",
      price: 350,
      image: lolito,
      discount: 30,
      isNew: false,
    },
    {
      id: 3,
      name: "Grifo",
      description: "Luxury big sofa",
      price: 40,
      image: grifo,
      isNew: true,
    },
    {
      id: 4,
      name: "Muggo",
      description: "Luxury big sofa",
      price: 100,
      image: muggo,
      discount: 30,
      isNew: false,
    },
    {
      id: 5,
      name: "Pingky",
      description: "Luxury big sofa",
      price: 10,
      image: pingky,
      isNew: true,
    },
    {
      id: 6,
      name: "Respira",
      description: "Luxury big sofa",
      price: 350,
      image: respira,
      discount: 30,
      isNew: false,
    },
    {
      id: 7,
      name: "Potty",
      description: "Luxury big sofa",
      price: 60,
      image: potty,
      isNew: true,
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
          <div className={styles.productsContainer}>
            {products.map((product) => (
              <ProductCard
                key={product.id}
                name={product.name}
                description={product.description}
                price={product.price}
                image={product.image}
                discount={product.discount}
                isNew={product.isNew}
              />
            ))}
          </div>

          <button className={styles.productButton}>
            {" "}
            <a href="/shop">Show More</a>
          </button>
        </section>
        <section className={styles.sliderSection}></section>
        <section className={styles.setupSection}></section>
        <Footer />
      </div>
    </>
  );
}
