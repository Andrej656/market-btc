import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import NiceSelect from '../ui/NiceSelect';

const slider_data = [
  {
    id: 1,
    thumb: 'assets/img/slider/3/slider-thumb-1.jpg',
    user_1: 'assets/img/slider/3/user/slider-user-1.png',
    user_2: 'assets/img/slider/3/user/slider-user-2.png',
    user_3: 'assets/img/slider/3/user/slider-user-3.png',
    text: 'The first-ever NFT-native music group, produced by Grammy Nominated singer/songwriter Poo Bear.',
  },
  {
    id: 2,
    thumb: 'assets/img/slider/3/slider-thumb-2.jpg',
    user_1: 'assets/img/slider/3/user/slider-user-1.png',
    user_2: 'assets/img/slider/3/user/slider-user-2.png',
    user_3: 'assets/img/slider/3/user/slider-user-3.png',
    text: 'The first-ever NFT-native music group, produced by Grammy Nominated singer/songwriter Poo Bear.',
  },
  {
    id: 3,
    thumb: 'assets/img/slider/3/slider-thumb-3.jpg',
    user_1: 'assets/img/slider/3/user/slider-user-1.png',
    user_2: 'assets/img/slider/3/user/slider-user-2.png',
    user_3: 'assets/img/slider/3/user/slider-user-3.png',
    text: 'The first-ever NFT-native music group, produced by Grammy Nominated singer/songwriter Poo Bear.',
  },
  {
    id: 4,
    thumb: 'assets/img/slider/3/slider-thumb-4.jpg',
    user_1: 'assets/img/slider/3/user/slider-user-1.png',
    user_2: 'assets/img/slider/3/user/slider-user-2.png',
    user_3: 'assets/img/slider/3/user/slider-user-3.png',
    text: 'The first-ever NFT-native music group, produced by Grammy Nominated singer/songwriter Poo Bear.',
  },
]

const HeroArea = () => {
  const selectHandler = e => {

  }
  return (
    <>
      <section className="slider__area pt-100 pb-70 p-relative slider__height-3 d-flex align-items-center">
        <div className="slider__bg-3" style={{ background: `url(assets/img/slider/3/slider-bg.png)`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }}></div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xxl-10">
              <div className="slider__content-3">
                <div className="slider__search text-center">
                  <span>Collectibles NFTs</span>
                  <h3 className="slider__title-3">Collect digital art</h3>

                  <div className="slider__search-box mb-85">
                    <form action="#">
                      <div className="slider__search-input">
                        <div className="slider__search-category d-none d-sm-flex align-items-center">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.4" d="M7.8999 9.39999C8.72833 9.39999 9.3999 8.72842 9.3999 7.89999C9.3999 7.07157 8.72833 6.39999 7.8999 6.39999C7.07148 6.39999 6.3999 7.07157 6.3999 7.89999C6.3999 8.72842 7.07148 9.39999 7.8999 9.39999Z" fill="white" />
                            <path d="M14.2998 9.39999C15.1282 9.39999 15.7998 8.72842 15.7998 7.89999C15.7998 7.07157 15.1282 6.39999 14.2998 6.39999C13.4714 6.39999 12.7998 7.07157 12.7998 7.89999C12.7998 8.72842 13.4714 9.39999 14.2998 9.39999Z" fill="white" />
                            <path d="M1.5 9.39999C2.32843 9.39999 3 8.72842 3 7.89999C3 7.07157 2.32843 6.39999 1.5 6.39999C0.671573 6.39999 0 7.07157 0 7.89999C0 8.72842 0.671573 9.39999 1.5 9.39999Z" fill="white" />
                            <path d="M7.8999 3C8.72833 3 9.3999 2.32843 9.3999 1.5C9.3999 0.671573 8.72833 0 7.8999 0C7.07148 0 6.3999 0.671573 6.3999 1.5C6.3999 2.32843 7.07148 3 7.8999 3Z" fill="white" />
                            <path d="M7.8999 15.8C8.72833 15.8 9.3999 15.1284 9.3999 14.3C9.3999 13.4716 8.72833 12.8 7.8999 12.8C7.07148 12.8 6.3999 13.4716 6.3999 14.3C6.3999 15.1284 7.07148 15.8 7.8999 15.8Z" fill="white" />
                            <path opacity="0.4" d="M14.2998 3C15.1282 3 15.7998 2.32843 15.7998 1.5C15.7998 0.671573 15.1282 0 14.2998 0C13.4714 0 12.7998 0.671573 12.7998 1.5C12.7998 2.32843 13.4714 3 14.2998 3Z" fill="white" />
                            <path opacity="0.4" d="M14.2998 15.8C15.1282 15.8 15.7998 15.1284 15.7998 14.3C15.7998 13.4716 15.1282 12.8 14.2998 12.8C13.4714 12.8 12.7998 13.4716 12.7998 14.3C12.7998 15.1284 13.4714 15.8 14.2998 15.8Z" fill="white" />
                            <path opacity="0.4" d="M1.5 3C2.32843 3 3 2.32843 3 1.5C3 0.671573 2.32843 0 1.5 0C0.671573 0 0 0.671573 0 1.5C0 2.32843 0.671573 3 1.5 3Z" fill="white" />
                            <path opacity="0.4" d="M1.5 15.8C2.32843 15.8 3 15.1284 3 14.3C3 13.4716 2.32843 12.8 1.5 12.8C0.671573 12.8 0 13.4716 0 14.3C0 15.1284 0.671573 15.8 1.5 15.8Z" fill="white" />
                          </svg>
                          <NiceSelect
                            options={[
                              { value: "Category", text: "Category" },
                              { value: "Digital Art", text: "Digital Art" },
                              { value: "Abstract Figure", text: "Abstract Figure" },
                              { value: "Dantes Inferno", text: "Dantes Inferno" },
                            ]}
                            defaultCurrent={0}
                            onChange={selectHandler}
                            name="Category"
                          />
                        </div>
                        <input type="text" placeholder="Search Artist, Artwork, Collection ..." />
                        <button type="submit"><i className="fa-regular fa-magnifying-glass"></i></button>
                      </div>
                    </form>
                  </div>

                  <div className="slider__active-3 swiper-container p-relative">
                    <div className="slider__thumb-shape-3">
                      <img src="assets/img/slider/3/slider-thumb-shape.png" alt="" />
                    </div>

                    <Swiper
                      modules={[Pagination,Autoplay]}
                      pagination={{clickable: true,el: '.slider-pagination-3'}}
                      className="swiper-wrapper"
                      spaceBetween={20}
                      slidesPerView={1}
                      loop
                      autoplay={{ delay: 6000 }}
                    >
                      {slider_data.map(item => {
                        return (
                          <SwiperSlide key={item.id}>
                            <div className="swiper-slide slider__item-3 p-relative">
                              <div className="slider__thumb-3">
                                <img src={item.thumb} alt="" />

                                <div className="slider__user-wrapper d-md-flex align-items-center justify-content-between">
                                  <div className="slider__user-thumb d-sm-flex align-items-center">
                                    <ul className="mr-20">
                                      <li>
                                        <a href="#"><img src={item.user_1} alt="" /></a>
                                      </li>
                                      <li>
                                        <a href="#"><img src={item.user_2} alt="" /></a>
                                      </li>
                                      <li>
                                        <a href="#"><img src={item.user_3} alt="" /></a>
                                      </li>
                                    </ul>
                                    <p>{item.text}</p>
                                  </div>
                                  <div className="slider__user-more">
                                    <a href="#" className="tp-btn-transparent">learn more</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </SwiperSlide>
                        )
                      })
                      }
                    </Swiper>


                    <div className="slider-dot slider-dot-3 mt-40">
                      <div className="slider-pagination-3 d-flex align-items-center justify-content-center"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroArea;