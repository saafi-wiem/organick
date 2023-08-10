import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import bannerImg from "../../assets/icons/Banner.svg";
import CardProduct from "../../components/CardProduct/CardProduct";
import "./Home.css";
import axios from "axios";
import { useSelector } from "react-redux";

function Home() {
  const [products, setProducts] = useState([]);
  const fetchData = async () => {
    try {
      await axios.get("https://dummyjson.com/products").then((res) => {
        const products = res.data.products;
        setProducts(products);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="home_page">
      <img className="banner_img" src={bannerImg} alt="" />
      <div className="products-container">
        {products?.map((product) => (
          <CardProduct key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Home;
