import FooterOne from '../common/footer/footer-1';
import Header from '../common/headers/header';
import BidArea from './bid-area';
import CtaArea from './cta-area';
import ExploreNft from './explore-nft';
import FeatureArea from './feature-area';
import HeroSlider from './hero-slider';
import HotCollection from './hot-collection';
import SellerArea from './seller-area';

const index = () => {
  return (
    <>
      <Header/>
      <HeroSlider/>
      <SellerArea/>
      <BidArea/>
      <ExploreNft/>
      <HotCollection/>
      <FeatureArea/>
      <CtaArea/>
      <FooterOne/>
    </>
  );
};

export default index;