import Link from "next/link";
import { useState } from "react";

import products from "../../data/products";
import AllCategory from "../common/filtering/category";
import CheckboxItem from "../common/filtering/checkbox";
import Collection from "../common/filtering/collection";
import RangeSlider from "../common/filtering/range-slider";
import ReportModal from "../common/modals/report-modal";
import ShareModal from "../common/modals/share-modal";

const NftItems = () => {
  const [productItems, setProductItems] = useState(products.filter(item => item.category === 'trending'));

  return (
    <>
      <section className="nft__area pb-50">
        <div className="container">
          <div className="section__title-border mb-40">
            <div className="row align-items-end">
              <div className="col-xxl-6 col-lg-6 col-md-7">
                <div className="section__title-wrapper-3">
                  <h3 className="section__title-3">Trending <br /> NFTs of this season</h3>
                </div>
              </div>
              <div className="col-xxl-6 col-lg-6 col-md-5">
                <div className="nft__search text-end float-md-end fix mb-15">
                  <form>
                    <div className="nft__search-input">
                      <input required type="text" placeholder="Search" />
                      <button type="submit"><i className="fa-regular fa-magnifying-glass"></i></button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xxl-3 col-xl-3 col-lg-4">
              <div className="nft__filter-wrapper">
                <div className="nft__filter-top d-flex justify-content-between align-items-center">
                  <div className="nft__filter-top-icon">
                    <span>
                      <svg viewBox="0 0 15 18" fill="none">
                        <path d="M2.5 1.57495H12.4C13.225 1.57495 13.9 2.24995 13.9 3.07495V4.72495C13.9 5.32495 13.525 6.07495 13.15 6.44995L9.925 9.29995C9.475 9.67495 9.175 10.425 9.175 11.025V14.25C9.175 14.7 8.875 15.3 8.5 15.525L7.45 16.2C6.475 16.8 5.125 16.125 5.125 14.925V10.95C5.125 10.425 4.825 9.74995 4.525 9.37495L1.675 6.37495C1.3 5.99995 1 5.32495 1 4.87495V3.14995C1 2.24995 1.675 1.57495 2.5 1.57495Z" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M6.6477 1.57495L2.9502 7.49995" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </div>
                  <div className="nft__filter-top-result">
                    <p>264 item</p>
                  </div>
                </div>
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
                          {/* RangeSlider */}
                          <RangeSlider />
                          {/* RangeSlider */}
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
              <div className="row">
                {
                  productItems.slice(0, 6).map(item => <NftItem key={item.id} item={item} />)
                }
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

// render nft item

const NftItem = ({ item }) => {
  return (
    <>
      <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6">
        <div className="nft__box nft__box-square theme-bg-dark mb-30 transition-3">
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
              <p><i className="fa-light fa-code-htmlFork"></i> Highest bid</p>
            </div>
            <div className="nft__box-bid">
              <p>0.001 ETH</p>
            </div>
          </div>
        </div>
      </div>

      {/* share modal */}
      <ShareModal />
      {/* report modal */}
      <ReportModal />

    </>
  )
}

export default NftItems;