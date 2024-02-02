import Breadcrumb from '../common/breadcrumb/breadcrumb';
import FooterTwo from '../common/footer/footer-2';
import Header from '../common/headers/header';
import TextSlider from '../common/text-slider';
import ShopArea from '../shop/shop-area';

const index = () => {
  return (
    <>
      <Header header_transparent={'header__transparent'} />
      <Breadcrumb title={'Collection'} subtitle="Collection" />
      <ShopArea collection={true} />
      <TextSlider/>
      <FooterTwo tp_container={false} widget_url="/collection" />
    </>
  );
};

export default index;