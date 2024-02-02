import FooterTwo from '../common/footer/footer-2';
import Header from '../common/headers/header';
import TextSlider from '../common/text-slider';
import ProfileArea from './profile-area';

const index = () => {
  return (
    <>
      <Header />
      <ProfileArea />
      <TextSlider />
      <FooterTwo tp_container={false} widget_url="/profile" />
    </>
  );
};

export default index;