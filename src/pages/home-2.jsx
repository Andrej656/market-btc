import dynamic from 'next/dynamic';
import HomeTwoMain from '../components/home-2';
import SEO from '../components/seo';

const index = () => {
  return (
    <>
      <SEO pageTitle="Home two" />
      <HomeTwoMain />
    </>
  );
};

export default index;