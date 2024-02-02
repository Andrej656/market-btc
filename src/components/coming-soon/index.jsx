import Time from "../../utility/time";

const index = () => {
  return (
    <>
      <div className="coming__soon d-flex align-items-center">
        <div className="coming__bg include-bg" style={{ background: 'url(assets/img/coming/coming-soon-bg.jpg)', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }}></div>
        <div className="coming__wrapper">
          <div className="coming__content">
            <div className="logo mb-25">
              <img src="assets/img/logo/logo.png" alt="" />
            </div>
            <h3 className="coming__title">Comming Soon</h3>
            <p>We’ll be here soon with our new<br /> awesome site, subscribe to be notified.</p>
            <div className="coming__countdown ">
              <div className="coming__countdown-inner d-flex align-items-center" data-countdown="2024/01/01">
                <div className="cdown day">
                  <span className="time-count">{Time('2023-12-27 00:00:00').days}</span>
                  <p>Days</p>
                </div>
                <div className="cdown hour">
                  <span className="time-count">{Time('2023-12-27 00:00:00').hours}</span>
                  <p>Hrs</p>
                </div>

                <div className="cdown minutes">
                  <span className="time-count">{Time('2023-12-27 00:00:00').minutes}</span>
                  <p>Min</p>
                </div>

                <div className="cdown second"> <div>
                  <span className="time-count" suppressHydrationWarning>{Time('2023-12-27 00:00:00').seconds}</span>
                  <p>Sec</p></div>
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
    </>
  );
};

export default index;