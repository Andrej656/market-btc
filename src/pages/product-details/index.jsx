import ProductDetails from '../../components/product-details';
import SEO from '../../components/seo';

const index = () => {
  return (
    <>
      <SEO pageTitle="Product Details" />
      <ProductDetails />
    </>
  );
};

export default index;