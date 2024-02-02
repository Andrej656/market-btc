import products from '../../data/products';
import ReportModal from '../common/modals/report-modal';
import ShareModal from '../common/modals/share-modal';
import ProductDetailsRightSide from '../common/p-details-r-side';

const productItem = products.slice(0, 1);


const ProductDetailsArea = () => {
  return (
    <>
      {productItem.map(item => (
        <section key={item.id} className="product__details-area pt-80 pb-120">
          <div className="container">
            <div className="row">
              <div className="col-xxl-7 col-xl-6 col-lg-6">
                <div className="product__details-thumb m-img pr-70">
                  <img src="assets/img/product/product-1.jpg" alt="" />
                </div>
              </div>
              <div className="col-xxl-5 col-xl-6 col-lg-6">
                {/* ProductDetailsRightSide */}
                <ProductDetailsRightSide item={item} />
                {/* ProductDetailsRightSide */}
              </div>
            </div>
          </div>
        </section>
      ))}


      {/* share modal start*/}
      <ShareModal />
      {/* share modal end*/}
      {/* report modal start*/}
      <ReportModal />
      {/* report modal end*/}

    </>
  );
};

export default ProductDetailsArea;