import Breadcrumb from '../common/breadcrumb/breadcrumb';
import FooterTwo from '../common/footer/footer-2';
import Header from '../common/headers/header';
import TextSlider from '../common/text-slider';
import ProductLiveItems from './product-live';

const index = () => {
  return (
    <>
     <Header header_transparent="header__transparent" /> 
     <Breadcrumb title="Product Live" subtitle="Product" b_border="breadcrumb__border" />
     <ProductLiveItems/>
     <TextSlider/>
     <FooterTwo tp_container={false} widget_url="/product-live" />
    </>
  );
};

export default index;