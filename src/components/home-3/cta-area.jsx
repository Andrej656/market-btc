import Link from 'next/link';

const CtaArea = () => {
  return (
    <>
      <section className="cta__area pt-40 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-xxl-7 col-xl-7 col-lg-6">
              <div className="cta__box">
                <div className="cta__box-wrapper p-relative fix">
                  <div className="cta__box-bg" style={{ background: `url(assets/img/cta/3/cta-bg.jpg)`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                  <div className="cta__box-inner">
                    <div className="cta__box-content text-center">
                      <span>What are NFTs?</span>
                      <h3 className="cta__box-title">The future of the digital Economy</h3>
                      <div className="cta__box-btn">
                        <Link href={'/contact'}>
                          <a className="tp-btn-square">{`Let's Chat`}</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-5 col-xl-5 col-lg-6">
              <div className="community__wrapper text-center">
                <div className="community__content">
                  <h3>Join our <br /> Amazing community</h3>
                  <p>Meet the known origin team, artists and collectors for platform updates.</p>
                </div>
                <div className="community__social">
                  <SocialBrand url="/home-3" iconName="fa-twitter" />
                  <SocialBrand url="/home-3" iconName="fa-instagram" />
                  <SocialBrand url="/home-3" iconName="fa-discord" />
                  <SocialBrand url="/home-3" iconName="fa-github" />
                  <SocialBrand url="/home-3" iconName="fa-youtube" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const SocialBrand = ({ url, iconName }) => {
  return (
    <Link href={`${url}`}>
      <a><i className={`fa-brands ${iconName}`}></i></a>
    </Link>
  )
}

export default CtaArea;