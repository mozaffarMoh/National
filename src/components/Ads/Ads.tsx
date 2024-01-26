import { Carousel } from "react-bootstrap";
import ad from "../../assets/images/Ads/ad1.png";
import ad2 from "../../assets/images/Ads/ad2.png";
import ad3 from "../../assets/images/Ads/ad3.png";
import slideEmptyIcon from "../../assets/images/Ads/slide-empty.jpg";
import slideFillIcon from "../../assets/images/Ads/slide-fill.jpg";
import "./Ads.scss";
import React from "react";

const Ads = () => {
  const adsArray = [{ img: ad3 }, { img: ad2 }, { img: ad }];
  const [indexValue, setIndexValue] = React.useState(2);

  const handleCarouselSelect = (selectedIndex: number) => {
    setIndexValue(selectedIndex);
  };

  return (
    <div className="ads flexCenterColumn">
      <Carousel activeIndex={indexValue} onSelect={handleCarouselSelect}>
        {adsArray.map((item, index) => {
          return (
            <Carousel.Item key={index}>
              <img src={item.img} className="ads-content" />
            </Carousel.Item>
          );
        })}
      </Carousel>
      <div className="flexCenter mt-4">
        {adsArray.map((_, index: number) => {
          return index === indexValue ? (
            <img
              src={slideFillIcon}
              alt=""
              className="slide-icon"
              key={index}
            />
          ) : (
            <img
              src={slideEmptyIcon}
              alt=""
              className="slide-icon"
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Ads;
