import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import FooterTwo from '../../components/common/footer/footer-2';
import Header from '../../components/common/headers/header';
import ReportModal from '../../components/common/modals/report-modal';
import ShareModal from '../../components/common/modals/share-modal';
import ProductDetailsRightSide from '../../components/common/p-details-r-side';
import TextSlider from '../../components/common/text-slider';
import products from '../../data/products';
import BidModal from '../../components/common/modals/bid-modal';
import SEO from '../../components/seo';


const ProductDetailsDynamic = () => {

  const router = useRouter();
  const [product, setProductItem] = useState({});
  const id = router.query.id;

  useEffect(() => {
    if (!id) (<h1>Loading...</h1>)
  
    else (setProductItem(products.find(item => item.id == id)))

    return () => {
      
    };
  }, [id]);

  // console.log(product);

  return (
    <>
    {/* SEO start */}
    <SEO pageTitle={'Product Details'} />
    {/* SEO end */}
    
      {/* Header area start */}
      <Header />
      {/* Header area end */}

        <section className="product__details-area pt-80 pb-120">
          <div className="container">
            <div className="row">
              <div className="col-xxl-7 col-xl-6 col-lg-6">
                <div className="product__details-thumb m-img pr-70">
                  {/* <img src={product?.smImg} alt="" /> */}
                  <img src="/assets/img/product/product-1.jpg" alt="" />
                </div>
              </div>
              <div className="col-xxl-5 col-xl-6 col-lg-6">
             
                <ProductDetailsRightSide item={product} />
              
              </div>
            </div>
          </div>
        </section>
   


      {/* share modal start*/}
      <ShareModal />
      {/* share modal end*/}

      {/* report modal start*/}
      <ReportModal />
      {/* report modal end*/}

      {/* BidModal start*/}
      <BidModal />
      {/* BidModal end*/}

      {/* text slider start */}
      <TextSlider />
      {/* text slider end */}      

      {/* footer start */}
      <FooterTwo tp_container={false} widget_url="/product-details" />
      {/* footer end */}
    </>
  );
};

export default ProductDetailsDynamic;