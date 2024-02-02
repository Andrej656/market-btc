import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { useEffect, useState } from "react";

const slider_text = [
  { id: 1, text: 'Discover  &  Callect  Extraordinary  Digital  Art  and  Rare   NFT’s' },
  { id: 2, text: 'Discover  &  Callect  Extraordinary  Digital  Art  and  Rare   NFT’s' },
  { id: 3, text: 'Discover  &  Callect  Extraordinary  Digital  Art  and  Rare   NFT’s' },
  { id: 4, text: 'Discover  &  Callect  Extraordinary  Digital  Art  and  Rare   NFT’s' },
]

const AboutMarque = () => {
  const [swiperLoop,setSwiperLoop] = useState(false);
  useEffect(() => setSwiperLoop(true),[])
  return (
    <>
      <section className="about__marque">
        <div className="container-fluid p-0">
          <div className="about__marque-inner">
            <div className="row gx-0">
              <div className="col-xxl-12">
                <div className="about__marque-wrapper">
                  <div className="about__marque-slider">
                    <Swiper
                      className="swiper-wrapper"
                      modules={[Autoplay]}
                      loop={swiperLoop}
                      freeMode={true}
                      autoplay={{ delay: 1 }}
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
                        }
                      }
                    >
                      {slider_text.map(item => {
                        return (
                          <SwiperSlide key={item.id}>
                            <div className="about__marque-item ">
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
      </section>
    </>
  );
};

export default AboutMarque;