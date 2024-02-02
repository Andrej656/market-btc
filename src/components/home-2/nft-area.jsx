import { useState } from 'react';
import Slider from 'react-rangeslider';
import Link from 'next/link';

import NiceSelect from '../ui/NiceSelect';
import products from '../../data/products';
import ShareModal from '../common/modals/share-modal';
import ReportModal from '../common/modals/report-modal';


const NftArea = ({ p_filter_page }) => {
  const [volume, setVolume] = useState(0);
  const [nftItems, setNftItems] = useState(products.slice(0, 19).sort((a, b) => b.eth - a.eth));

  // selectHandler
  const selectHandler = e => {

  }
  // handleOnChange
  const handleOnChange = (value) => {
    setVolume(parseFloat(value))
  }

  // filter
  const filter_category = [
    {
      id: 1,
      title: 'PRICE',
      options: [
        { id: 1, value: 'Highest price', text: 'Highest price' },
        { id: 2, value: 'Lowest price', text: 'Lowest price' },
        { id: 3, value: 'Medium price', text: 'Medium price' },
        { id: 4, value: 'Best price', text: 'Best price' },
      ],
      name: 'Highest price'
    },
    {
      id: 2,
      title: 'LIKES',
      options: [
        { id: 1, value: 'Most liked', text: 'Most liked' },
        { id: 2, value: 'Most Viewed', text: 'Most Viewed' },
        { id: 3, value: 'High Rated', text: 'High Rated' },
        { id: 4, value: 'Top Popularity', text: 'Top Popularity' },
      ],
      name: 'Most liked'
    },
    {
      id: 3,
      title: 'CREATOR',
      options: [
        { id: 1, value: 'Verified only', text: 'Verified only' },
        { id: 2, value: 'New Added', text: 'New Added' },
        { id: 3, value: 'Most Liked', text: 'Most Liked' },
        { id: 4, value: 'Highest Rank', text: 'Highest Rank' },
      ],
      name: 'Verified only'
    },
  ]


  return (
    <>
      <section className={`nft__area ${p_filter_page ? 'pt-110 pb-120' : 'pb-90'} p-relative z-index-1`}>
        <div className="container">
          <div className="section__title-border mb-30">
            <div className="row">
              <div className="col-xxl-6 col-md-6">
                <div className="section__title-wrapper-2 mr-15">
                  <h3 className="section__title-2">Explore product</h3>
                </div>
              </div>
              {!p_filter_page && <div className="col-xxl-6 col-md-6">
                <div className="nft__more text-sm-end">
                  <Link href={'/shop'}>
                    <a className="tp-btn-border">view all NFTs</a>
                  </Link>
                </div>
              </div>}
            </div>
          </div>
          <div className="row">
            {
              filter_category.map(item => (
                <div key={item.id} className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                  <div className="nft__filter mb-35">
                    <h4 className="nft__filter-title">{item.title}</h4>
                    <div className="nft__filter-item">
                      <NiceSelect
                        options={item.options}
                        defaultCurrent={0}
                        onChange={selectHandler}
                        name={item.name}
                      />
                    </div>
                  </div>
                </div>
              ))
            }
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
              <div className="nft__filter mb-35">
                <h4 className="nft__filter-title">PRICE RANGE</h4>
                <div className="nft__filter">
                  <div className="nft__filter-slider tp-range-slider">
                    <div className="slider-styled inside-slider" id="nft-slider"></div>
                    <div className="nft__filter-slider-input d-flex align-items-center justify-content-between">

                      <div className='range-container'>
                        <Slider
                          min={0.00}
                          max={10.00}
                          value={volume}
                          tooltip={false}
                          orientation="horizontal"
                          onChange={handleOnChange}
                        />
                        <div className='d-flex align-items-center justify-content-between'>
                          <span>{0.00} ETH</span>
                          <span>{volume} ETH</span>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            {
              nftItems.slice(0, 8).map(item => (
                <div key={item.id} className="col-xxl-3 col-xl-3 col-lg-4 col-md-6">
                  <div className="nft__box mb-30 transition-3">
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
                        <p>{item.eth}ETH</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            }

            {
              p_filter_page && <div className="col-xxl-12">
                <div className="nft__more text-center mt-20">
                  <Link href={'/shop'}>
                    <a className="tp-load-more">
                      <i className="fa-light fa-arrow-rotate-right"></i>View all items
                    </a>
                  </Link>
                </div>
              </div>
            }

          </div>
        </div>
      </section>

      {/* share modal start*/}
      <ShareModal />
      {/* share modal end*/}
      {/* report modal start*/}
      <ReportModal />
      {/* report modal end*/}
    </>
  );
};

export default NftArea;