import "./SpecialSelection.scss";
import Ads from "../../components/Ads/Ads";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import ClassificationButtons from "../../components/ClassificationButtons/ClassificationButtons";
import ClassificationList from "../../components/ClassificationList/ClassificationList";

const SpecialSelection = () => {
  return (
    <div className="special-selection">
      <Header />
      <div className="special-selection-ads">
        <Ads />
      </div>
      <ClassificationButtons />
      <ClassificationList />
      <Footer />
    </div>
  );
};

export default SpecialSelection;
