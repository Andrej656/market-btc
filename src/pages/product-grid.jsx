import dynamic from 'next/dynamic';
import ProductGrid from '../components/product-grid';
import SEO from '../components/seo';

const index = () => {
  return (
    <>
      <SEO pageTitle="Product Grid" />
      <ProductGrid/>
    </>
  );
};

export default index;