import { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";

import products from '../../data/products';
import BidModal from '../common/modals/bid-modal';
import AuctionItem from '../common/auc-item';

const CarouselNav = () => {
  const [aucItems, setAucItems] = useState(products.filter(item => item.auc_img));
  return (
    <>
      <section className="auction__area pt-105 pb-50 p-relative z-index-1">
        <div className="container">
          <div className="auction__border mb-40">
            <div className="row">
              <div className="col-xxl-6 col-md-6">
                <div className="section__title-wrapper-2 mr-15">
                  <h3 className="section__title-2">Product Live Carousel</h3>
                </div>
              </div>
              <div className="col-xxl-6 col-sm-6">
                <div className="auction__nav text-sm-end">
                  <button type="button" className="swiper-arrow swiper-prev me-2">
                    <i className="fa-regular fa-angle-left"></i>
                  </button>
                  <button type="button" className="swiper-arrow swiper-next">
                    <i className="fa-regular fa-angle-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xxl-12">
              <div className="auction__slider auction__slider-active">

                <Swiper
                  navigation={{ nextEl: '.swiper-next', prevEl: '.swiper-prev' }}
                  modules={[Navigation, Autoplay]}
                  className="swiper-wrapper"
                  spaceBetween={25}
                  slidesPerView={3}
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
                    }
                  }
                >
                  {aucItems.slice(2, 6).map(item => {
                    return (
                      <SwiperSlide key={item.id}>
                        <AuctionItem item={item} />
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

      {/* bid modal start */}
      <BidModal/>
      {/* bid modal end */}
    </>
  );
};

export default CarouselNav;