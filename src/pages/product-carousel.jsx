import SEO from '../components/seo';
import ProductCarousel from '../components/product-carousel'

const index = () => {
  return (
    <>
      <SEO pageTitle="Product Carousel" />
      <ProductCarousel/>
    </>
  );
};

export default index;