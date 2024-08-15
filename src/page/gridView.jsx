import React from "react";

function GridView() {
  const categoryArr = [
    "All Products",
    "Organic Vegatables",
    "Organic Fruits",
    "Organic Juices",
    "Organic Products",
  ];
  return (
    <div className="products-container">
      <span className="text-bas heading">Popular products</span>
      <span className="text-bas products-des">Fresh From Our Farm</span>
      <div className="category-container">
        {categoryArr.map((cat, index) => {
          return (
            <span className="category-btn" key={index}>
              {cat}
            </span>
          );
        })}
      </div>

      <span className="vs-store-btn">see all</span>
    </div>
  );
}

export default GridView;
