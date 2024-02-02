import React, { useState } from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";

import BidModal from '../common/modals/bid-modal';
import products from '../../data/products';

const BidArea = () => {
  const [hotItems, setHotItems] = useState(products.filter(item => item.hot));

  return (
    <>
      <section className="bid__area pt-60 pb-130 fix">
        <div className="container tp-container">
          <div className="row">
            <div className="col-xxl-6 col-sm-6">
              <div className="section__title-wrapper mb-40">
                <h4 className="section__title-stroke">Hot bids</h4>
                <h3 className="section__title">Hot bids <span>
                  <img src="assets/img/icon/fire.png" alt="" /></span>
                </h3>
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
                        <div className="bid__item theme-bg-dark">
                          <div className="bid__item-wrapper">
                            <div className="bid__top d-flex align-items-center justify-content-between mb-20">
                              <div className="bid__user">
                                <ul>
                                  <li>
                                    <Link href={'/profile'}>
                                      <a>
                                        <img src={item.user1} alt="" />
                                      </a>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href={'/profile'}>
                                      <a>
                                        <img src={item.user2} alt="" />
                                      </a>
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                              <div className="bid__popularity">
                                <Link href={'/profile'}>
                                  <a>
                                    <i className="icon_heart"></i>
                                    {item.wishlist}k
                                  </a>
                                </Link>
                              </div>
                            </div>
                            <div className="bid__thumb m-img mb-20">
                              <Link href={`/product-details/${item.id}`}>
                                <a>
                                  <img src={item.smImg} alt="" />
                                </a>
                              </Link>
                            </div>
                            <div className="bid__content">
                              <h3 className="bid__title">
                                <Link href={`/product-details/${item.id}`}>
                                  <a>{item.title}</a>
                                </Link>
                              </h3>
                              <div className="bid__info d-flex align-items-center justify-content-between">
                                <div className="bid__highest">
                                  <p>Heights bid <span>{item.eth} ETH</span></p>
                                </div>
                                <div className="bid__stock">
                                  <p>{item.stock} in stock</p>
                                </div>
                              </div>
                            </div>
                            <div className="bid__bottom d-flex align-items-center justify-content-between">
                              <div className="bid__btn-wrapper">
                                <Link href={`/product-details/${item.id}`}>
                                  <a className="bid__btn bid__btn-border">Bid History</a>
                                </Link>
                              </div>
                              <div className="bid__btn-wrapper">
                                <button type="button" className="bid__btn" data-bs-toggle="modal" data-bs-target="#bidmodal">Place a bid</button>
                              </div>
                            </div>
                          </div>
                        </div>
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
      <BidModal />
      {/* bid modal end */}
    </>
  );
};

export default BidArea;