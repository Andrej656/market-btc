import Breadcrumb from '../common/breadcrumb/breadcrumb';
import FooterTwo from '../common/footer/footer-2';
import Header from '../common/headers/header';
import TextSlider from '../common/text-slider';
import ShopArea from './shop-area';

const index = () => {
  return (
    <>
      <Header header_transparent="header__transparent"/>
      <Breadcrumb title="Marketplace" subtitle="Marketplace" />
      <ShopArea/>
      <TextSlider/>
      <FooterTwo tp_container={false} widget_url="/shop" />
    </>
  );
};

export default index;