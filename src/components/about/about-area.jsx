
const about_thumb = [
  {
    id:1,
    col:'col-xxl-6 col-xl-6 col-lg-6 col-md-6',
    img:'assets/img/about/about-2.jpg',
  },
  {
    id:2,
    col:'col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-6',
    img:'assets/img/about/about-3.jpg',
  },
  {
    id:3,
    col:'col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-6',
    img:'assets/img/about/about-4.jpg',
  },
]

const about_thumb_2 = [
  {
    id:1,
    col:'col-xxl-4 col-xl-4 col-lg-4',
    img:'assets/img/about/about-5.jpg',
  },
  {
    id:2,
    col:'col-xxl-5 col-xl-5 col-lg-5 col-md-6 col-sm-6',
    img:'assets/img/about/about-6.jpg',
  },
  {
    id:3,
    col:'col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6',
    img:'assets/img/about/about-7.jpg',
  },
]

const AboutArea = () => {
  return (
    <>
      <section className="about__area p-relative z-index-2">
        <div className="about__shape">
          <img className="about__shape-1" src="assets/img/about/shape/about-shape-1.png" alt="" />
          <img className="about__shape-2" src="assets/img/about/shape/about-shape-2.png" alt="" />
          <img className="about__shape-3" src="assets/img/about/shape/about-shape-3.png" alt="" />
          <img className="about__shape-4" src="assets/img/about/shape/about-shape-4.png" alt="" />
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xxl-10 col-md-10">
              <div className="about__wrapper">
                <div className="about__content">
                  <div className="about__title-wrapper text-center mb-60">
                    <span className="about__title-pre">About Foundation</span>
                    <h3 className="about__title">We do not create the future. We explore it.</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xxl-3 col-xl-3 col-lg-4">
              <div className="about__thumb-wrapper">
                <div className="about__thumb w-img">
                  <img src="assets/img/about/about-1.jpg" alt="" />
                </div>
              </div>
            </div>
            <div className="col-xxl-9 col-xl-9 col-lg-8">
              <div className="row align-items-end">
                {about_thumb.map(item => (
                <div key={item.id} className={item.col}>
                  <div className="about__thumb-wrapper">
                    <div className="about__thumb w-img">
                      <img src={item.img} alt="" />
                    </div>
                  </div>
                </div>
                ))}
              </div>
              <div className="row">
                
              {about_thumb_2.map(item => (
                <div key={item.id} className={item.col}>
                  <div className="about__thumb-wrapper">
                    <div className="about__thumb w-img">
                      <img src={item.img} alt="" />
                    </div>
                  </div>
                </div>
                ))}

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutArea;