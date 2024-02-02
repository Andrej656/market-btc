import Breadcrumb from '../common/breadcrumb/breadcrumb';
import FooterTwo from '../common/footer/footer-2';
import Header from '../common/headers/header';
import TextSlider from '../common/text-slider';
import FeaturedCollection from './featured-collection';

const index = () => {
  return (
    <>
      <Header header_transparent={'header__transparent'} />
      <Breadcrumb title={'Collection Grid 2'} subtitle="Collection" b_border={'breadcrumb__border'} />
      <FeaturedCollection/>
      <TextSlider/>
      <FooterTwo tp_container={false} widget_url="/collection-grid-2" />
    </>
  );
};

export default index;