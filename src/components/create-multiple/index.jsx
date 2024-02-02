import Header from "../common/headers/header";
import TextSlider from "../common/text-slider";
import FooterTwo from "../common/footer/footer-2";
import CreateMultipleArea from "../create-single/create-area";

const index = () => {
  return (
    <>
      <Header />
      <CreateMultipleArea multiple={true} />
      <TextSlider />
      <FooterTwo tp_container={false} widget_url="/create-single" />
    </>
  );
};

export default index;