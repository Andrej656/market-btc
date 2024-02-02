import Breadcrumb from '../common/breadcrumb/breadcrumb';
import FooterTwo from '../common/footer/footer-2';
import Header from '../common/headers/header';
import TextSlider from '../common/text-slider';
import TermsArea from './terms-area';

const index = () => {
  return (
    <>
      <Header header_transparent="header__transparent" />
      <Breadcrumb title="Terms & Conditions" subtitle="Terms & Conditions" b_border="breadcrumb__border" />
      <TermsArea/>
      <TextSlider/>
      <FooterTwo tp_container={false} widget_url="/terms" />
    </>
  );
};

export default index;