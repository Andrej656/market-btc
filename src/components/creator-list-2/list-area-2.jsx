import Link from 'next/link';

import ReportModal from "../common/modals/report-modal";
import ShareModal from "../common/modals/share-modal";

const collectionListData = [
  {
    id: 1,
    img: 'assets/img/collection/2/user/user-1.jpg',
    name: '@xander_hall...',
    revenue: '4,940,635',
  },
  {
    id: 2,
    img: 'assets/img/collection/2/user/user-2.jpg',
    name: 'Crypt0cutie.',
    revenue: '24,124,119',
  },
  {
    id: 3,
    img: 'assets/img/collection/2/user/user-3.jpg',
    name: 'Jazzy Panda.',
    revenue: '12,154,468',
  },
  {
    id: 4,
    img: 'assets/img/collection/2/user/user-4.jpg',
    name: 'Montiya_monk',
    revenue: '10,580,951',
  },
  {
    id: 5,
    img: 'assets/img/collection/2/user/user-5.jpg',
    name: 'Douglas lyphe',
    revenue: '12,154,468',
  },
  {
    id: 6,
    img: 'assets/img/collection/2/user/user-6.jpg',
    name: 'Ninja Toy Face',
    revenue: '24,124,119',
  },
  {
    id: 7,
    img: 'assets/img/collection/2/user/user-7.jpg',
    name: 'Benjamin0025',
    revenue: '25,124,119',
  },
  {
    id: 8,
    img: 'assets/img/collection/2/user/user-8.jpg',
    name: 'Shahnewaz',
    revenue: '3,065,647',
  },
  {
    id: 9,
    img: 'assets/img/collection/2/user/user-9.jpg',
    name: 'Ida Chapman',
    revenue: '3,642,678',
  }
]

const ListAreaTwo = () => {
  return (
    <>
      <section className="creator__list pt-120 pb-120 p-relative z-index-1">
        <div className="container">
          <div className="row">
            {collectionListData.map(item => (
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
                          <a>{item.name}</a>
                        </Link>
                      </h3>
                      <div className="creator__revenue  d-flex align-items-center">
                        <div className="creator__revenue-icon mr-10">
                          <i className="fa-brands fa-ethereum"></i>
                        </div>
                        <div className="creator__revenue-text">
                          <p>${item.revenue}</p>
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
            ))}

            <div className="col-xxl-12">
              <div className="nft__more text-center mt-20">
                <Link href={'/shop'}>
                  <a className="tp-load-more"><i className="fa-light fa-arrow-rotate-right"></i>View all Creators</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* share modal  */}
      <ShareModal />
      {/* report modal */}
      <ReportModal />
    </>
  );
};

export default ListAreaTwo;