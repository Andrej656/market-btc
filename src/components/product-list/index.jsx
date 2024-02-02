import Breadcrumb from '../common/breadcrumb/breadcrumb';
import FooterTwo from '../common/footer/footer-2';
import Header from '../common/headers/header';
import TextSlider from '../common/text-slider';
import ProductList from './products-list';

const index = () => {
  return (
    <>
      <Header header_transparent="header__transparent" />
      <Breadcrumb title="Product List" subtitle="Product" b_border="breadcrumb__border" />
      <ProductList/>
      <TextSlider/>
      <FooterTwo tp_container={false} widget_url="/product-list" />
    </>
  );
};

export default index;