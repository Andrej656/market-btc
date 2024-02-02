import FooterTwo from '../common/footer/footer-2';
import Header from '../common/headers/header';
import TextSlider from '../common/text-slider';
import EditProfileArea from './edit-profile-area';

const index = () => {
  return (
    <>
      <Header />
      <EditProfileArea/>
      <TextSlider/>
      <FooterTwo tp_container={false} widget_url="/edit-profile" />
    </>
  );
};

export default index;