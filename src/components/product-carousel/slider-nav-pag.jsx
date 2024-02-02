import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";

import products from '../../data/products';
import BidModal from "../common/modals/bid-modal";
import BidItem from "../common/bid-item";

const productItems = products.slice(0, 6);

const SliderNavPag = () => {
  return (
    <>
      <section className="bid__area pt-110 pb-130 fix">
        <div className="container tp-container">
          <div className="row">
            <div className="col-xxl-6 col-sm-6">
              <div className="section__title-wrapper mb-40">
                <h4 className="section__title-stroke">Hot bids</h4>
                <h3 className="section__title">Product Carousel with both <span>
                  <img src="assets/img/icon/fire.png" alt="" /></span>
                </h3>
              </div>
            </div>
            <div className="col-xxl-6 col-sm-6">
              <div className="bid__nav-2 text-sm-end">
                <button type="button" className="swiper-arrow swiper-prev me-2">
                  <i className="fa-regular fa-angle-left"></i>
                </button>
                <button type="button" className="swiper-arrow swiper-next">
                  <i className="fa-regular fa-angle-right"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xxl-12">
              <div className="bid__slider bid__slider-2 bid__slider-active-3 p-relative">

                <Swiper
                  navigation={{ nextEl: '.swiper-next', prevEl: '.swiper-prev' }}
                  modules={[Navigation, Autoplay, Pagination]}
                  pagination={{ clickable: true, el: '.slider-pagination-2' }}
                  className="swiper-wrapper"
                  spaceBetween={25}
                  slidesPerView={4}
                  loop
                  autoplay={{ delay: 6000 }}
                  breakpoints={
                    {
                      '0': {
                        slidesPerView: 1,
                        spaceBetween: 25
                      },
                      '640': {
                        slidesPerView: 1,
                        spaceBetween: 25
                      },
                      '768': {
                        slidesPerView: 2,
                        spaceBetween: 25
                      },
                      '991': {
                        slidesPerView: 3,
                        spaceBetween: 25
                      },
                      '1200': {
                        slidesPerView: 4,
                        spaceBetween: 25
                      }
                    }
                  }
                >
                  {productItems.map(item => {
                    return (
                      <SwiperSlide key={item.id}>
                        <BidItem item={item} />
                      </SwiperSlide>
                    )
                  })
                  }
                </Swiper>

                <div className="slider-dot slider-dot-3 mt-40">
                  <div className="slider-pagination-2 d-flex align-items-center justify-content-center"></div>
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

export default SliderNavPag;