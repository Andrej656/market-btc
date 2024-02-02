import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import SEO from "../../components/seo";
import Header from "../../components/common/headers/header";
import products from "../../data/products";
import ProductDetailsRightSide from "../../components/common/p-details-r-side";
import ShareModal from "../../components/common/modals/share-modal";
import ReportModal from "../../components/common/modals/report-modal";
import BidModal from "../../components/common/modals/bid-modal";
import TextSlider from "../../components/common/text-slider";
import FooterTwo from "../../components/common/footer/footer-2";


const ProductDetailsTabDynamic = () => {
  const router = useRouter();
  const [product, setProductItem] = useState({});
  const id = router.query.id;

  useEffect(() => {
    if (!id) (<h1>Loading...</h1>)
  
    else (setProductItem(products.find(item => item.id == id)))

    return () => {
      
    };
  }, [id]);

  return (
    <>
      {/* SEO start */}
      <SEO pageTitle={'Product Details Tab'} />
      {/* SEO end */}

      {/* Header area start */}
      <Header />
      {/* Header area end */}

    
        <section className="product__details-area pt-80 pb-120">
          <div className="container">
            <div className="row">
              <div className="col-xxl-7 col-xl-6 col-lg-6">
                <div className="product__details-thumb-tab d-sm-flex align-items-start">
                  <div className="product__details-thumb-btn mr-30">
                    <nav>
                      <div className="nav nav-tabs flex-sm-column" id="nav-tab" role="tablist">
                        <button className="nav-link active" id="nav-1-tab" data-bs-toggle="tab" data-bs-target="#nav-1" type="button" role="tab" aria-controls="nav-1" aria-selected="true">
                          <img src={product?.smImg2} alt="" />
                        </button>
                        <button className="nav-link" id="nav-2-tab" data-bs-toggle="tab" data-bs-target="#nav-2" type="button" role="tab" aria-controls="nav-2" aria-selected="false">
                          <img src="/assets/img/product/tab/product-tab-sm-2.jpg" alt="" />
                        </button>
                        <button className="nav-link" id="nav-3-tab" data-bs-toggle="tab" data-bs-target="#nav-3" type="button" role="tab" aria-controls="nav-3" aria-selected="false">
                          <img src="/assets/img/product/tab/product-tab-sm-3.jpg" alt="" />
                        </button>
                      </div>
                    </nav>
                  </div>
                  <div className="product__details-thumb-content">
                    <div className="tab-content" id="nav-tabContent">
                      <div className="tab-pane fade show active" id="nav-1" role="tabpanel" aria-labelledby="nav-1-tab">
                        <img src="/assets/img/product/tab/product-tab-big-1.jpg" alt="" />
                      </div>
                      <div className="tab-pane fade" id="nav-2" role="tabpanel" aria-labelledby="nav-2-tab">
                        <img src="/assets/img/product/tab/product-tab-big-2.jpg" alt="" />
                      </div>
                      <div className="tab-pane fade" id="nav-3" role="tabpanel" aria-labelledby="nav-3-tab">
                        <img src="/assets/img/product/tab/product-tab-big-3.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-5 col-xl-6 col-lg-6">
                {/* ProductDetailsRightSide */}
                <ProductDetailsRightSide item={product} />
                {/* ProductDetailsRightSide */}
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
      <FooterTwo tp_container={false} widget_url="/product-details-tab" />
      {/* footer end */}
   
    </>
  );
};

export default ProductDetailsTabDynamic;