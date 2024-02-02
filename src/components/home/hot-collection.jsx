import Link from 'next/link';

import collections from '../../data/collections';

const HotCollection = () => {


  return (
    <>
      <section className="collection__area pt-125">
        <div className="container tp-container">
          <div className="row align-items-end">
            <div className="col-xxl-6">
              <div className="section__title-wrapper mb-40">
                <h4 className="section__title-stroke">Collections</h4>
                <h3 className="section__title">Hot collections <span>
                  <img src="/assets/img/icon/blast.png" alt="" /></span>
                </h3>
              </div>
            </div>
            <div className="col-xxl-6">
              <div className="collection__more text-md-end mb-40">
                <Link href={'/collection'}>
                  <a className="tp-btn-border">View All</a>
                </Link>
              </div>
            </div>
          </div>
          <div className="row">
            {
              collections.slice(0, 3).map((item, index) => (
                <div key={index} className="col-xxl-4 col-lg-4 col-md-6">
                  <div className="collection__item text-center mb-30 theme-bg-dark">
                    <div className="collection__item-inner">
                      <div className="collection__thumb-wrapper">
                        <div className="row gx-2">
                          <div className="col-xxl-4 col-sm-4 col-4">
                            <div className="collection__thumb mb-10 m-img">
                              <Link href={'/collection'}>
                                <a>
                                  <img src={item.smImg_1} alt="" />
                                </a>
                              </Link>
                            </div>
                          </div>
                          <div className="col-xxl-4 col-sm-4 col-4">
                            <div className="collection__thumb mb-10 m-img">
                              <Link href={'/collection'}>
                                <a>
                                  <img src={item.smImg_2} alt="" />
                                </a>
                              </Link>
                            </div>
                          </div>
                          <div className="col-xxl-4 col-sm-4 col-4">
                            <div className="collection__thumb mb-10 m-img">
                              <Link href={'/collection'}>
                                <a>
                                  <img src={item.smImg_3} alt="" />
                                </a>
                              </Link>
                            </div>
                          </div>
                          <div className="col-xxl-12">
                            <div className="collection__thumb mb-10 m-img">
                              <Link href={'/collection'}>
                                <a>
                                  <img src={item.bigImg} alt="" />
                                </a>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="collection__content">
                        <div className="collection__profile">
                          <Link href={'/collection'}>
                            <a>
                              <img src={item.user} alt="" />
                            </a>
                          </Link>
                        </div>
                        <h3 className="collection__title">
                          <Link href={'/collection'}>
                            <a>{item.title}</a>
                          </Link>
                        </h3>
                        <p>{item.resource} Resources</p>

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

export default HotCollection;