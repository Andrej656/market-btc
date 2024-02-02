import Link from 'next/link';

import ReportModal from "../common/modals/report-modal";
import ShareModal from "../common/modals/share-modal";

const creatorData = [
  {
    id: 1,
    img: 'assets/img/creator/creator-1.jpg',
    title: '@xander_hall...',
    price: '4,940,635',
  },
  {
    id: 2,
    img: 'assets/img/creator/creator-2.jpg',
    title: 'Benjamin0025',
    price: '24,124,119',
  },
  {
    id: 3,
    img: 'assets/img/creator/creator-3.jpg',
    title: 'Ninja toy face',
    price: '12,154,468',
  },
  {
    id: 4,
    img: 'assets/img/creator/creator-4.jpg',
    title: 'Ida Chapman',
    price: '10,580,951',
  },
  {
    id: 5,
    img: 'assets/img/creator/creator-5.jpg',
    title: 'CloneX #11070',
    price: '12,154,468',
  },
  {
    id: 6,
    img: 'assets/img/creator/creator-6.jpg',
    title: 'Jazzy Panda',
    price: '24,124,119',
  },
  {
    id: 7,
    img: 'assets/img/creator/creator-7.jpg',
    title: 'Jimmy Wright',
    price: '24,124,119',
  },
  {
    id: 8,
    img: 'assets/img/creator/creator-8.jpg',
    title: 'Montiya_monk',
    price: '3,065,647',
  },
  {
    id: 9,
    img: 'assets/img/creator/creator-9.jpg',
    title: 'Douglas lyphe',
    price: '3,642,678',
  }
]

const Creators = () => {
  return (
    <>
      <section className="creator__area pt-30 pb-30">
        <div className="container">
          <div className="section__title-border mb-40">
            <div className="row">
              <div className="col-xxl-6 col-md-6">
                <div className="section__title-wrapper-3">
                  <h3 className="section__title-3">Top creator this week</h3>
                </div>
              </div>
              <div className="col-xxl-6 col-md-6">
                <div className="creator__more text-md-end">
                  <Link href={'/creator'}>
                    <a className="tp-btn-border square">View Ranking</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            {
              creatorData.map(item => (
                <div key={item.id} className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                  <div className="creator__item transition-3 d-flex align-items-center justify-content-between mb-25">
                    <div className="creator__item-inner d-flex align-items-center">
                      <div className="creator__thumb creator__active mr-20">
                        <Link href={'/profile'}>
                          <a>
                            <img src={item.img} alt="" />
                          </a>
                        </Link>
                      </div>
                      <div className="creator__content">
                        <h3 className="creator__title">
                          <Link href={'/profile'}>
                            <a>{item.title}</a>
                          </Link>
                        </h3>
                        <div className="creator__revenue  d-flex align-items-center">
                          <div className="creator__revenue-icon mr-10">
                            <i className="fa-brands fa-ethereum"></i>
                          </div>
                          <div className="creator__revenue-text">
                            <p>${item.price}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="creator__content-more">
                      <button type="button" className="dropdown-toggle nft-more-btn" data-bs-toggle="dropdown" aria-expanded="false">
                        <i className="fa-regular fa-ellipsis"></i>
                      </button>
                      <div className="nft__more-content dropdown-menu dropdown-menu-end">
                        <ul>
                          <li>
                            <button type="button" data-bs-toggle="modal" data-bs-target="#sharemodal">Share</button>
                          </li>
                          <li>
                            <button type="button" data-bs-toggle="modal" data-bs-target="#reportmodal">Report</button>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            }

          </div>
        </div>
      </section>

      {/* share modal */}
      <ShareModal />
      {/* report modal */}
      <ReportModal />
    </>
  );
};

export default Creators;