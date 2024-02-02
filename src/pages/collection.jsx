import SEO from '../components/seo';
import CollectionMain from '../components/collection';

const index = () => {
  return (
    <>
      <SEO pageTitle={'Collection'} />
      <CollectionMain/>
    </>
  );
};

export default index;