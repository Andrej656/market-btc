import Link from 'next/link';
import dynamic from 'next/dynamic';

import products from "../../data/products";
import Time from "../../utility/time";
import BidModal from "../common/modals/bid-modal";

const auctionItem = products.slice(0, 1);

const auctionSmItemData = [
  {
    id: 1,
    img: 'assets/img/auction/sm/auction-sm-1.jpg',
    title: 'Elon musk silver..',
    authorImg: 'assets/img/auction/sm/author/author-1.jpg',
    eth: 4.01,
    smShow: '12'
  },
  {
    id: 2,
    img: 'assets/img/auction/sm/auction-sm-2.jpg',
    title: 'Smoking Apes #00',
    authorImg: 'assets/img/auction/sm/author/author-2.jpg',
    eth: 1.01,
    smShow: '10'
  },
  {
    id: 3,
    img: 'assets/img/auction/sm/auction-sm-3.jpg',
    title: 'Future coming soon',
    authorImg: 'assets/img/auction/sm/author/author-3.jpg',
    eth: 3.01,
    smShow: '11'
  },
  {
    id: 4,
    img: 'assets/img/auction/sm/auction-sm-4.jpg',
    title: '0xc29c11175...248',
    authorImg: 'assets/img/auction/sm/author/author-4.jpg',
    eth: 2.01,
    smShow: '10'
  },
  {
    id: 5,
    img: 'assets/img/auction/sm/auction-sm-5.jpg',
    title: 'Silver coin 3d print',
    authorImg: 'assets/img/auction/sm/author/author-5.jpg',
    eth: 1.01,
    smShow: '17'
  },
  {
    id: 6,
    img: 'assets/img/auction/sm/auction-sm-6.jpg',
    title: 'ETH never die',
    authorImg: 'assets/img/auction/sm/author/author-6.jpg',
    eth: 3.07,
    smShow: '12'
  },
]

const AuctionArea = () => {

  return (
    <>
      <section className="auction__area pt-105 pb-50">
        <div className="container">
          <div className="auction__border mb-40">
            <div className="row">
              <div className="col-xxl-6 col-md-6">
                <div className="section__title-wrapper-2 mr-15">
                  <h3 className="section__title-2">Top artworks</h3>
                </div>
              </div>
              <div className="col-xxl-6 col-md-6">
                <div className="auction__more text-md-end">
                  <Link href={'/auction'}>
                    <a className="tp-btn-border">View all Artwork</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            {
              auctionItem.map(item => {
                const { date } = item
                return (
                  <div key={item.id} className="col-xxl-4 col-xl-5 col-lg-6">
                    <div className="auction__item auction__item-bg mb-30">
                      <div className="auction__thumb m-img mb-15">
                        <Link href={`/product-details/${item.id}`}>
                          <a >
                            <img className="w-100" src="assets/img/auction/auction-img-1.jpg" alt="" />
                          </a>
                        </Link>
                      </div>
                      <div className="auction__content">
                        <h3 className="auction__title">
                          <Link href={`/product-details/${item.id}`}>
                            <a>Colorful Abstract Painting</a>
                          </Link>
                        </h3>

                        <div className="auction__author mb-15 d-flex align-items-center">
                          <div className="auction__author-thumb mr-10">
                            <Link href={`/product-details/${item.id}`}>
                              <a>
                                <img src={item.user1} alt="" />
                              </a>
                            </Link>
                          </div>
                          <div className="auction__author-content">
                            <h4><span>by</span>
                              <Link href={`/product-details/${item.id}`}>
                                <a>{item.author}</a>
                              </Link>
                            </h4>
                          </div>
                        </div>
                        <div className="auction__bid-status mb-15 d-flex align-items-end justify-content-between">
                          <div className="auction__bid-current">
                            <p>Current Bid</p>
                            <h5>{item.eth} ETH</h5>
                          </div>
                          <div className="auction__bid-ammount">
                            <p>${item.dollar}</p>
                          </div>
                        </div>
                        <div className="auction__countdown-wrapper mb-30">
                          <div className="auction__countdown d-flex align-items-center justify-content-between">
                            <div className="cdown day">
                              <span className="time-count">{Time(date).days}</span>
                              <p className='time'>Days</p>
                            </div>
                            <div className="cdown hour">
                              <span className="time-count">{Time(date).hours}</span>
                              <p className='time'>Hrs</p>
                            </div>
                            <div className="cdown minutes">
                              <span className="time-count">{Time(date).minutes}</span>
                              <p className='time'>Min</p>
                            </div>
                            <div className="cdown second"> 
                              <span className="time-count" suppressHydrationWarning>{Time(date).seconds}</span>
                              <p className='time'>Sec</p>
                            </div>
                          </div>
                        </div>
                        <div className="auction__btn d-sm-flex align-items-center justify-content-between">
                          <Link href={`/product-details/${item.id}`}>
                            <a className="tp-btn-gradient">View artwork</a>
                          </Link>
                          <button type="button" className="tp-btn-gradient active" data-bs-toggle="modal" data-bs-target="#bidmodal">Place Your Bid</button>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })
            }



            <div className="col-xxl-4 col-xl-7 col-lg-6">
              <div className="auction__sm-wrapper">
                {
                  auctionSmItemData.slice(0, 3).map(item => (
                    <div key={item.id} className="auction__sm-item d-sm-flex align-items-center mb-30">
                      <div className="auction__sm-thumb mr-20">
                        <Link href={`/product-details`}>
                          <a>
                            <img src={item.img} alt="" />
                          </a>
                        </Link>
                      </div>
                      <div className="auction__sm-content">
                        <h3 className="auction__sm-title">
                          <Link href={`/product-details`}>
                            <a>{item.title}</a>
                          </Link>
                        </h3>
                        <div className="auction__sm-author d-flex align-items-center mb-20">
                          <div className="auction__sm-author-thumb mr-10">
                            <Link href={`/product-details`}>
                              <a>
                                <img src={item.authorImg} alt="" />
                              </a>
                            </Link>
                          </div>
                          <div className="auction__sm-price mr-10">
                            <p>{item.eth} ETH</p>
                          </div>
                          <div className="auction__sm-show">
                            <p>1 of {item.smShow}</p>
                          </div>
                        </div>
                        <div className="auction__sm-btn">
                          <button type="button" className="tp-btn-gradient" data-bs-toggle="modal" data-bs-target="#bidmodal">place bid</button>
                        </div>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
            <div className="col-xxl-4 col-xl-7 col-lg-6">
              <div className="auction__sm-wrapper">
                {
                  auctionSmItemData.slice(3, 6).map(item => (
                    <div key={item.id} className="auction__sm-item d-sm-flex align-items-center mb-30">
                      <div className="auction__sm-thumb mr-20">
                        <Link href={`/product-details`}>
                          <a>
                            <img src={item.img} alt="" />
                          </a>
                        </Link>
                      </div>
                      <div className="auction__sm-content">
                        <h3 className="auction__sm-title">
                          <Link href={`/product-details`}>
                            <a >{item.title}</a>
                          </Link>
                        </h3>
                        <div className="auction__sm-author d-flex align-items-center mb-20">
                          <div className="auction__sm-author-thumb mr-10">
                            <Link href={`/product-details`}>
                              <a>
                                <img src={item.authorImg} alt="" />
                              </a>
                            </Link>
                          </div>
                          <div className="auction__sm-price mr-10">
                            <p>{item.eth} ETH</p>
                          </div>
                          <div className="auction__sm-show">
                            <p>1 of {item.smShow}</p>
                          </div>
                        </div>
                        <div className="auction__sm-btn">
                          <button type="button" className="tp-btn-gradient" data-bs-toggle="modal" data-bs-target="#bidmodal">place bid</button>
                        </div>
                      </div>
                    </div>
                  ))
                }

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ReportModal start */}
      <BidModal />
      {/* ReportModal start */}
    </>
  );
};

export default AuctionArea;