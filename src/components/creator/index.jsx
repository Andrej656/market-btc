import Header from '../common/headers/header';
import Breadcrumb from '../common/breadcrumb/breadcrumb';
import ShopArea from '../shop/shop-area';
import TextSlider from '../common/text-slider';
import FooterTwo from '../common/footer/footer-2';

const index = () => {
  return (
    <>
      <Header header_transparent={'header__transparent'} />
      <Breadcrumb title={'Collection'} subtitle="Collection" />
      <ShopArea creator={true} />
      <TextSlider/>
      <FooterTwo tp_container={false} widget_url="/creator" />
    </>
  );
};

export default index;