import Breadcrumb from '../common/breadcrumb/breadcrumb';
import FooterTwo from '../common/footer/footer-2';
import Header from '../common/headers/header';
import TextSlider from '../common/text-slider';
import UpcomingProject from './upcoming-project';

const index = () => {
  return (
    <>
      <Header header_transparent={'header__transparent'} />
      <Breadcrumb title={'Top Ranking Projects'} subtitle="Ranking" b_border={'breadcrumb__border'} />
      <UpcomingProject/>
      <TextSlider/>
      <FooterTwo tp_container={false} widget_url="/ranking" />
    </>
  );
};

export default index;