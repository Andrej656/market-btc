import dynamic from 'next/dynamic';
import ShopGrid from '../components/shop-grid';
import SEO from '../components/seo';

const index = () => {
  return (
    <>
      <SEO pageTitle="Shop Grid" />
      <ShopGrid/>
    </>
  );
};

export default index;