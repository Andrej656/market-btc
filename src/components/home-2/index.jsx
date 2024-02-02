import FooterTwo from "../common/footer/footer-2";
import HeaderTwo from "../common/headers/header-2";
import TextSlider from "../common/text-slider";
import AuctionArea from "./auction-area";
import BlogArea from "./blog-area";
import BrandArea from "./brand-area";
import CollectionArea from "./collection-area";
import CtaArea from "./cta-area";
import HeroArea from "./hero-area";
import NftArea from "./nft-area";

const index = () => {
  return (
    <>
      <HeaderTwo/>
      <HeroArea/>
      <CollectionArea/>
      <NftArea/>
      <CtaArea/>
      <AuctionArea/>
      <BrandArea/>
      <BlogArea/>
      <TextSlider/>
      <FooterTwo widget_url="/home-2"/>
    </>
  );
};

export default index;