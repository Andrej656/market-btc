import Link from 'next/link';
import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import products from '../../data/products';
import ReportModal from '../common/modals/report-modal';
import ShareModal from '../common/modals/share-modal';
import collections from '../../data/collections';
import MsgModal from '../common/modals/msg-modal';

const on_sel_items = products.slice(4, 12);
const created_items = products.slice(0, 8);
const liked_items = products.slice(0, 8).reverse();


const ProfileArea = () => {
  const [value, setValue] = useState('0xF74d ... 1224');
  const [isCopy, setIsCopy] = useState(false);
  const handleCopy = () => {
    setIsCopy(true);
    alert('Copy')
  }

  return (
    <>
      <section className="creator__area">
        <div className="creator__banner include-bg" style={{ background: `url(assets/img/creator/creator-bg.jpg)`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }} ></div>
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="creator__user-wrapper text-center">
                <div className="creator__user-thumb">
                  <img src="assets/img/creator/user-1.jpg" alt="" />
                </div>
                <h3 className="creator__user-title">Ruüd van</h3>
                <div className="creator__user-copyright d-inline-block">
                  <div className="creator__user-copyright-inner d-flex align-items-center">
                    <div className="creator__user-copyright-icon">
                      <i className="fa-brands fa-ethereum"></i>
                    </div>
                    <div className="creator__user-copyright-text">
                      <span><input type="text" value={value}
                        onChange={({ target: { value } }) => setValue(value)} />
                      </span>

                      <CopyToClipboard text={value}
                        onCopy={handleCopy}>
                        <button type="button">
                          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g opacity="0.6">
                              <path d="M5.80388 13.2632H3.5941C1.28115 13.2632 0 11.9967 0 9.68638V3.57677C0 1.27497 1.27255 0 3.5941 0H7.52354C9.83649 0 11.1176 1.26642 11.1176 3.57677C11.1176 3.92761 10.8253 4.21854 10.4728 4.21854C10.1202 4.21854 9.8279 3.92761 9.8279 3.57677C9.8279 1.96808 9.14003 1.28353 7.52354 1.28353H3.5941C1.97762 1.28353 1.28975 1.96808 1.28975 3.57677V9.68638C1.28975 11.2951 1.97762 11.9796 3.5941 11.9796H5.80388C6.15641 11.9796 6.44875 12.2706 6.44875 12.6214C6.44875 12.9722 6.15641 13.2632 5.80388 13.2632Z" fill="white" />
                              <path d="M11.8705 14H9.54195C8.17131 14 7.41211 13.1959 7.41211 11.729V7.84992C7.41211 6.38846 8.16622 5.57895 9.54195 5.57895H11.8705C13.2411 5.57895 14.0003 6.38302 14.0003 7.84992V11.729C14.0003 13.1959 13.2462 14 11.8705 14ZM9.54195 6.39389C8.58403 6.39389 8.17641 6.82852 8.17641 7.84992V11.729C8.17641 12.7504 8.58403 13.1851 9.54195 13.1851H11.8705C12.8284 13.1851 13.236 12.7504 13.236 11.729V7.84992C13.236 6.82852 12.8284 6.39389 11.8705 6.39389H9.54195Z" fill="white" stroke="white" strokeWidth="0.2" />
                            </g>
                          </svg>
                        </button>
                      </CopyToClipboard>

                    </div>
                  </div>
                </div>
                <div className="creator__follow">
                  <p><span>604</span> followers</p>
                  <p><span>2</span> following</p>
                </div>
                <div className="creator__action">
                  <ul>
                    <li><a href="#">Follow</a></li>
                    <li><a href="#" data-bs-toggle="modal" data-bs-target="#messagemodal">Send Message</a></li>
                    <li><a href="#" data-bs-toggle="modal" data-bs-target="#sharemodal">Share</a></li>
                    <li>
                      <a href="#" className="more dropdown-toggle nft-more-btn" data-bs-toggle="dropdown" aria-expanded="false"><i className="fa-solid fa-ellipsis"></i></a>
                      <div className="nft__more-content dropdown-menu dropdown-menu-end">
                        <ul>
                          <li>
                            <button type="button" data-bs-toggle="modal" data-bs-target="#reportmodal">Report</button>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="creator__tab">
                  <nav>
                    <div className="nav nav-tabs justify-content-md-center" id="nav-tab" role="tablist">

                      <button className="nav-link" id="nav-sale-tab" data-bs-toggle="tab" data-bs-target="#nav-sale" type="button" role="tab" aria-controls="nav-sale" aria-selected="true">On sale <span className="number">8</span></button>

                      <button className="nav-link active" id="nav-created-tab" data-bs-toggle="tab" data-bs-target="#nav-created" type="button" role="tab" aria-controls="nav-created" aria-selected="false">Created <span className="number">24</span></button>

                      <button className="nav-link" id="nav-collection-tab" data-bs-toggle="tab" data-bs-target="#nav-collection" type="button" role="tab" aria-controls="nav-collection" aria-selected="false">Collections</button>

                      <button className="nav-link" id="nav-liked-tab" data-bs-toggle="tab" data-bs-target="#nav-liked" type="button" role="tab" aria-controls="nav-liked" aria-selected="false">Liked <span className="number">24</span></button>

                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="creator__border"></div>
        <div className="creator__item-wrapper pt-40 pb-120">
          <div className="container">
            <div className="row">
              <div className="col-xxl-12">
                <div className="tab-content" id="nav-tabContent">

                  <div className="tab-pane fade" id="nav-sale" role="tabpanel" aria-labelledby="nav-sale-tab">
                    <div className="create__sale">
                      <div className="row">

                        {on_sel_items.map(item => {
                          const { id, smImg2, bid_user_2, wishlist, eth, stock } = item;
                          return (
                            <div key={id} className="col-xxl-3 col-xl-3 col-lg-4 col-md-6">
                              <div className="nft__box theme-bg-dark mb-30 transition-3">
                                <div className="nft__box-top d-flex align-items-center justify-content-between">
                                  <div className="nft__box-user">
                                    <ul>
                                      {bid_user_2.map((user, index) => (
                                        <li key={index}>
                                          <Link href={'/profile'}>
                                            <a>
                                              <img src={user.user} alt="" />
                                            </a>
                                          </Link>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                  <div className="nft__box-more">
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
                                <div className="nft__box-thumb m-img mb-20">
                                  <Link href={`/product-details-tab/${id}`}>
                                    <a>
                                      <img src={smImg2} alt="" />
                                    </a>
                                  </Link>
                                  <div className="nft__box-popularity">
                                    <Link href={`/product-details-tab/${id}`}>
                                      <a>
                                        <i className="fa-solid fa-heart"></i>
                                        {parseInt(wishlist)}
                                      </a>
                                    </Link>
                                  </div>
                                </div>
                                <div className="nft__box-content">
                                  <div className="nft__box-content-top d-flex align-items-center justify-content-between">
                                    <h3 className="nft__box-title">
                                      <Link href={`/product-details-tab/${id}`}>
                                        <a>Terrestrial black hole</a>
                                      </Link>
                                    </h3>
                                    <div className="nft__box-trending-icon">
                                      <span><i className="fa-brands fa-ethereum"></i></span>
                                    </div>
                                  </div>
                                  <div className="nft__box-info d-flex align-items-center justify-content-between">
                                    <div className="nft__box-price">
                                      <p>{eth} ETH</p>
                                    </div>
                                    <div className="nft__box-stock">
                                      <p>{stock} in stock</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="nft__box-bottom d-flex align-items-center justify-content-between">
                                  <div className="nft__box-highest">
                                    <p><i className="fa-light fa-code-fork"></i> Highest bid</p>
                                  </div>
                                  <div className="nft__box-bid">
                                    <p>0.001 ETH</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )
                        })}

                        <div className="col-xxl-12">
                          <div className="nft__more text-center mt-20">
                            <Link href={'/shop'}>
                              <a className="tp-load-more">
                                <i className="fa-light fa-arrow-rotate-right"></i>
                                View all items
                              </a>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="tab-pane fade show active" id="nav-created" role="tabpanel" aria-labelledby="nav-created-tab">
                    <div className="row">
                      {created_items.map(item => {
                        const { id, smImg2, title, bid_user_2, wishlist, eth, stock } = item;
                        return (
                          <div key={id} className="col-xxl-3 col-xl-3 col-lg-4 col-md-6">
                            <div className="nft__box theme-bg-dark mb-30 transition-3">
                              <div className="nft__box-top d-flex align-items-center justify-content-between">
                                <div className="nft__box-user">
                                  <ul>
                                    {bid_user_2.map((user, index) => (
                                      <li key={index}>
                                        <Link href={'/profile'}>
                                          <a>
                                            <img src={user.user} alt="" />
                                          </a>
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                <div className="nft__box-more">
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
                              <div className="nft__box-thumb m-img mb-20">
                                <Link href={`/product-details-tab/${id}`}>
                                  <a>
                                    <img src={smImg2} alt="" />
                                  </a>
                                </Link>
                                <div className="nft__box-popularity">
                                  <Link href={`/product-details-tab/${id}`}>
                                    <a>
                                      <i className="fa-solid fa-heart"></i>
                                      {parseInt(wishlist)}
                                    </a>
                                  </Link>
                                </div>
                              </div>
                              <div className="nft__box-content">
                                <div className="nft__box-content-top d-flex align-items-center justify-content-between">
                                  <h3 className="nft__box-title">
                                    <Link href={`/product-details-tab/${id}`}>
                                      <a>{title}</a>
                                    </Link>
                                  </h3>
                                  <div className="nft__box-trending-icon">
                                    <span><i className="fa-brands fa-ethereum"></i></span>
                                  </div>
                                </div>
                                <div className="nft__box-info d-flex align-items-center justify-content-between">
                                  <div className="nft__box-price">
                                    <p>{eth} ETH</p>
                                  </div>
                                  <div className="nft__box-stock">
                                    <p>{stock} in stock</p>
                                  </div>
                                </div>
                              </div>
                              <div className="nft__box-bottom d-flex align-items-center justify-content-between">
                                <div className="nft__box-highest">
                                  <p><i className="fa-light fa-code-fork"></i> Highest bid</p>
                                </div>
                                <div className="nft__box-bid">
                                  <p>0.001 ETH</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        )
                      })}

                      <div className="col-xxl-12">
                        <div className="nft__more text-center mt-20">
                          <Link href={'/shop'}>
                            <a className="tp-load-more">
                              <i className="fa-light fa-arrow-rotate-right"></i>
                              View all items
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="tab-pane fade" id="nav-collection" role="tabpanel" aria-labelledby="nav-collection-tab">
                    <div className="creator__collection">
                      <div className="row">

                        {collections.map((item, index) => {
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
                              <a className="tp-load-more"><i className="fa-light fa-arrow-rotate-right"></i>View all items</a>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="tab-pane fade" id="nav-liked" role="tabpanel" aria-labelledby="nav-liked-tab">
                    <div className="creator__like">
                      <div className="row">

                        {liked_items.map(item => {
                          const { id, smImg2, bid_user_2, title, wishlist, eth, stock } = item;
                          return (
                            <div key={id} className="col-xxl-3 col-xl-3 col-lg-4 col-md-6">
                              <div className="nft__box theme-bg-dark mb-30 transition-3">
                                <div className="nft__box-top d-flex align-items-center justify-content-between">
                                  <div className="nft__box-user">
                                    <ul>
                                      {bid_user_2.map((user, index) => (
                                        <li key={index}>
                                          <Link href={'/profile'}>
                                            <a>
                                              <img src={user.user} alt="" />
                                            </a>
                                          </Link>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                  <div className="nft__box-more">
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
                                <div className="nft__box-thumb m-img mb-20">
                                  <Link href={`/product-details-tab/${id}`}>
                                    <a>
                                      <img src={smImg2} alt="" />
                                    </a>
                                  </Link>
                                  <div className="nft__box-popularity">
                                    <Link href={`/product-details-tab/${id}`}>
                                      <a>
                                        <i className="fa-solid fa-heart"></i>
                                        {parseInt(wishlist)}
                                      </a>
                                    </Link>
                                  </div>
                                </div>
                                <div className="nft__box-content">
                                  <div className="nft__box-content-top d-flex align-items-center justify-content-between">
                                    <h3 className="nft__box-title">
                                      <Link href={`/product-details-tab/${id}`}>
                                        <a>{title}</a>
                                      </Link>
                                    </h3>
                                    <div className="nft__box-trending-icon">
                                      <span><i className="fa-brands fa-ethereum"></i></span>
                                    </div>
                                  </div>
                                  <div className="nft__box-info d-flex align-items-center justify-content-between">
                                    <div className="nft__box-price">
                                      <p>{eth} ETH</p>
                                    </div>
                                    <div className="nft__box-stock">
                                      <p>{stock} in stock</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="nft__box-bottom d-flex align-items-center justify-content-between">
                                  <div className="nft__box-highest">
                                    <p><i className="fa-light fa-code-fork"></i> Highest bid</p>
                                  </div>
                                  <div className="nft__box-bid">
                                    <p>0.001 ETH</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )
                        })}

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* msg modal */}
      <MsgModal />
      {/* share modal */}
      <ShareModal />
      {/* report modal */}
      <ReportModal />
    </>
  );
};

export default ProfileArea;