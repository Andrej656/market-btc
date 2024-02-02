import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

import products from '../../data/products';
import BidModal from "../common/modals/bid-modal";
import BidItem from "../common/bid-item";

const paginationItems = products.slice(0, 6);

const SliderPagination = () => {

  return (
    <>
      <section className="bid__area pt-110 pb-130 fix">
        <div className="container tp-container">
          <div className="row">
            <div className="col-xxl-6 col-sm-6">
              <div className="section__title-wrapper mb-40">
                <h4 className="section__title-stroke">Hot bids</h4>
                <h3 className="section__title">Product Carousel with dots <span>
                  <img src="assets/img/icon/fire.png" alt="" /></span></h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xxl-12">
              <div className="bid__slider bid__slider-2 bid__slider-active-2">

                <Swiper
                  modules={[Pagination, Autoplay]}
                  pagination={{ clickable: true, el: '.slider-pagination-1' }}
                  className="swiper-wrapper"
                  spaceBetween={30}
                  slidesPerView={4}
                  loop
                  autoplay={{ delay: 6000 }}
                >
                  {paginationItems.map(item => {
                    return (
                      <SwiperSlide key={item.id}>
                        <BidItem item={item} />
                      </SwiperSlide>
                    )
                  })
                  }
                </Swiper>


                <div className="slider-dot slider-dot-3 mt-40">
                  <div className="slider-pagination-1 d-flex align-items-center justify-content-center"></div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>


      {/* BidModal start*/}
      <BidModal />
      {/* BidModal end*/}
    </>
  );
};

export default SliderPagination;