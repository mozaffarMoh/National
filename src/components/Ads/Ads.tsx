import { Carousel } from "react-bootstrap";
import ad from "../../assets/images/HomeBeforeLogin/ad-section.png";
import "./Ads.scss";

const Ads = () => {
  return (
    <div className="ad flexCenter">
      <Carousel>
        <Carousel.Item>
          <img src={ad} />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Ads;
