import { Swiper, SwiperSlide } from "swiper/react";
import Link from 'next/link';
import { Navigation, EffectFade, Autoplay } from "swiper";
import BidModal from "../common/modals/bid-modal";
import { useEffect, useState } from "react";

const HeroArea = () => {
  const [swiperLoop,setSwiperLoop] = useState(false);
  useEffect(() => setSwiperLoop(true),[])
  const sliderData = [
    {
      id: 1,
      purchase_thumb: 'assets/img/slider/2/user/user-1.jpg',
      purchase_content: <><p>Milford... purchased <span className="purchase-notification">Ruüd</span> at <span className="purchase-notification">1.2 ETH</span> <span className="purchase-time">1 mins ago</span> </p></>,
      title: <>Create, <span>Explore</span> & Collect digital Art and <span className="has-shape">NFTs
        <img className="slider-title-shape" src="assets/img/icon/slider-stoke-shape.svg" alt="" /> </span></>,
      subtitle: 'If you are an artist and want to be a successfull artist then learn to covernt your art into NFT art',
      btn_1_text: 'View Market',
      btn_1_url: '/shop',
      btn_2_text: 'Create NFT',
      btn_2_url: '/create-single',
      slider_thumb: 'assets/img/slider/2/slider-1.jpg',
      slider__bid_top: 'Hottest Auction',
      slider__bid_title: 'Silver coin_3d print',
      slider__bid_popularity: '24',
      slider__bid_user: 'assets/img/slider/2/user/user-1.jpg',
      slider__bid_user_name: 'Ruüd Driver',
      eth: 4.17,
      dollar: 746.634,
    },
    {
      id: 2,
      purchase_thumb: 'assets/img/slider/2/user/user-1.jpg',
      purchase_content: <><p>Milford... purchased <span className="purchase-notification">Ruüd</span> at <span className="purchase-notification">1.2 ETH</span> <span className="purchase-time">1 mins ago</span> </p></>,
      title: <>Create, <span>Explore</span> & Collect digital Art and <span className="has-shape">NFTs
        <img className="slider-title-shape" src="assets/img/icon/slider-stoke-shape.svg" alt="" /> </span></>,
      subtitle: 'If you are an artist and want to be a successfull artist then learn to covernt your art into NFT art',
      btn_1_text: 'View Market',
      btn_1_url: '/shop',
      btn_2_text: 'Create NFT',
      btn_2_url: '/create-single',
      slider_thumb: 'assets/img/slider/2/slider-2.jpg',
      slider__bid_top: 'Hottest Auction',
      slider__bid_title: 'Silver coin_3d print',
      slider__bid_popularity: '18',
      slider__bid_user: 'assets/img/slider/2/user/user-1.jpg',
      slider__bid_user_name: 'Ruüd Driver',
      eth: 5.17,
      dollar: 746.634,
    },
  ]
  return (
    <>
      <section className="slider__area pb-70 p-relative fix">
        <div className="slider__active-2 slider__bid-area">
          <Swiper
            navigation={{ nextEl: '.swiper-next', prevEl: '.swiper-prev' }}
            modules={[Navigation, Autoplay, EffectFade]}
            className="swiper-wrapper"
            effect="fade"
            spaceBetween={0}
            slidesPerView={1}
            loop={swiperLoop}
            autoplay={{ delay: 6000 }}
          >
            {sliderData.map(item => {
              const { purchase_content, title, subtitle, btn_1_text, btn_1_url, btn_2_text, btn_2_url, slider_thumb, slider__bid_top, slider__bid_title, slider__bid_user_name, slider__bid_user, eth, dollar, slider__bid_popularity } = item;
              return (
                <SwiperSlide key={item.id}>
                  <div className="single-slider p-relative z-index-1 pt-40 slider__height-2 d-flex align-items-center">
                    <div className="slider__shape">
                      <img className="slider__shape-1" src="assets/img/slider/2/slider-shape-1.png" alt="" />
                      <img className="slider__shape-2" src="assets/img/slider/2/slider-shape-2.png" alt="" />
                    </div>
                    <div className="container">
                      <div className="row mt-100">
                        <div className="col-xxl-6 col-xl-6 col-lg-6">
                          <div className="slider__content-2">
                            <div className="slider__purchase ">
                              <div className="slider__purchase-thumb">
                                <img src="assets/img/slider/2/user/user-1.jpg" alt="" />
                              </div>
                              <div className="slider__purchase-content">
                                {purchase_content}
                              </div>
                            </div>
                            <h3 className="slider__title-2">
                              {title}
                            </h3>
                            <p>{subtitle}</p>

                            <div className="slider__btn-2 d-sm-flex align-items-center">
                              <Link href={`${btn_1_url}`}>
                                <a className="tp-btn-gradient active mr-15  mb-15">{btn_1_text}</a>
                              </Link>
                              <Link href={`${btn_2_url}`}>
                                <a className="tp-btn-border mb-15">{btn_2_text}</a>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-6">
                          <div className="slider__bid-item pl-70">
                            <div className="slider__bid-item-bg" ></div>
                            <img className="slider__shape-3" src="assets/img/slider/2/slider-shape-3.png" alt="" />
                            <div className="slider__bid-thumb">
                              <img src={slider_thumb} alt="" />
                            </div>
                            <div className="slider__bid-content">
                              <div className="slider__bid-top">
                                <h3>{slider__bid_top}</h3>
                              </div>
                              <div className="slider__bid-info">
                                <h3 className="slider__bid-title">
                                  <a href="#">{slider__bid_title}</a>
                                </h3>
                                <div className="slider__bid-popularity">
                                  <a href="#"><i className="fa-solid fa-heart"></i> {slider__bid_popularity}</a>
                                </div>
                                <div className="slider__bid-collection">
                                  <p>Collection</p>
                                  <div className="slider__bid-user d-flex align-items-center">
                                    <div className="slider__bid-user-thumb mr-10">
                                      <img src={slider__bid_user} alt="" />
                                    </div>
                                    <div className="slider__bid-user-content">
                                      <h3>{slider__bid_user_name}</h3>
                                    </div>
                                  </div>
                                </div>
                                <div className="slider__bid-highest">
                                  <p>Highest bid</p>
                                  <h4><span>{eth}</span> with <span>${dollar}</span></h4>
                                </div>
                              </div>
                              <div className="slider__bid-btn">
                                <button type="button" className="slider-bid-btn" data-bs-toggle="modal" data-bs-target="#bidmodal">
                                  <img src="assets/img/icon/activity/activity-bid.svg" alt="" /> Place a bid <i className="fa-regular fa-arrow-right"></i></button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              )
            })
            }
          </Swiper>

          <div>
            <button type="button" className="swiper-prev me-2 swiper-arrow">
              <i className="fa-regular fa-angle-left"></i>
            </button>
            <button type="button" className="swiper-next swiper-arrow">
              <i className="fa-regular fa-angle-right"></i>
            </button>
          </div>
        </div>
      </section>

      {/* BidModal start */}
      <BidModal />
      {/* BidModal end */}
    </>
  );
};

export default HeroArea;