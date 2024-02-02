import Link from 'next/link';
import products from "../../data/products";
import ProductDetailsRightSide from '../common/p-details-r-side';

const productItem = products.slice(0, 1);

const DetailsGridArea = () => {
  return (
    <>
      {productItem.map(item => (
        <section key={item.id} className="product__details-area pt-80 pb-120">
          <div className="container">
            <div className="row">
              <div className="col-xxl-7 col-xl-6 col-lg-6">
                <div className="product__details-thumb-grid">
                  <div className="row gx-2 gy-2">
                    <div className="col-sm-6">
                      <img src="assets/img/product/grid/product-grid-1.jpg" alt="" />
                    </div>
                    <div className="col-sm-6">
                      <img src="assets/img/product/grid/product-grid-2.jpg" alt="" />
                    </div>
                    <div className="col-sm-6">
                      <img src="assets/img/product/grid/product-grid-3.jpg" alt="" />
                    </div>
                    <div className="col-sm-6">
                      <img src="assets/img/product/grid/product-grid-4.jpg" alt="" />
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

export default DetailsGridArea;