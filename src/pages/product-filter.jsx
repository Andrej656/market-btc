import ProductFilter from '../components/product-filter';
import SEO from '../components/seo';

const index = () => {
  return (
    <>
      <SEO pageTitle="Product Filter" />
      <ProductFilter/>
    </>
  );
};

export default index;