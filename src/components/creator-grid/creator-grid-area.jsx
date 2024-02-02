import Link from 'next/link';

import { creatorsData } from '../../data/creators';

const CreatorGridArea = () => {
  return (
    <>
      <section className="creator__grid pt-120 pb-120">
        <div className="container">
          <div className="row">
            {creatorsData.map((item, index) => (
              <div key={index} className="col-xxl-4">
                <div className="creator__grid-item mb-30">
                  <div className="creator__grid-bg w-img">
                    <Link href="/profile">
                      <a>
                        <img src={item.bgImg} alt="" />
                      </a>
                    </Link>
                  </div>
                  <div className="creator__grid-content text-center">
                    <div className="creator__grid-thumb">
                      <Link href="/profile">
                        <a>
                          <img src={item.creator} alt="" />
                        </a>
                      </Link>
                    </div>
                    <h3 className="creator__grid-title">
                      <Link href="/profile">
                        <a>{item.name}</a>
                      </Link>
                    </h3>
                    <div className="creator__grid-social">
                      <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                      <a href="#"><i className="fa-brands fa-twitter"></i></a>
                      <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                      <a href="#"><i className="fa-brands fa-dribbble"></i></a>
                    </div>
                    <p>{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}

            <div className="col-xxl-12">
              <div className="nft__more text-center mt-20">
                <Link href="/creator">
                  <a className="tp-load-more"><i className="fa-light fa-arrow-rotate-right"></i>View all items</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CreatorGridArea;