import { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper";
import dynamic from 'next/dynamic';

import products from '../../data/products';
import BidModal from '../common/modals/bid-modal';
import AuctionItem from '../common/auc-item';

const CarouselPagNav = () => {
  const [aucItems, setAucItems] = useState(products.filter(item => item.auc_img));
  return (
    <>
      <section className="auction__area pt-105 pb-100">
        <div className="container">
          <div className="auction__border mb-40">
            <div className="row">
              <div className="col-xxl-6 col-md-6">
                <div className="section__title-wrapper-2 mr-15">
                  <h3 className="section__title-2">Product Live Carousel</h3>
                </div>
              </div>
              <div className="col-xxl-6 col-sm-6">
                <div className="auction__nav-2 text-sm-end">
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
              <div className="auction__slider auction__slider-2 auction__slider-active-3">

                <Swiper
                  navigation={{ nextEl: '.swiper-next', prevEl: '.swiper-prev' }}
                  modules={[Navigation,Pagination, Autoplay]}
                  pagination={{ clickable: true, el: '.slider-pagination-5' }}
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
                  {aucItems.slice(1, 6).map(item => {
                    return (
                      <SwiperSlide key={item.id}>
                        <AuctionItem item={item} />
                      </SwiperSlide>
                    )
                  })
                  }
                </Swiper>

                <div className="slider-dot slider-dot-3 mt-40">
                  <div className="slider-pagination-5 d-flex align-items-center justify-content-center"></div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CarouselPagNav;