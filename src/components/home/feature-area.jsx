const featureData = [
  {
    bgColor: '',
    icon_dark: 'assets/img/icon/features/features-icon-1.png',
    icon_light: 'assets/img/icon/features/features-icon-1-light.png',
    title: "Grow your digital art Collection",
    subtitle: 'Add new, trending and rare artwork to your collection.',
  },
  {
    bgColor: 'yellow-bg',
    icon_dark: 'assets/img/icon/features/features-icon-2.png',
    icon_light: 'assets/img/icon/features/features-icon-2-light.png',
    title: "Earn money dy trading NFTs",
    subtitle: 'Get paid by selling NFTs with secured payment methods.',
  },
  {
    bgColor: 'green-bg',
    icon_dark: 'assets/img/icon/features/features-icon-3.png',
    icon_light: 'assets/img/icon/features/features-icon-3-light.png',
    title: <>Discover <br /> Top artists & Creators</>,
    subtitle: 'Explore beautiful digital art by talented artists from around the world.',
  },
  {
    bgColor: 'green-bg',
    icon_dark: 'assets/img/icon/features/features-icon-4.png',
    icon_light: 'assets/img/icon/features/features-icon-4-light.png',
    title: <>Buy and sell your <br /> NFTs</>,
    subtitle: 'Easily buy and sell your NFTs in the largest marketplace.',
  },
]

const FeatureArea = () => {
  return (
    <>
      <section className="features__area pt-120 pb-70">
        <div className="container tp-container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="section__title-wrapper text-center mb-60">
                <h4 className="section__title-stroke center">Create and sell your NFTs</h4>
                <h3 className="section__title">Create and sell your NFTs</h3>
              </div>
            </div>
          </div>
          <div className="row">
            {
              featureData.map((item,index) => (
                <div key={index} className="col-xxl-3 col-lg-4 col-md-6">
                  <div className={`features__item mb-30 theme-bg-dark ${item.bgColor}`}>
                    <div className="features__item-inner">
                      <div className="features__icon">
                        <img className="dark" src={`${item.icon_dark}`} alt="" />
                        <img className="light" src={`${item.icon_light}`} alt="" />
                      </div>
                      <div className="features__content">
                        <h4 className="features__title">
                          {item.title}
                        </h4>
                        <p>{item.subtitle}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            }

          </div>
        </div>
      </section>
    </>
  );
};

export default FeatureArea;