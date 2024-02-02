import Breadcrumb from '../common/breadcrumb/breadcrumb';
import FooterTwo from '../common/footer/footer-2';
import Header from '../common/headers/header';
import TextSlider from '../common/text-slider';
import ExploreNft from '../home/explore-nft';

const index = () => {
  return (
    <>
      <Header header_transparent="header__transparent" />
      <Breadcrumb title="Product Tab" subtitle="Product" b_border="breadcrumb__border" />
      <div className='p-relative z-index-1'>
        <ExploreNft tab_page={true} />
      </div>
      <TextSlider />
      <FooterTwo tp_container={false} widget_url="/product-tab" />
    </>
  );
};

export default index;