import { useState } from "react";
import Link from 'next/link';

import products from "../../data/products";
import ShareModal from "../common/modals/share-modal";
import ReportModal from "../common/modals/report-modal";

const ShopGridArea = () => {
  const [shopItems, setShopItems] = useState(products.slice(0, 8))
  return (
    <>
      <section className="shop__grid pt-120 pb-120 p-relative z-index-1">
        <div className="container">
          <div className="row">
            {
              shopItems.map(item => (
                <div key={item.id} className="col-xxl-3 col-xl-3 col-lg-4 col-md-6">
                  <div className="nft__box theme-bg-dark mb-30 transition-3">
                    <div className="nft__box-top d-flex align-items-center justify-content-between">
                      <div className="nft__box-user">
                        <ul>
                          {item.bid_user_2.map((user, index) => (
                            <li key={index}>
                              <Link href="/profile">
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
                      <Link href={`/product-details-tab/${item.id}`}>
                        <a>
                          <img src={item.smImg2} alt="" />
                        </a>
                      </Link>
                      <div className="nft__box-popularity">
                        <Link href={`/product-details-tab/${item.id}`}>
                          <a>
                            <i className="fa-solid fa-heart"></i> {parseInt(item.wishlist)}
                          </a>
                        </Link>
                      </div>
                    </div>
                    <div className="nft__box-content">
                      <div className="nft__box-content-top d-flex align-items-center justify-content-between">
                        <h3 className="nft__box-title">
                          <Link href={`/product-details-tab/${item.id}`}>
                            <a>{item.title}</a>
                          </Link>
                        </h3>
                        <div className="nft__box-trending-icon">
                          <span><i className="fa-brands fa-ethereum"></i></span>
                        </div>
                      </div>
                      <div className="nft__box-info d-flex align-items-center justify-content-between">
                        <div className="nft__box-price">
                          <p>{item.eth} ETH</p>
                        </div>
                        <div className="nft__box-stock">
                          <p>{item.stock} in stock</p>
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
              ))
            }

            <div className="col-xxl-12">
              <div className="nft__more text-center mt-20">
                <Link href={'/shop'}>
                  <a className="tp-load-more">
                    <i className="fa-light fa-arrow-rotate-right"></i>View all items</a>
                </Link>
              </div>
            </div>
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

export default ShopGridArea;