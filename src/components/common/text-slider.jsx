import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { useEffect, useState } from "react";

const slider_text = [
  { id: 1, text: 'Discover  &  Callect  Extraordinary  Digital  Art  and  Rare   NFT’s' },
  { id: 2, text: 'Discover  &  Callect  Extraordinary  Digital  Art  and  Rare   NFT’s' },
  { id: 3, text: 'Discover  &  Callect  Extraordinary  Digital  Art  and  Rare   NFT’s' },
  { id: 4, text: 'Discover  &  Callect  Extraordinary  Digital  Art  and  Rare   NFT’s' },
]

const TextSlider = () => {
  const [swiperLoop,setSwiperLoop] = useState(false);
  useEffect(() => setSwiperLoop(true),[])
  return (
    <>
      <div className="marque__area">
        <div className="container">
          <div className="marque__inner p-relative">
            <div className="row">
              <div className="col-xxl-12">
                <div className="marque__wrapper">
                  <div className="marque__slider">

                    <Swiper
                      className="swiper-wrapper"
                      modules={[Autoplay]}
                      loop={swiperLoop}
                      freeMode={true}
                      autoplay={{delay:1}}
                      centeredSlides={true}
                      speed={5000}
                      shortSwipes={false}
                      longSwipes={false}
                      allowTouchMove={false}
                      grabCursor={false}
                      breakpoints={
                        {
                          '0': {
                            slidesPerView: 1,
                            spaceBetween: 30
                          },
                          '576': {
                            slidesPerView: 2,
                            spaceBetween: 30
                          },
                          '768': {
                            slidesPerView: 3,
                            spaceBetween: 30
                          },
                          '991': {
                            slidesPerView: 4,
                            spaceBetween: 30
                          },
                          '1200': {
                            slidesPerView: 4,
                            spaceBetween: 30
                          }
                        }
                      }
                    >
                      {slider_text.map(item => {
                        return (
                          <SwiperSlide key={item.id}>
                            <div className="marque__item ">
                              <p>{item.text}</p>
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
          </div>
        </div>
      </div>
    </>
  );
};

export default TextSlider;