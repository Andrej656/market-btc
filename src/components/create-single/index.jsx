import FooterTwo from '../common/footer/footer-2';
import Header from '../common/headers/header';
import TextSlider from '../common/text-slider';
import CreateSingleArea from './create-area';

const index = () => {
  return (
    <>
      <Header/>
      <CreateSingleArea/>
      <TextSlider/>
      <FooterTwo tp_container={false} widget_url="/create-single" />
    </>
  );
};

export default index;