import FooterTwo from '../common/footer/footer-2';
import Header from '../common/headers/header';
import TextSlider from '../common/text-slider';
import ProductDetailsArea from './details-area';

const index = () => {
  return (
    <>
      <Header/>
      <ProductDetailsArea/>
      <TextSlider/>
      <FooterTwo tp_container={false} widget_url="/product-details" />
    </>
  );
};

export default index;