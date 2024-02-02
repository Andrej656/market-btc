import Link from 'next/link';

import collections from "../../data/collections";

const CollectionArea = () => {

  return (
    <>
      <section className="collection__grid pt-120 pb-120">
        <div className="container">
          <div className="row">

            {collections.map((item,index) => {
              const { smImg_1, smImg_2, smImg_3, bigImg, user, title, resource } = item;
              return (
                <div key={index} className="col-lg-4 col-md-6">
                  <div className="collection__item text-center mb-30 theme-bg-dark">
                    <div className="collection__item-inner">
                      <div className="collection__thumb-wrapper">
                        <div className="row gx-2">
                          <div className="col-xxl-4 col-sm-4 col-4">
                            <div className="collection__thumb mb-10 m-img">
                              <Link href={'/collection'}>
                                <a>
                                  <img src={smImg_1} alt="" />
                                </a>
                              </Link>
                            </div>
                          </div>
                          <div className="col-xxl-4 col-sm-4 col-4">
                            <div className="collection__thumb mb-10 m-img">
                              <Link href={'/collection'}>
                                <a>
                                  <img src={smImg_2} alt="" />
                                </a>
                              </Link>
                            </div>
                          </div>
                          <div className="col-xxl-4 col-sm-4 col-4">
                            <div className="collection__thumb mb-10 m-img">
                              <Link href={'/collection'}>
                                <a>
                                  <img src={smImg_3} alt="" />
                                </a>
                              </Link>
                            </div>
                          </div>
                          <div className="col-xxl-12">
                            <div className="collection__thumb mb-10 m-img">
                              <Link href={'/collection'}>
                                <a>
                                  <img src={bigImg} alt="" />
                                </a>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="collection__content">
                        <div className="collection__profile">
                          <Link href={'/profile'}>
                            <a>
                              <img src={user} alt="" />
                            </a>
                          </Link>
                        </div>
                        <h3 className="collection__title">
                          <Link href={'/collection'}>
                            <a>{title}</a>
                          </Link>
                        </h3>
                        <p>{resource} Resources</p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}

            <div className="col-xxl-12">
              <div className="nft__more text-center mt-20">
                <Link href={'/collection'}>
                  <a className="tp-load-more">
                    <i className="fa-light fa-arrow-rotate-right"></i>View all items</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CollectionArea;