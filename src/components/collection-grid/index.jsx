import Breadcrumb from '../common/breadcrumb/breadcrumb';
import FooterTwo from '../common/footer/footer-2';
import Header from '../common/headers/header';
import TextSlider from '../common/text-slider';
import CollectionArea from './collection-area';

const index = () => {
  return (
    <>
      <Header header_transparent={'header__transparent'}/>
      <Breadcrumb title={'Collection Grid'} subtitle="Collection" b_border={'breadcrumb__border'} />
      <CollectionArea/>
      <TextSlider/>
      <FooterTwo tp_container={false} widget_url="/collection-grid" />
    </>
  );
};

export default index;