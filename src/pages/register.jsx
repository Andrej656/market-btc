import SEO from '../components/seo';
import Register from '../components/register';

const index = () => {
  return (
    <>
      <SEO pageTitle={'Register'} />
      <Register/>
    </>
  );
};

export default index;