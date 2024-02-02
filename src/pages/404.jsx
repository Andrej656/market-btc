import SEO from '../components/seo';
import ErrorMain from '../components/404';


const index = () => {
  return (
    <>
     <SEO pageTitle="Error Page" /> 
     <ErrorMain/>
    </>
  );
};

export default index;