 import Breadcrumb from '../common/breadcrumb/breadcrumb';
import FooterTwo from '../common/footer/footer-2';
import Header from '../common/headers/header';
import TextSlider from '../common/text-slider';
import UpcomingArea from './upcoming-area';

const index = () => {
  return (
    <>
      <Header header_transparent={'header__transparent'} />
      <Breadcrumb title={'Upcoming projects'} subtitle={'Upcoming'} b_border={'breadcrumb__border'} />
      <UpcomingArea/>
      <TextSlider/>
      <FooterTwo tp_container={false} widget_url="/upcoming" />
    </>
  );
};

export default index;