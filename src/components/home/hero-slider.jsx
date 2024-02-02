import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import Link from 'next/link';

const sliderData = [
  {
    id: 1,
    bigImg: 'assets/img/slider/slider-big-1.jpg',
    bigImgTitle: 'Get loud for boys',
    bigImgSubtitle: 'PFP by Elizarevfx',
    smImages: [
      {
        id: 1,
        smImg: 'assets/img/slider/slider-sm-1.jpg',
        smImgTitle: 'Get loud for boys',
        smImgSubtitle: 'PFP by Elizarevfx',
      },
      {
        id: 2,
        smImg: 'assets/img/slider/slider-sm-2.jpg',
        smImgTitle: 'The Dark Jaegers',
        smImgSubtitle: 'The Dark Jaegers',
      },
      {
        id: 3,
        smImg: 'assets/img/slider/slider-sm-3.jpg',
        smImgTitle: 'SitDown LOL',
        smImgSubtitle: 'Super Rare',
      },
      {
        id: 4,
        smImg: 'assets/img/slider/slider-sm-4.jpg',
        smImgTitle: 'The Dark Jaegers',
        smImgSubtitle: 'Monica Lucas',
      },
      {
        id: 5,
        smImg: 'assets/img/slider/slider-sm-5.jpg',
        smImgTitle: 'Ave avatars 1.0',
        smImgSubtitle: 'Joss Sticks',
      },
      {
        id: 6,
        smImg: 'assets/img/slider/slider-sm-6.jpg',
        smImgTitle: 'Paper buddha ꜩ',
        smImgSubtitle: 'NFT Paris',
      },
    ]

  },
  {
    id: 2,
    bigImg: 'assets/img/slider/slider-big-2.jpg',
    bigImgTitle: 'Get loud for boys',
    bigImgSubtitle: 'PFP by Elizarevfx',
    smImages: [
      {
        id: 1,
        smImg: 'assets/img/slider/slider-sm-1.jpg',
        smImgTitle: 'Get loud for boys',
        smImgSubtitle: 'PFP by Elizarevfx',
      },
      {
        id: 2,
        smImg: 'assets/img/slider/slider-sm-2.jpg',
        smImgTitle: 'The Dark Jaegers',
        smImgSubtitle: 'The Dark Jaegers',
      },
      {
        id: 3,
        smImg: 'assets/img/slider/slider-sm-3.jpg',
        smImgTitle: 'SitDown LOL',
        smImgSubtitle: 'Super Rare',
      },
      {
        id: 4,
        smImg: 'assets/img/slider/slider-sm-4.jpg',
        smImgTitle: 'The Dark Jaegers',
        smImgSubtitle: 'Monica Lucas',
      },
      {
        id: 5,
        smImg: 'assets/img/slider/slider-sm-5.jpg',
        smImgTitle: 'Ave avatars 1.0',
        smImgSubtitle: 'Joss Sticks',
      },
      {
        id: 6,
        smImg: 'assets/img/slider/slider-sm-6.jpg',
        smImgTitle: 'Paper buddha ꜩ',
        smImgSubtitle: 'NFT Paris',
      },
    ]

  },
]

const HeroSlider = () => {
  return (
    <>
      <section className="slider__area slider__bg pt-100 pb-70">
        <div className="container tp-container p-relative">
          <div className="slider__active swiper-container">

            <Swiper
              navigation={{ nextEl: '.slider-button-next', prevEl: '.slider-button-prev' }}
              modules={[Navigation, Autoplay]}
              className="swiper-wrapper"
              spaceBetween={25}
              slidesPerView={1}
              loop
              autoplay={{ delay: 6000 }}
            >
              {sliderData.map(item => {
                return (
                  <SwiperSlide key={item.id}>
                    <div className="slider__item-inner swiper-slide">
                      <div className="row">
                        <div className="col-xxl-5 col-xl-5">
                          <div className="slider__item p-relative fix mb-30">
                            <div className="slider__thumb include-bg" style={{ backgroundImage: `url(${item.bigImg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}></div>
                            <div className="slider__content">
                              <h3 className="slider__title">
                                <Link href={'/shop'}>
                                  <a>Get loud for boys</a>
                                </Link>
                              </h3>
                              <span>PFP by Elizarevfx</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-xxl-7 col-xl-7">
                          <div className="row">
                            {
                              item.smImages.map((item, index) => (
                                <div key={index} className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                  <div className="slider__item-sm p-relative fix mb-20">
                                    <div className="slider__thumb include-bg" style={{
                                      backgroundImage: `url(${item.smImg})`, backgroundSize: 'cover', backgroundPosition: 'center',
                                      backgroundRepeat: 'no-repeat'
                                    }}></div>
                                    <div className="slider__content-sm">
                                      <h3 className="slider__title-sm">
                                        <Link href={'/shop'}>
                                          <a>{item.smImgTitle}</a>
                                        </Link>
                                      </h3>
                                      <span>{item.smImgSubtitle}</span>
                                    </div>
                                  </div>
                                </div>
                              ))
                            }

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
          <div className="slider__nav">
            <button className="slider-button-next"><i className="fa-light fa-angle-right"></i></button>
            <button className="slider-button-prev"><i className="fa-light fa-angle-left"></i></button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSlider;