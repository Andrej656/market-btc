import React from 'react';

const CtaArea = () => {
  return (
    <>
      <section className="cta__area pt-45 pb-30">
        <div className="container tp-container">
          <div className="row gx-3">
            <div className="col-xxl-5 col-xl-5">
              <div className="subscribe__wrapper p-relative mr-40">
                <div className="subscribe__inner theme-bg-dark p-relative ">
                  <div className="subscribe__shape">
                    <img className="subscribe__shape-1" src="assets/img/cta/cta-shape-1.png" alt="" />
                  </div>
                  <h3>Get the latest Bitakon updates</h3>
                  <form action="#">
                    <div className="subscribe__input-wrapper p-relative">
                      <div className="subscribe__input">
                        <input type="email" placeholder="Your e-mail" />
                        <i className="fa-light fa-envelopes"></i>
                      </div>
                      <button className="subscribe__input-btn" type="button">Subscribe</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-xxl-7 col-xl-7">
              <div className="app__wrapper p-relative ">
                <div className="app__inner theme-bg-dark p-relative ">
                  <div className="app__content d-sm-flex align-items-center">
                    <div className="app__qr mr-60">
                      <a href="#">
                        <img src="assets/img/cta/qrcode.png" alt="" />
                      </a>
                    </div>
                    <div className="app__info">
                      <h3>Download the Bitakon app to Explore <br /> Any NFTs</h3>

                      <div className="app__download d-sm-flex align-items-center">
                        <a href="#">
                          <div className="app__download-item d-flex align-items-center transition-3">
                            <div className="app__download-icon mr-5">
                              <i className="fa-brands fa-google-play"></i>
                            </div>
                            <div className="app__download-text">
                              <h5>Download from</h5>
                              <p>Google play</p>
                            </div>
                          </div>
                        </a>
                        <a href="#">
                          <div className="app__download-item active d-flex align-items-center transition-3">
                            <div className="app__download-icon mr-5">
                              <i className="fa-brands fa-android"></i>
                            </div>
                            <div className="app__download-text">
                              <h5>Download from</h5>
                              <p>Android</p>
                            </div>
                          </div>
                        </a>
                        <a href="#">
                          <div className="app__download-item d-flex align-items-center transition-3">
                            <div className="app__download-icon mr-5">
                              <i className="fa-brands fa-apple"></i>
                            </div>
                            <div className="app__download-text">
                              <h5>Download from</h5>
                              <p>App store</p>
                            </div>
                          </div>
                        </a>
                      </div>
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

export default CtaArea;