import Breadcrumb from '../common/breadcrumb/breadcrumb';
import FooterTwo from '../common/footer/footer-2';
import Header from '../common/headers/header';
import TextSlider from '../common/text-slider';
import ListAreaTwo from './list-area-2';

const index = () => {
  return (
    <>
      <Header header_transparent={'header__transparent'} />
      <Breadcrumb title={'Creator List 2'} subtitle="Creator" b_border={'breadcrumb__border'} />
      <ListAreaTwo/>
      <TextSlider/>
      <FooterTwo tp_container={false} widget_url="/creator-list-2" />
    </>
  );
};

export default index;