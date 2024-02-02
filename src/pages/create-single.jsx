import SEO from '../components/seo';
import CreateSingleMain from '../components/create-single';

const index = () => {
  return (
    <>
      <SEO pageTitle={'Create Single'} />
      <CreateSingleMain/>
    </>
  );
};

export default index;