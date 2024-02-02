import Breadcrumb from '../common/breadcrumb/breadcrumb';
import FooterTwo from '../common/footer/footer-2';
import Header from '../common/headers/header';
import TextSlider from '../common/text-slider';
import FaqArea from './faq-area';
import FeatureArea from './feature-area';

const index = () => {
  return (
    <>
      <Header header_transparent="header__transparent" />
      <Breadcrumb title="Support" subtitle="Support" b_border="breadcrumb__border" />
      <FeatureArea/>
      <FaqArea/>
      <TextSlider/>
      <FooterTwo tp_container={false} widget_url="/support" />
    </>
  );
};

export default index;