import FooterTwo from '../common/footer/footer-2';
import Header from '../common/headers/header';
import TextSlider from '../common/text-slider';
import DetailsTabArea from './details-tab-area';

const index = () => {
  return (
    <>
      <Header/>
      <DetailsTabArea/>
      <TextSlider/>
      <FooterTwo tp_container={false} widget_url="/product-details-tab" />
    </>
  );
};

export default index;