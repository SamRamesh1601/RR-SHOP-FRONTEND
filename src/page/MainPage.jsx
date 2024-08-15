import React from "react";
import ImageSlider from "../components/ImageSlider";
import Data from "../test/mock-data.json";
import { FaArrowRightLong } from "react-icons/fa6";
import { BiCartAlt } from "react-icons/bi";
import { MdFlightTakeoff } from "react-icons/md";
import { RiCaravanLine } from "react-icons/ri";
import { FaRegNewspaper } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
function MainPage() {
  const images = [
    "./src/assets/item-2.jpg",
    "./src/assets/item-3.jpg",
    "./src/assets/item-1.png",
    "./src/assets/item-6.jpg",
    "./src/assets/item-5.jpg",
  ];

  const [categoryList, setCategoryList] = React.useState([]);
  const navigate = useNavigate();

  const handleNavigateToListView = () => {
    navigate("/listview");
  };

  React.useEffect(() => {
    const Cateogrys = Data.cateogryBased;
    setCategoryList(Cateogrys);
  }, []);

  return (
    <div className="main-container fl-direct-column  vr-center-container">
      <div className="poster-container">
        <ImageSlider imgeList={images} />
        <div className="options-container">
          <div className="semi-options-container center-container">
            <span className="options-logo">
              <BiCartAlt />
            </span>
            <span className="text-bas cateogry-text options-header">
              Cart(4)
            </span>
            <span className="text-bas cateogry-text options-des">
              Easy Order Shipping
            </span>
          </div>
          <div className="semi-options-container center-container">
            <span className="options-logo">
              <MdFlightTakeoff />
            </span>
            <span className="text-bas cateogry-text options-header">
              Order(2)
            </span>
            <span className="text-bas cateogry-text options-des">
              Easy Order Shipping
            </span>
          </div>
          <div className="semi-options-container center-container">
            <span className="options-logo">
              <RiCaravanLine />
            </span>
            <span className="text-bas cateogry-text options-header">
              Pending Payment(2)
            </span>
            <span className="text-bas cateogry-text options-des">
              Easy Order Shipping
            </span>
          </div>
          <div className="semi-options-container center-container">
            <span className="options-logo">
              <FaRegNewspaper />
            </span>
            <span className="text-bas cateogry-text options-header">
              Bill(1)
            </span>
            <span className="text-bas cateogry-text options-des">
              Easy Order Shipping
            </span>
          </div>
        </div>
      </div>
      <div className="category-container">
        {categoryList.map((cat, index) => {
          return (
            <div key={index} className="semi-category-container">
              <span className="text-bas cateogry-heading ">
                {cat?.name || ""}
              </span>
              <span className="text-bas cateogry-text ">
                {cat?.description || ""}
              </span>
              <div className="category-image">
                <img src={cat?.imagePath} alt="Slider Image" />
              </div>
            </div>
          );
        })}
        <div
          onClick={() => handleNavigateToListView()}
          className="semi-category-container btn-container center-container"
        >
          <span className="avator-circle center-container ">
            <FaArrowRightLong />
          </span>
          <span className="text-bas cateogry-text ">See all</span>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
