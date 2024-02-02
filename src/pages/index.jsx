import dynamic from 'next/dynamic';

import HomeMain from '../components/home';
import SEO from '../components/seo';

const index = () => {
  return (
    <>
      <SEO pageTitle="Home Default" />
      <HomeMain />
    </>
  )
}

export default index;
