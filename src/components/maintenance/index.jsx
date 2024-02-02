import React, { useEffect, useState } from 'react';
import Time from '../../utility/time';

const Index = () => {

  return (
    <>
      <div className="coming__soon coming__soon-2 d-flex align-items-center">
        <div className="row align-items-center">
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
            <div className="coming__wrapper">
              <div className="coming__content">
                <div className="logo mb-25">
                  <img src="assets/img/logo/logo.png" alt="" />
                </div>
                <h3 className="coming__title">Website Under Construction</h3>
                <p>We will be back soon. Stay tuned</p>
                <div className="coming__countdown ">
                  <div className="coming__countdown-inner d-flex align-items-center" data-countdown="2024/01/01">
                    <div className="cdown day">
                      <span className="time-count">{Time('2023-12-22').days}</span>
                      <p>Days</p>
                    </div>
                    <div className="cdown hour">
                      <span className="time-count">{Time('2023-12-22').hours}</span>
                      <p>Hrs</p>
                    </div>

                    <div className="cdown minutes">
                      <span className="time-count">{Time('2023-12-22').minutes}</span>
                      <p>Min</p>
                    </div>
                    <div className="cdown minutes">
                      <span className="time-count" suppressHydrationWarning>{Time('2023-12-22').seconds}</span>
                      <p>Min</p>
                    </div>
                  </div>
                </div>

                <div className="coming__subscribe">
                  <form action="#">
                    <div className="coming__subscribe-input d-sm-flex align-items-center">
                      <input type="email" placeholder="Enter your email" />
                      <button type="button" className="tp-btn-3">Subscribe</button>
                    </div>
                  </form>
                </div>
                <div className="coming__social">
                  <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                  <a href="#"><i className="fa-brands fa-twitter"></i></a>
                  <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 d-none d-md-block">
            <div className="coming__thumb w-img">
              <img src="assets/img/maintainance/maintainance.png" alt="" />
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default Index;