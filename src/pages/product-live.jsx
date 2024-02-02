import ProductLive from '../components/product-live';
import SEO from '../components/seo';

const index = () => {
  return (
    <>
      <SEO pageTitle="Product Live" />
      <ProductLive/>
    </>
  );
};

export default index;