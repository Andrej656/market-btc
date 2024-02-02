import SEO from '../components/seo';
import EditProfile from '../components/edit-profile';

const index = () => {
  return (
    <>
      <SEO pageTitle="Edit profile" />
      <EditProfile/>
    </>
  );
};

export default index;