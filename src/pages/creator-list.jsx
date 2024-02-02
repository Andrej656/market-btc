import SEO from '../components/seo';
import CreatorListMain from '../components/creator-list';

const index = () => {
  return (
    <>
      <SEO pageTitle={'Creator List'} />
      <CreatorListMain/>
    </>
  );
};

export default index;