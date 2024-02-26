import { Carousel } from "react-bootstrap";
import slideEmptyIcon from "../../assets/images/Ads/slide-empty.jpg";
import slideFillIcon from "../../assets/images/Ads/slide-fill.jpg";
import "./Ads.scss";
import React from "react";
import useGet from "../../api/useGet";
import { endPoint } from "../../api/endPoints";

const Ads = () => {
  const [indexValue, setIndexValue] = React.useState(2);
  const uuid = "06ae1f82-8df5-413f-bddb-bc2c1fc6ea51";
  const [data] = useGet(endPoint.sliders, { isuuid: true, uuid: uuid });

  const handleCarouselSelect = (selectedIndex: number) => {
    setIndexValue(selectedIndex);
  };

  return (
    <div className="ads flexCenterColumn">
      <Carousel activeIndex={indexValue} onSelect={handleCarouselSelect}>
        {data &&
          data.map((item: any, index) => {
            return (
              <Carousel.Item key={index}>
                <img src={item.url["1"]} className="ads-content" />
              </Carousel.Item>
            );
          })}
      </Carousel>
      <div className="flexCenter mt-4">
        {data.map((_, index: number) => {
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
