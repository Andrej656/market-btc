import Link from 'next/link';

const JoinArea = () => {
  return (
    <>
      <section className="join__area pb-90">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="section__title-wrapper text-center mb-55">
                <h3 className="section__title-4 section__title-5">Interested in joining us?</h3>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6">
              <div className="join__item text-center mb-30">
                <div className="join__thumb mb-25">
                  <img src="/assets/img/icon/join/join-1.png" alt="" />
                </div>
                <div className="join__content">
                  <h3 className="join__title">Join our <span>Community</span></h3>

                  <div className="join__social">
                    <a href="#"><i className="fa-brands fa-twitter"></i></a>
                    <a href="#"><i className="fa-brands fa-instagram"></i></a>
                    <a href="#"><i className="fa-brands fa-discord"></i></a>
                    <a href="#"><i className="fa-brands fa-github"></i></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6">
              <div className="join__item text-center mb-30">
                <div className="join__thumb mb-25">
                  <img src="assets/img/icon/join/join-2.png" alt="" />
                </div>
                <div className="join__content">
                  <h3 className="join__title">Become a  <span>Creator</span></h3>

                  <div className="join__btn">
                    <Link href="/register">
                     <a className="tp-btn-4">sign up</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6">
              <div className="join__item text-center mb-30">
                <div className="join__thumb mb-25">
                  <img src="assets/img/icon/join/join-3.png" alt="" />
                </div>
                <div className="join__content">
                  <h3 className="join__title">Reach out to  <span>our team</span></h3>

                  <div className="join__btn-gradient">
                    <a href="mailto:team@Bitakon.com" className="tp-btn-4">team@Bitakon.com</a>
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

export default JoinArea;