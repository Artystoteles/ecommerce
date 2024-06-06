import React from "react";
import { StaticImageData } from "next/image";

import style from "@/styles/Shop.module.scss";
import Navbar from "@/components/Navbar/Navbar";
import {
  shopBgc,
  grifo,
  leviosa,
  lolito,
  muggo,
  pingky,
  potty,
  respira,
  syltherin,
} from "@/images.js";
import ProductCard from "@/components/ProductCard/ProductCard";
import Footer from "@/components/Footer/Footer";

const index = () => {
  type Product = {
    id: number;
    name: string;
    description: string;
    price: number;
    image: StaticImageData;
    discount?: number | undefined;
    isNew: boolean;
  }[];
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
    {
      id: 8,
      name: "Syltherine",
      description: "Stylish cafe chair",
      price: 160,
      image: syltherin,
      discount: 50,
      isNew: false,
    },
    {
      id: 9,
      name: "Leviosa",
      description: "Stylish cafe chair",
      price: 160,
      image: leviosa,
      isNew: true,
    },
    {
      id: 10,
      name: "Lolito",
      description: "Luxury big sofa",
      price: 350,
      image: lolito,
      discount: 30,
      isNew: false,
    },
    {
      id: 11,
      name: "Grifo",
      description: "Luxury big sofa",
      price: 40,
      image: grifo,
      isNew: true,
    },
    {
      id: 12,
      name: "Muggo",
      description: "Luxury big sofa",
      price: 100,
      image: muggo,
      discount: 30,
      isNew: false,
    },
    {
      id: 13,
      name: "Pingky",
      description: "Luxury big sofa",
      price: 10,
      image: pingky,
      isNew: true,
    },
    {
      id: 14,
      name: "Respira",
      description: "Luxury big sofa",
      price: 350,
      image: respira,
      discount: 30,
      isNew: false,
    },
    {
      id: 15,
      name: "Potty",
      description: "Luxury big sofa",
      price: 60,
      image: potty,
      isNew: true,
    },
  ];
  return (
    <div className={style.shopPage}>
      <Navbar />
      <div
        style={{ backgroundImage: `url(${shopBgc.src})` }}
        className={style.shopHero}
      >
        <h1 className={style.shopHeading}>Shop</h1>
      </div>
      <div className={style.shopItemsContainer}>
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
      <Footer />
    </div>
  );
};

export default index;
