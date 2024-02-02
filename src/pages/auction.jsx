import SEO from '../components/seo';
import AuctionMain from '../components/auction';

const index = () => {
  return (
    <>
     <SEO pageTitle={'Auction'} /> 
     <AuctionMain/>
    </>
  );
};

export default index;