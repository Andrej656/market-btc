import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";

import BidModal from "../common/modals/bid-modal";
import BidItem from "../common/bid-item";
import products from "../../data/products";

const SliderNavigation = () => {
  const [hotItems, setHotItems] = useState(products.filter(item => item.hot));
  return (
    <>
      <section className="bid__area pt-110 pb-130 fix p-relative z-index-1">
        <div className="container tp-container">
          <div className="row">
            <div className="col-xxl-6 col-sm-6">
              <div className="section__title-wrapper mb-40">
                <h4 className="section__title-stroke">Hot bids</h4>
                <h3 className="section__title">Product Carousel with arrow <span>
                  <img src="assets/img/icon/fire.png" alt="" /></span></h3>
              </div>
            </div>
            <div className="col-xxl-6 col-sm-6">
              <div className="bid__nav text-sm-end">
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
              <div className="bid__slider bid__slider-active">

                <Swiper
                  navigation={{ nextEl: '.swiper-next', prevEl: '.swiper-prev' }}
                  modules={[Navigation, Autoplay]}
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
                  {hotItems.map(item => {
                    return (
                      <SwiperSlide key={item.id}>
                        <BidItem item={item} />
                      </SwiperSlide>
                    )
                  })
                  }
                </Swiper>

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

export default SliderNavigation;