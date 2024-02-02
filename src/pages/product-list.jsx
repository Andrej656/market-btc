import ProductList from '../components/product-list';
import SEO from '../components/seo';

const index = () => {
  return (
    <>
      <SEO pageTitle="Product List" />
      <ProductList/>
    </>
  );
};

export default index;