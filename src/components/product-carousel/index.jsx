import Breadcrumb from '../common/breadcrumb/breadcrumb';
import FooterTwo from '../common/footer/footer-2';
import Header from '../common/headers/header';
import TextSlider from '../common/text-slider';
import SliderNavPag from './slider-nav-pag';
import SliderNavigation from './slider-navigation';
import SliderPagination from './slider-pagination';

const index = () => {
  return (
    <>
      <Header header_transparent="header__transparent"/>
      <Breadcrumb title="Product Carousel" subtitle="Product" b_border="breadcrumb__border" />
      <SliderNavigation/>
      <SliderPagination/>
      <SliderNavPag/>
      <TextSlider/>
      <FooterTwo tp_container={false} widget_url="/product-carousel" />
    </>
  );
};

export default index;