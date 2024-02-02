import AboutMain from '../components/about';
import SEO from '../components/seo';

const index = () => {
  return (
    <>
      <SEO pageTitle="About" />
      <AboutMain />
    </>
  );
};

export default index;