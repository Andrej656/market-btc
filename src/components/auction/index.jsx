import Header from "../common/headers/header";
import Breadcrumb from "../common/breadcrumb/breadcrumb";
import AuctionItems from "./auction-items";
import TextSlider from "../common/text-slider";
import FooterTwo from "../common/footer/footer-2";

const index = () => {
  return (
    <>
      <Header header_transparent={'header__transparent'} />
      <Breadcrumb title={'Live Auctions'} subtitle="Auctions" b_border={'breadcrumb__border'} />
      <AuctionItems/>
      <TextSlider/>
      <FooterTwo tp_container={false} widget_url="/auction" />
    </>
  );
};

export default index;