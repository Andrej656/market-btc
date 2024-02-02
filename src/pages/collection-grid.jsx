import SEO from '../components/seo';
import CollectionGridMain from '../components/collection-grid';

const index = () => {
  return (
    <>
      <SEO pageTitle={'Collection Grid'} />
      <CollectionGridMain/>
    </>
  );
};

export default index;