import Breadcrumb from '../common/breadcrumb/breadcrumb';
import FooterTwo from '../common/footer/footer-2';
import Header from '../common/headers/header';
import TextSlider from '../common/text-slider';
import ErrorArea from './error-area';

const index = () => {
  return (
    <>
      <Header header_transparent="header__transparent" />
      <Breadcrumb title="Error" subtitle="Page Not Found" b_border="breadcrumb__border" />
      <ErrorArea/>
      <TextSlider/>
      <FooterTwo tp_container={false} widget_url="/privacy" />
    </>
  );
};

export default index;