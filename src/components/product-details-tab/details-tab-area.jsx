import Link from 'next/link';
import products from "../../data/products";
import ProductDetailsRightSide from '../common/p-details-r-side';

const productItem = products.slice(0, 1);

const DetailsTabArea = () => {
  return (
    <>
      {productItem.map(item => (
        <section key={item.id} className="product__details-area pt-80 pb-120">
          <div className="container">
            <div className="row">
              <div className="col-xxl-7 col-xl-6 col-lg-6">
                <div className="product__details-thumb-tab d-sm-flex align-items-start">
                  <div className="product__details-thumb-btn mr-30">
                    <nav>
                      <div className="nav nav-tabs flex-sm-column" id="nav-tab" role="tablist">
                        <button className="nav-link active" id="nav-1-tab" data-bs-toggle="tab" data-bs-target="#nav-1" type="button" role="tab" aria-controls="nav-1" aria-selected="true">
                          <img src={item.smImg2} alt="" />
                        </button>
                        <button className="nav-link" id="nav-2-tab" data-bs-toggle="tab" data-bs-target="#nav-2" type="button" role="tab" aria-controls="nav-2" aria-selected="false">
                          <img src="assets/img/product/tab/product-tab-sm-2.jpg" alt="" />
                        </button>
                        <button className="nav-link" id="nav-3-tab" data-bs-toggle="tab" data-bs-target="#nav-3" type="button" role="tab" aria-controls="nav-3" aria-selected="false">
                          <img src="assets/img/product/tab/product-tab-sm-3.jpg" alt="" />
                        </button>
                      </div>
                    </nav>
                  </div>
                  <div className="product__details-thumb-content">
                    <div className="tab-content" id="nav-tabContent">
                      <div className="tab-pane fade show active" id="nav-1" role="tabpanel" aria-labelledby="nav-1-tab">
                        <img src="assets/img/product/tab/product-tab-big-1.jpg" alt="" />
                      </div>
                      <div className="tab-pane fade" id="nav-2" role="tabpanel" aria-labelledby="nav-2-tab">
                        <img src="assets/img/product/tab/product-tab-big-2.jpg" alt="" />
                      </div>
                      <div className="tab-pane fade" id="nav-3" role="tabpanel" aria-labelledby="nav-3-tab">
                        <img src="assets/img/product/tab/product-tab-big-3.jpg" alt="" />
                      </div>
                    </div>
                  </div>
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

    </>
  );
};

export default DetailsTabArea;