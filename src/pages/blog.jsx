import SEO from '../components/seo';
import BlogMain from '../components/blog';

const index = () => {
  return (
    <>
     <SEO pageTitle="Blog" /> 
     <BlogMain/>
    </>
  );
};

export default index;