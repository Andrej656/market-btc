import FooterTwo from "../common/footer/footer-2";
import Header from "../common/headers/header";
import TextSlider from "../common/text-slider";
import DetailsGridArea from "./details-grid-area";

const index = () => {
  return (
    <>
      <Header/>
      <DetailsGridArea/>
      <TextSlider/>
      <FooterTwo tp_container={false} widget_url="/product-details-grid" />
    </>
  );
};

export default index;