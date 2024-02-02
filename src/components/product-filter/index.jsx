import Breadcrumb from '../common/breadcrumb/breadcrumb';
import FooterTwo from '../common/footer/footer-2';
import Header from '../common/headers/header';
import TextSlider from '../common/text-slider';
import NftArea from '../home-2/nft-area';

const index = () => {
  return (
    <>
      <Header header_transparent="header__transparent" />
      <Breadcrumb title="Product Filter" subtitle="Product" b_border="breadcrumb__border" />
      <NftArea p_filter_page={true} />
      <TextSlider/>
      <FooterTwo tp_container={false} widget_url="/product-filter" />
    </>
  );
};

export default index;