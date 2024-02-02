import Breadcrumb from '../common/breadcrumb/breadcrumb';
import FooterTwo from '../common/footer/footer-2';
import Header from '../common/headers/header';
import TextSlider from '../common/text-slider';
import ProductsArea from './products-area';

const index = () => {
  return (
    <>
      <Header header_transparent="header__transparent" />
      <Breadcrumb title="Product Simple" subtitle="Product" b_border="breadcrumb__border" />
      <ProductsArea/>
      <TextSlider/>
      <FooterTwo tp_container={false} widget_url="/product-simple" />
    </>
  );
};

export default index;