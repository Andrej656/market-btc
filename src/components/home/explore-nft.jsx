import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from 'next/link';

import BidModal from "../common/modals/bid-modal";
import NiceSelect from '../ui/NiceSelect';
import products from "../../data/products";

const productItems = products.slice(0,8)

const ExploreNft = ({ tab_page }) => {
  const [nftItems, setNftItems] = useState(products.filter(item => item.category === 'trending'));
  const [active, setIsActive] = useState('trending');

  // handle filter products
  const handleNftProducts = (category) => {
    setIsActive(category)
    setNftItems(products.filter(item => item.category === category))
  }


  const selectHandler = e => {
    if(e.value === 'Top Ranking') (setNftItems(products.filter(item => item.category === 'trending')))
    if(e.value === 'Price low to high') (setNftItems(productItems.sort((a,b) => b.eth - a.eth)))
    if(e.value === 'Price high to low') (setNftItems(productItems.sort((a,b) => a.eth - b.eth)))
    if(e.value === 'Top Viewed') (setNftItems(productItems.sort((a,b) => b.wishlist - a.wishlist)))
  }

  return (
    <>
      <section className={`nft__area ${tab_page ? 'pt-110 pb-120' : 'nft__overlay pt-110'}`}>
        <div className="container tp-container">
          <div className="row">
            <div className="col-xxl-9">
              <div className="section__title-wrapper mb-40">
                <h4 className="section__title-stroke">Explore</h4>
                <h3 className="section__title">Explore NFTs</h3>
              </div>
            </div>

          </div>
          <div className="row">
            <div className="col-xxl-9 col-xl-10">
              <div className="nft__nav mb-35">
                <nav>
                  <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <button onClick={() => handleNftProducts('trending')}
                      className={`nav-link ${active === 'trending' ? 'active' : ''}`} type="button">
                      <img src="assets/img/icon/trending/fire.png" alt="" />Trendings
                    </button>
                    <button onClick={() => handleNftProducts('art')}
                      className={`nav-link ${active === 'art' ? 'active' : ''}`} type="button" >
                      <img src="assets/img/icon/trending/color.png" alt="" />Art
                    </button>
                    <button onClick={() => handleNftProducts('music')}
                      className={`nav-link ${active === 'music' ? 'active' : ''}`} type="button">
                      <img src="assets/img/icon/trending/guiter.png" alt="" />Music
                    </button>
                    <button onClick={() => handleNftProducts('video')}
                      className={`nav-link ${active === 'video' ? 'active' : ''}`} type="button">
                      <img src="assets/img/icon/trending/video.png" alt="" />Video
                    </button>
                    <button onClick={() => handleNftProducts('sports')}
                      className={`nav-link ${active === 'sports' ? 'active' : ''}`} type="button">
                      <img src="assets/img/icon/trending/football.png" alt="" />Sports
                    </button>
                    <button onClick={() => handleNftProducts('photography')}
                      className={`nav-link ${active === 'photography' ? 'active' : ''}`} type="button">
                      <img src="assets/img/icon/trending/camera.png" alt="" />Photography
                    </button>
                    <button onClick={() => handleNftProducts('game')}
                      className={`nav-link ${active === 'game' ? 'active' : ''}`} type="button">
                      <img src="assets/img/icon/trending/game.png" alt="" />Game
                    </button>
                  </div>
                </nav>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-2">
              <div className="nft__right d-flex justify-content-xl-end align-items-end mb-35">
                <div className="nft__select">
                  <span className="sort-text">Filter & Sort</span>
                  <NiceSelect
                    options={[
                      { value: "Top Ranking", text: "Top Ranking" },
                      { value: "Price low to high", text: "Price low to high" },
                      { value: "Price high to low", text: "Price high to low" },
                      { value: "Top Viewed", text: "Top Viewed" },
                    ]}
                    placeholder="Recently added"
                    onChange={selectHandler}
                    name="Recently added"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xxl-12">
              <div className="row">
                {
                  nftItems.map(item => (
                    <div key={item.id} className="col-xxl-3 col-lg-4 col-md-6">
                      <div className="bid__item mb-30 theme-bg-dark">
                        <div className="bid__item-wrapper">
                          <div className="bid__top d-flex align-items-center justify-content-between mb-20">
                            <div className="bid__user">
                              <ul>
                                <li>
                                  <Link href={'/profile'}>
                                    <a>
                                      <img src={item.user1} alt="" />
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link href={'/profile'}>
                                    <a>
                                      <img src={item.user2} alt="" />
                                    </a>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                            <div className="bid__popularity">
                              <Link href={'/profile'}>
                                <a>
                                  <i className="icon_heart"></i>
                                  {item.wishlist}k
                                </a>
                              </Link>
                            </div>
                          </div>
                          <div className="bid__thumb m-img mb-15">
                            <Link href={`/product-details/${item.id}`}>
                              <a>
                                <img src={item.smImg} alt="" />
                              </a>
                            </Link>
                          </div>
                          <div className="bid__content">
                            <h3 className="bid__title">
                              <Link href={`/product-details/${item.id}`}>
                                <a >{item.title}</a>
                              </Link>
                            </h3>
                            <div className="bid__info d-flex align-items-center justify-content-between">
                              <div className="bid__highest">
                                <p>Heights bid <span>{item.eth} ETH</span></p>
                              </div>
                              <div className="bid__stock">
                                <p>{item.stock} in stock</p>
                              </div>
                            </div>
                          </div>
                          <div className="bid__bottom d-flex align-items-center justify-content-between">
                            <div className="bid__btn-wrapper">
                              <Link href={`/product-details/${item.id}`}>
                                <a className="bid__btn bid__btn-border">Bid History</a>
                              </Link>
                            </div>
                            <div className="bid__btn-wrapper">
                              <button type="button" className="bid__btn" data-bs-toggle="modal" data-bs-target="#bidmodal">Place a bid</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>

          </div>
          <div className="row">
            <div className="col-xxl-12">
              <div className="nft__more text-center mt-20">
                <Link href={`/shop`}>
                  <a className="tp-load-more"><i className="fa-light fa-arrow-rotate-right"></i>View all items</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* bid modal start */}
      <BidModal />
      {/* bid modal end */}
    </>
  );
};

export default ExploreNft;