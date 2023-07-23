import React from "react";
import bannerImg from "../../assets/icons/Banner.svg";
import CardProduct from "../../components/CardProduct/CardProduct";
import "./Home.css";

let products = [
  {
    id: 1,
    name: "product 1",
    description: "desc for product 1",
    newPrice: 10,
    oldPrice: 18,
    rate: 5,
    imgUrl: "https://shorturl.at/bktx4",
    category: "fruit",
  },
  {
    id: 2,
    name: "product 2",
    description: "desc for product 2",
    newPrice: 6,
    oldPrice: 33,
    rate: 5,
    imgUrl: "https://shorturl.at/gFGNX",
    category: "fruit",
  },
];

function Home() {
  return (
    <div className="home_page">
      <img className="banner_img" src={bannerImg} alt="" />
      <div className="content">
        {products.map((product, index) => (
          <CardProduct key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Home;
