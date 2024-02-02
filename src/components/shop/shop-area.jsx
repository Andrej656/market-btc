import { useState } from 'react';
import Link from 'next/link';

import AllCategory from '../common/filtering/category';
import CheckboxItem from '../common/filtering/checkbox';
import Collection from '../common/filtering/collection';
import RangeSlider from '../common/filtering/range-slider';
import NiceSelect from '../ui/NiceSelect';
import products from '../../data/products';
import { creatorsData } from '../../data/creators';
import ShareModal from '../common/modals/share-modal';
import ReportModal from '../common/modals/report-modal';
import collections from '../../data/collections';

const ShopArea = ({ collection, creator }) => {
  const [nftItems, setNftItems] = useState(products.slice(10, 19));

  const selectHandler = e => {
  }
  return (
    <>
      <section className="shop__filter pb-100 p-relative z-index-1">
        <div className="shop__filter-top">
          <div className="container">
            <div className="row">
              <div className="col-xxl-3 col-xl-3 col-lg-4">
                <div className="shop__filter-btn">
                  <p><i className="fa-regular fa-sliders-simple"></i> Filter</p>
                  <button className="filter-clear float-end" type="button"><i className="fa-regular fa-xmark"></i></button>
                </div>
              </div>
              <div className="col-xxl-9 col-xl-9 col-lg-8 order-first order-lg-last">
                <div className="shop__filter-top-right d-md-flex align-items-center justify-content-between">
                  <div className="shop__filter-tab">
                    <nav>
                      <div className="nav nav-tabs" id="nav-tab" role="tablist">
                        <button className={`nav-link ${!collection && !creator && 'active'}`} id="nav-nft-tab" data-bs-toggle="tab" data-bs-target="#nav-nft" type="button" role="tab" aria-controls="nav-nft" aria-selected="false">NFTs  <span>154,087</span></button>

                        <button className={`nav-link ${collection && !creator && 'active'}`} id="nav-collection-tab" data-bs-toggle="tab" data-bs-target="#nav-collection" type="button" role="tab" aria-controls="nav-collection" aria-selected="true">Collections  <span>12,627</span></button>

                        <button className={`nav-link ${!collection && creator && 'active'}`} id="nav-creator-tab" data-bs-toggle="tab" data-bs-target="#nav-creator" type="button" role="tab" aria-controls="nav-creator" aria-selected="false">Creators  <span>1,07,368</span></button>
                      </div>
                    </nav>
                  </div>
                  <div className="shop__filter-sort d-flex align-items-center">
                    <p>Sort by  Price:</p>
                    <NiceSelect
                      options={[
                        { value: "Low to High", text: "Low to High" },
                        { value: "High to Low", text: "High to Low" },
                        { value: "Recently Added", text: "Recently Added" },
                        { value: "Top Ranking", text: "Top Ranking" },
                      ]}
                      defaultCurrent={0}
                      onChange={selectHandler}
                      name="Low to High"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xxl-3 col-xl-3 col-lg-4">
              <div className="nft__filter-wrapper nft__filter-wrapper-2">
                <div className="nft__filter-accordion">
                  <div className="accordion">
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="nft_status">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                          Status
                        </button>
                      </h2>
                      <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="nft_status" data-bs-parent="#nftaccordion">
                        <div className="accordion-body">
                          <div className="nft__filer-status mb-15">
                            <form>
                              <CheckboxItem label="Buy Now" id="m-buy" />
                              <CheckboxItem label="On Auction" id="m-auction" />
                              <CheckboxItem label="Looking to Sell" id="m-sell" />
                              <CheckboxItem label="Hes offers" id="m-offer" />
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="nft_status_2">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                          Price
                        </button>
                      </h2>
                      <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="nft_status_2" data-bs-parent="#nftaccordion">
                        <div className="accordion-body">
                          <RangeSlider />
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="nft_status_3">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                          Collection
                        </button>
                      </h2>
                      <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="nft_status_3" data-bs-parent="#nftaccordion">
                        <div className="accordion-body">
                          <div className="nft__filter-collection mb-20">
                            {/* Collection */}
                            <Collection />
                            {/* Collection */}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="nft_status_4">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                          Caregories
                        </button>
                      </h2>
                      <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="nft_status_4" data-bs-parent="#nftaccordion">
                        <div className="accordion-body">
                          <div className="nft__filter-categories">
                            {/* AllCategory  */}
                            <AllCategory />
                            {/* AllCategory */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xxl-9 col-xl-9 col-lg-8">
              <div className="shop__product-wrapper pt-40 pl-10">
                <div className="tab-content" id="nav-tabContent">
                  <div className={`tab-pane fade ${!collection && !creator && 'show active'}`} id="nav-nft" role="tabpanel" aria-labelledby="nav-nft-tab">
                    <div className="shop__product-tab">
                      <div className="row">
                        {
                          nftItems.map((item,index) => {
                            return (
                              <div key={index} className="col-xxl-4 col-xl-4 col-lg-6 col-md-6">
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
                            )
                          })
                        }

                        <div className="col-xxl-12">
                          <div className="nft__more text-center mt-20">
                            <Link href="/shop">
                              <a className="tp-load-more"><i className="fa-light fa-arrow-rotate-right"></i>View all items</a>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={`tab-pane fade ${collection && !creator && 'show active'}`} id="nav-collection" role="tabpanel" aria-labelledby="nav-collection-tab">
                    <div className="shop__collection">
                      <div className="row">

                        {
                          collections.map((item, index) => (
                            <div key={index} className="col-md-6">
                              <div className="collection__item text-center mb-30 theme-bg-dark">
                                <div className="collection__item-inner">
                                  <div className="collection__thumb-wrapper">
                                    <div className="row gx-2">
                                      <div className="col-xxl-4 col-sm-4 col-4">
                                        <div className="collection__thumb mb-10 m-img">
                                          <Link href='/collection'>
                                            <a>
                                              <img src={item.smImg_1} alt="" />
                                            </a>
                                          </Link>
                                        </div>
                                      </div>
                                      <div className="col-xxl-4 col-sm-4 col-4">
                                        <div className="collection__thumb mb-10 m-img">
                                          <Link href='/collection'>
                                            <a>
                                              <img src={item.smImg_2} alt="" />
                                            </a>
                                          </Link>
                                        </div>
                                      </div>
                                      <div className="col-xxl-4 col-sm-4 col-4">
                                        <div className="collection__thumb mb-10 m-img">
                                          <Link href='/collection'>
                                            <a>
                                              <img src={item.smImg_3} alt="" />
                                            </a>
                                          </Link>
                                        </div>
                                      </div>
                                      <div className="col-xxl-12">
                                        <div className="collection__thumb mb-10 m-img">
                                          <Link href='/collection'>
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
                                      <Link href='/collection'>
                                        <a>
                                          <img src={item.user} alt="" />
                                        </a>
                                      </Link>
                                    </div>
                                    <h3 className="collection__title">
                                      <Link href='/collection'>
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

                        <div className="col-xxl-12">
                          <div className="nft__more text-center mt-20">
                            <Link href='/collection'>
                              <a className="tp-load-more"><i className="fa-light fa-arrow-rotate-right"></i>View all items</a>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={`tab-pane fade ${!collection && creator && 'show active'}`} id="nav-creator" role="tabpanel" aria-labelledby="nav-creator-tab">
                    <div className="creator__wrapper">
                      <div className="row">
                        {creatorsData.map((item, index) => (
                          <div key={index} className="col-xxl-4">
                            <div className="creator__grid-item mb-30">
                              <div className="creator__grid-bg w-img">
                                <Link href='/profile'>
                                  <a>
                                    <img src={item.bgImg} alt="" />
                                  </a>
                                </Link>
                              </div>
                              <div className="creator__grid-content text-center">
                                <div className="creator__grid-thumb">
                                  <Link href='/profile'>
                                    <a>
                                      <img src={item.creator} alt="" />
                                    </a>
                                  </Link>
                                </div>
                                <h3 className="creator__grid-title">
                                  <Link href='/profile'>
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
                            <Link href='/creator'>
                             <a className="tp-load-more"><i className="fa-light fa-arrow-rotate-right"></i>View all items</a>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

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

export default ShopArea;