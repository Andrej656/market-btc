import HeaderThree from '../common/headers/header-3';
import Creators from './creators';
import CtaArea from './cta-area';
import FeaturedCollection from './featured-collection';
import HeroArea from './hero-area';
import HomeFooterThree from './home-footer-3';
import NftItems from './nft-items';
import ProcessArea from './process-area';

const index = () => {
  return (
    <>
      <HeaderThree/>
      <HeroArea/>
      <ProcessArea/>
      <NftItems/>
      <Creators/>
      <FeaturedCollection/>
      <CtaArea/>
      <HomeFooterThree/>
    </>
  );
};

export default index;