import Link from 'next/link';

import Time from '../../utility/time';
import BidModal from './modals/bid-modal';

const product_details_info = [
  { id: 1, title: 'Creator', verify: true, user: '/assets/img/product/user/product-user-1.jpg', name: 'Douglas lyphe' },
  {
    id: 2, title: 'Collection', verify: false, user: '/assets/img/product/collection/product-collection-1.jpg',
    name: 'Generative Art'
  },
]

const ProductDetailsRightSide = ({ item }) => {
  return (
    <>
      <div className="product__details-wrapper">
        <h3 className="product__details-title">{item.title}</h3>

        <div className="product__details-bid-info">
          <p>From <span>{item.eth} ETH</span></p>
          <p>4 of 12 available</p>
        </div>
        <div className="product__details-meta">
          <a href="#"><i className="fa-light fa-heart"></i> {item.wishlist}</a>
          <a href="#"><i className="fa-light fa-eye"></i> {item.see}</a>
          <a href="#" data-bs-toggle="modal" data-bs-target="#sharemodal"><i className="fa-light fa-share-nodes"></i> Share</a>
          <a href="#" className="more dropdown-toggle nft-more-btn" data-bs-toggle="dropdown" aria-expanded="false"><i className="fa-solid fa-ellipsis"></i></a>
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

        <div className="product__details-info d-sm-flex align-items-center justify-content-between">
          {product_details_info.map(item => (
            <div key={item.id} className="product__details-info-item mb-30">
              <p>Creator</p>
              <div className="product__details-creator d-flex align-items-center">
                <div className={`product__details-creator-thumb ${item.verify ? 'verified' : ''} mr-10`}>
                  <Link href={'/profile'}>
                    <a>
                      <img src={item.user} alt="" />
                    </a>
                  </Link>
                </div>
                <div className="product__details-creator-content">
                  <h3>
                    <Link href={'/profile'}>
                      <a>{item.name}</a>
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
          ))}

        </div>
        <div className="product__details-info">
          <div className="product__details-info-top">
            <div className="product__details-info-tab">
              <nav>
                <div className="nav nav-tabs" id="product-nav-tab" role="tablist">
                  <button className="nav-link active" id="nav-details-tab" data-bs-toggle="tab" data-bs-target="#nav-details" type="button" role="tab" aria-controls="nav-details" aria-selected="true">details</button>
                  <button className="nav-link" id="nav-bid-tab" data-bs-toggle="tab" data-bs-target="#nav-bid" type="button" role="tab" aria-controls="nav-bid" aria-selected="false">bids</button>
                  <button className="nav-link" id="nav-history-tab" data-bs-toggle="tab" data-bs-target="#nav-history" type="button" role="tab" aria-controls="nav-history" aria-selected="false">history</button>
                </div>
              </nav>
            </div>
          </div>
          <div className="product__details-info-tab-content">
            <div className="tab-content" id="product-details">
              <div className="tab-pane fade show active" id="nav-details" role="tabpanel" aria-labelledby="nav-details-tab">
                <div className="product__details-tab-item">
                  <div className="product__details-info-item mb-25">
                    <p>Owner</p>
                    <div className="product__details-creator d-flex align-items-center">
                      <div className="product__details-creator-thumb verified mr-10">
                        <Link href={'/profile'}>
                          <a>
                            <img src="/assets/img/product/user/product-user-2.jpg" alt="" />
                          </a>
                        </Link>
                      </div>
                      <div className="product__details-creator-content">
                        <h3>
                          <Link href={'/profile'}>
                            <a>Douglas lyphe</a>
                          </Link>
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="product__details-properties">
                    <h3>Properties</h3>
                    <div className="product__details-properties-wrapper d-flex">
                      <div className="product__details-properties-item mb-25">
                        <span>Author</span>
                        <h4>Based Mafia</h4>
                        <p>0% rarity</p>
                      </div>
                      <div className="product__details-properties-item mb-25">
                        <span>Accessories</span>
                        <h4>Prime Ape Planet</h4>
                        <p>0% rarity</p>
                      </div>
                      <div className="product__details-properties-item mb-25">
                        <span>Year</span>
                        <h4>2022</h4>
                        <p>0.4% rarity</p>
                      </div>
                    </div>
                  </div>
                  <div className="product__details-category">
                    <h4>Category</h4>
                    <Link href={'/shop'}>
                      <a>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g opacity="0.9">
                            <path d="M1.95027 7.15356H1.17016C0.522672 7.15356 0 7.67624 0 8.32373V9.10383C0 9.75132 0.522672 10.274 1.17016 10.274H1.95027C2.59776 10.274 3.12043 9.75132 3.12043 9.10383V8.32373C3.12043 7.67624 2.58996 7.15356 1.95027 7.15356Z" fill="white" />
                            <path d="M8.38582 0H7.60571C6.95822 0 6.43555 0.522672 6.43555 1.17016V1.95027C6.43555 2.59776 6.95822 3.12043 7.60571 3.12043H8.38582C9.03331 3.12043 9.55598 2.59776 9.55598 1.95027V1.17016C9.55598 0.522672 9.03331 0 8.38582 0Z" fill="white" />
                            <path d="M14.7901 7.15363H14.01C13.3625 7.15363 12.8398 7.6763 12.8398 8.32379V9.1039C12.8398 9.75139 13.3625 10.2741 14.01 10.2741H14.7901C15.4376 10.2741 15.9603 9.75139 15.9603 9.1039V8.32379C15.9603 7.6763 15.4376 7.15363 14.7901 7.15363Z" fill="white" />
                            <path opacity="0.5" d="M1.54407 8.12875C1.22422 8.12875 0.958984 7.86352 0.958984 7.54367C0.958984 4.21261 3.45533 1.41203 6.76299 1.02198C7.07503 0.990774 7.37148 1.21698 7.41048 1.53683C7.44949 1.85667 7.21545 2.14533 6.89561 2.18433C4.18083 2.50418 2.12915 4.80549 2.12915 7.54367C2.12915 7.86352 1.86391 8.12875 1.54407 8.12875Z" fill="white" />
                            <path opacity="0.5" d="M14.4158 8.12867C14.0959 8.12867 13.8307 7.86343 13.8307 7.54359C13.8307 4.82101 11.7946 2.51971 9.09542 2.19206C8.77558 2.15305 8.54935 1.8644 8.58836 1.54456C8.62736 1.22471 8.9238 0.99851 9.24365 1.03752C12.5279 1.43537 15.0086 4.23594 15.0086 7.5514C15.0008 7.86344 14.7434 8.12867 14.4158 8.12867Z" fill="white" />
                            <path opacity="0.6" d="M8.98751 16H6.98264C6.26494 16 5.73446 15.4227 5.86708 14.7986L6.19473 13.3554H9.77542L10.1031 14.7986C10.2513 15.4617 9.75201 16 8.98751 16Z" fill="white" />
                            <path d="M11.1554 12.1306L9.77463 13.3554H6.19393L4.81314 12.1306C4.00963 11.4753 4.00963 10.9683 4.61811 10.196L7.05205 7.12232C7.22367 6.91169 7.4187 6.76348 7.62933 6.69327C7.85556 6.61526 8.10519 6.61526 8.33142 6.69327C8.54205 6.77128 8.73708 6.91169 8.90871 7.12232L11.3426 10.196C11.9511 10.9683 11.9277 11.4519 11.1554 12.1306Z" fill="white" />
                          </g>
                        </svg>
                        {item.category}
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="nav-bid" role="tabpanel" aria-labelledby="nav-bid-tab">
                <div className="product__bid">
                  {item?.bidesDetails?.map(details => (
                    <div key={details.id} className="activity__item d-md-flex align-items-center justify-content-between mb-10">
                      <div className="activity__item-inner d-flex align-items-center">
                        <div className="activity__thumb mr-20">
                          <Link href={`/product-details`}>
                            <a>
                              <img src={details.img} alt="" />
                            </a>
                          </Link>
                          <span className={`activity__tag ${details.tag}`}>
                            {details.icon}
                          </span>
                        </div>
                        <div className="activity__content">
                          <h3 className="activity__title">
                            <Link href={`/product-details`}>
                              <a>{details.title}</a>
                            </Link>
                          </h3>
                          <p>{details.info} <Link href={'/profile'}>
                            <a>{" "}{details.name}</a>
                          </Link> </p>
                        </div>
                      </div>
                      <div className="activity__status">
                        <p>just now</p>
                      </div>
                    </div>
                  ))}

                </div>
              </div>
              <div className="tab-pane fade" id="nav-history" role="tabpanel" aria-labelledby="nav-history-tab">
                <div className="product__bid">
                  {item?.bidesDetails?.map(details => (
                    <div key={details.id} className="activity__item d-md-flex align-items-center justify-content-between mb-10">
                      <div className="activity__item-inner d-flex align-items-center">
                        <div className="activity__thumb mr-20">
                          <Link href={`/product-details`}>
                            <a>
                              <img src={details.img} alt="" />
                            </a>
                          </Link>
                          <span className={`activity__tag ${details.tag}`}>
                            {details.icon}
                          </span>
                        </div>
                        <div className="activity__content">
                          <h3 className="activity__title">
                            <Link href={`/product-details`}>
                              <a>{details.title}</a>
                            </Link>
                          </h3>
                          <p>{details.info} <Link href={'/profile'}>
                            <a>{" "}{details.name}</a>
                          </Link> </p>
                        </div>
                      </div>
                      <div className="activity__status">
                        <p>just now</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
          <div className="product__details-info-bottom ">
            <div className="product__details-bid d-sm-flex align-content-center justify-content-between">
              <div className="product__details-bid-status mb-15">
                <p>Minimum bid</p>
                <h4>0.44 ETH <span>/ $12,240.36</span></h4>
              </div>
              <div className="product__details-bid-countdown mb-15">
                <div className="product-bid-countdown d-flex align-items-center" data-countdown="2024/01/01">
                  <div className="cdown day">
                    <span className="time-count">{`${Time(`${item.date}`).days}`}</span>
                    <p>Days</p>
                  </div>
                  <div className="cdown hour">
                    <span className="time-count">{`${Time(`${item.date}`).hours}`}</span>
                    <p>Hrs</p>
                  </div>

                  <div className="cdown minutes">
                    <span className="time-count">{`${Time(`${item.date}`).minutes}`}</span>
                    <p>Min</p>
                  </div>

                  <div className="cdown second"> <div>
                    <span className="time-count" suppressHydrationWarning>{`${Time(`${item.date}`).seconds}`}</span>
                    <p>Sec</p></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="product__details-info-btn">
              <Link href={'/shop'}>
                <a className="tp-btn-2 active">Buy Now</a>
              </Link>
              <Link href={'/shop'}>
                <a className="tp-btn-2" data-bs-toggle="modal" data-bs-target="#bidmodal">Place Bid</a>
              </Link>
            </div>
          </div>
        </div>
      </div>



      {/* bid modal */}
      <BidModal/>
    </>
  );
};

export default ProductDetailsRightSide;