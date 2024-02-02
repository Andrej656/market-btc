import Breadcrumb from '../common/breadcrumb/breadcrumb';
import FooterTwo from '../common/footer/footer-2';
import Header from '../common/headers/header';
import TextSlider from '../common/text-slider';
import ProductItems from './product-items';

const index = () => {
  return (
    <>
      <Header header_transparent="header__transparent" />
      <Breadcrumb title="Product Grid" subtitle="Product" b_border="breadcrumb__border" />
      <ProductItems/>
      <TextSlider/>
      <FooterTwo tp_container={false} widget_url="/product-grid" />
    </>
  );
};

export default index;