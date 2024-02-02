import Breadcrumb from '../common/breadcrumb/breadcrumb';
import FooterTwo from '../common/footer/footer-2';
import Header from '../common/headers/header';
import TextSlider from '../common/text-slider';
import ActivityArea from './activity-area';

const index = () => {
  return (
    <>
      <Header header_transparent="header__transparent" />
      <Breadcrumb title="Activity" subtitle="Activity" b_border="breadcrumb__border" />
      <ActivityArea/>
      <TextSlider/>
      <FooterTwo/>
    </>
  );
};

export default index;