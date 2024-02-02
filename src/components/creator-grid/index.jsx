import Breadcrumb from "../common/breadcrumb/breadcrumb";
import FooterTwo from "../common/footer/footer-2";
import Header from "../common/headers/header";
import TextSlider from "../common/text-slider";
import CreatorGridArea from "./creator-grid-area";

const index = () => {
  return (
    <>
      <Header header_transparent={'header__transparent'}  />
      <Breadcrumb title={'Creator Grid'} subtitle="Creator" b_border={'breadcrumb__border'} />
      <CreatorGridArea/>
      <TextSlider/>
      <FooterTwo tp_container={false} widget_url="/creator-grid" />
    </>
  );
};

export default index;