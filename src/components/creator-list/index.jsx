import Breadcrumb from "../common/breadcrumb/breadcrumb";
import FooterTwo from "../common/footer/footer-2";
import Header from "../common/headers/header";
import TextSlider from "../common/text-slider";
import CreatorListArea from "./creator-list-area";

const index = () => {
  return (
    <>
      <Header header_transparent={'header__transparent'} />
      <Breadcrumb title={'Creator List'} subtitle="Creator" b_border={'breadcrumb__border'} />
      <CreatorListArea/>
      <TextSlider/>
      <FooterTwo tp_container={false} widget_url="/creator-list" />
    </>
  );
};

export default index;