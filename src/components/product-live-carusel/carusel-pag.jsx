import { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import dynamic from 'next/dynamic';

import products from '../../data/products';
import BidModal from '../common/modals/bid-modal';
import AuctionItem from '../common/auc-item';

const CarouselPagination = () => {
  const [aucItems, setAucItems] = useState(products.filter(item => item.auc_img));
  return (
    <>
      <section className="auction__area pt-105 pb-50">
        <div className="container">
          <div className="auction__border mb-40">
            <div className="row">
              <div className="col-xxl-12">
                <div className="section__title-wrapper-2 mr-15">
                  <h3 className="section__title-2">Product Live Carousel with dots</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xxl-12">
              <div className="auction__slider auction__slider-2 auction__slider-active-2">

                <Swiper
                  modules={[Autoplay, Pagination]}
                  pagination={{ clickable: true, el: '.slider-pagination-4' }}
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
                  {aucItems.slice(0,5).map(item => {
                    return (
                      <SwiperSlide key={item.id}>
                        <AuctionItem item={item} />
                      </SwiperSlide>
                    )
                  })
                  }
                </Swiper>

                <div className="slider-dot slider-dot-3 mt-40">
                  <div className="slider-pagination-4 d-flex align-items-center justify-content-center"></div>
                </div>


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

export default CarouselPagination;