import Breadcrumb from '../common/breadcrumb/breadcrumb';
import FooterTwo from '../common/footer/footer-2';
import Header from '../common/headers/header';
import TextSlider from '../common/text-slider';
import BlogArea from './blog-area';

const index = () => {
  return (
    <>
      <Header header_transparent={'header__transparent'} />
      <Breadcrumb title="Our Blog" subtitle="Blog" b_border="breadcrumb__border" />
      <BlogArea/>
      <TextSlider/>
      <FooterTwo tp_container={false} widget_url="/blog" />
    </>
  );
};

export default index;