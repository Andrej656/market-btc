import FooterTwo from '../common/footer/footer-2';
import Header from '../common/headers/header';
import TextSlider from '../common/text-slider';
import BlogArea from './blog-area';

const index = () => {
  return (
    <>
      <Header/>
      <BlogArea/>
      <TextSlider/>
      <FooterTwo tp_container={false} widget_url="/blog-details" />
    </>
  );
};

export default index;