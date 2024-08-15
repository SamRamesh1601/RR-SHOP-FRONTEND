import React, { useEffect, useState } from "react";
import Data from "../test/products-data.json";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import {
  FaStar,
  FaRegStar,
  FaRegStarHalf,
  FaArrowRightLong,
} from "react-icons/fa6";
function GridView() {
  const [categoryIndex, setCategoryIndex] = useState();
  const [productsArr, setProductsArr] = useState([]);
  const [categoryArr, setCategoryArr] = useState([]);

  useEffect(() => {
    const productList = Data.allProducts;
    const categoryList = Data.allCategory;
    console.log(productList, categoryList);
    setProductsArr(productList);
    setCategoryArr(categoryList);
  }, []);

  return (
    <div className="page-view products-container fl-direct-column vr-center-container ">
      <span className="text-bas heading">Popular products</span>
      <span className="text-bas products-des">Fresh From Our Farm</span>
      <div className="product-category-container">
        {categoryArr.map((cat, index) => {
          return (
            <span
              className={`category-btn ${categoryIndex === index && "active"}`}
              key={index}
              onClick={() => setCategoryIndex(index)}
            >
              {cat}
            </span>
          );
        })}
      </div>
      <div className="products-list-container">
        {productsArr.map((cat, index) => {
          console.log(cat);
          return (
            <div className="product-semi-container center-container fl-direct-column ">
              <img
                className="product-image"
                src={cat.previewImage}
                alt="Preview Image"
              />
              <div className="rating-container center-divide-container">
                <div className="semi-rating-container">
                  <span className={`rating-logo rate`}>
                    <FaStar />
                  </span>
                  <span className={`rating-logo rate`}>
                    <FaStar />
                  </span>
                  <span className={`rating-logo rate`}>
                    <FaStar />
                  </span>
                  <span className={`rating-logo rate`}>
                    <FaStar />
                  </span>
                  <span className={`rating-logo rate`}>
                    <FaRegStar />
                  </span>
                  <span className="rating-text">(5)</span>
                </div>
                <span
                  className={`rating-logo fav ${cat.isFavorite && "active"}`}
                >
                  {cat.isFavorite ? <MdFavorite /> : <MdFavoriteBorder />}
                </span>
              </div>
              <span className="text-bas dark products-name">
                {cat?.Name || ""}
              </span>
              <div className="price-container center-container">
                <span className="cur-products-price">
                  {`$${cat?.CurrentPrice}` || ""}
                </span>
                <span className="prev-products-price">
                  <s>{`$${cat?.PrevPrice}` || ""}</s>
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <span className="vs-store-btn">
        VISIT STORE
        <span className="avator-circle text-dark center-container ">
          <FaArrowRightLong />
        </span>
      </span>
    </div>
  );
}

export default GridView;
