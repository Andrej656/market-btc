import TextSlider from '../common/text-slider';
import Breadcrumb from '../common/breadcrumb/breadcrumb';
import Header from '../common/headers/header';
import CarouselNav from './carousel-nav';
import CarouselPagNav from './carousel-nav-pag';
import CarouselPagination from './carusel-pag';
import FooterTwo from '../common/footer/footer-2';

const index = () => {
  return (
    <>
      <Header header_transparent="header__transparent"/>
      <Breadcrumb title="Product Live Carousel" subtitle="Product" b_border="breadcrumb__border" />
      <CarouselNav/>
      <CarouselPagination/>
      <CarouselPagNav/>
      <TextSlider/>
      <FooterTwo tp_container={false} widget_url="/product-live-carousel" />
    </>
  );
};

export default index;