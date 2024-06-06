import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "next/navigation";
import {
  grifo,
  leviosa,
  lolito,
  muggo,
  pingky,
  potty,
  respira,
  syltherin,
} from "@/images.js";
import style from "@/styles/ProductPage.module.scss";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { product1 } from "@/images.js";
import { StaticImageData } from "next/image";

const productPage = () => {
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
  const [params, setParams] = useState<any>();
  const searchParams: any = useSearchParams();

  setTimeout(() => {
    const data = searchParams.get("id");
    setParams(data);
  }, 2000);

  console.log(products[params]);

  return (
    <div className={style.productPage}>
      <Navbar />
      <div className={style.productContainer}>
        <div className={style.productLeft}>
          <div className={style.productPhoto}>
            <img alt="" />
          </div>
        </div>
        <div className={style.productRight}>
          <h1 className={style.productName}></h1>
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
