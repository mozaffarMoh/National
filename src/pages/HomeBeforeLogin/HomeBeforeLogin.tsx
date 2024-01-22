import "./HomeBeforeLogin.scss";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import StartNow from "../../components/StartNow/StartNow";
import Ads from "../../components/Ads/Ads";

const HomeBeforeLogin = () => {
  return (
    <div className="d-flex flex-column">
      <Header />
      <div className="home-before-login flexCenter">
        <div className="first-section flexCenter">
          <StartNow />
          <Ads />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomeBeforeLogin;
