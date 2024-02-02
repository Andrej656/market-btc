import Breadcrumb from '../common/breadcrumb/breadcrumb';
import FooterTwo from '../common/footer/footer-2';
import Header from '../common/headers/header';
import TextSlider from '../common/text-slider';
import CreateArea from './create-area';

const index = () => {
  return (
    <>
      <Header header_transparent={'header__transparent'}/>
      <Breadcrumb title={'Create Item'} subtitle="Create" b_border={'breadcrumb__border'} />
      <CreateArea/>
      <TextSlider/>
      <FooterTwo tp_container={false} widget_url="/create" />
    </>
  );
};

export default index;