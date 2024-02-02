import Breadcrumb from '../common/breadcrumb/breadcrumb';
import FooterTwo from '../common/footer/footer-2';
import Header from '../common/headers/header';
import TextSlider from '../common/text-slider';
import ShopGridArea from './shop-grid-area';

const index = () => {
  return (
    <>
      <Header header_transparent="header__transparent"/>   
      <Breadcrumb title="Shop Grid" subtitle="Shop" b_border="breadcrumb__border" />
      <ShopGridArea/>
      <TextSlider/>
      <FooterTwo tp_container={false} widget_url="/shop-grid" />
    </>
  );
};

export default index;