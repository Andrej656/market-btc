import { useState } from 'react';
import Link from 'next/link';

import products from '../../data/products';
import BidModal from '../common/modals/bid-modal';


const ProductList = () => {
  const [listItems, setListItems] = useState(products.filter(item => item.list_img));
  return (
    <>
      <section className="nft__area pt-110 pb-120 p-relative z-index-1">
        <div className="container tp-container">
          <div className="row">
            <div className="col-xxl-9">
              <div className="section__title-wrapper mb-40">
                <h4 className="section__title-stroke">Explore</h4>
                <h3 className="section__title">Product List</h3>
              </div>
            </div>
          </div>
          <div className="row">
            {listItems.map(item => (
              <div key={item.id} className="col-lg-6">
                <div className="bid__item mb-30 theme-bg-dark">
                  <div className="bid__item-wrapper">
                    <div className="bid__list-wrapper d-sm-flex align-items-center">
                      <div className="bid__list-left">
                        <div className="bid__thumb m-img mb-15">
                          <Link href={`/product-details/${item.id}`}>
                            <a>
                              <img src={item.list_img} alt="" />
                            </a>
                          </Link>
                        </div>
                      </div>
                      <div className="bid__list-right pl-30">
                        <div className="bid__top d-flex align-items-center justify-content-between mb-20">
                          <div className="bid__user">
                            <ul>
                              <li>
                                <Link href={'/profile'}>
                                  <a>
                                    <img src="assets/img/bid/bid-user-1.jpg" alt="" />
                                  </a>
                                </Link>
                              </li>
                              <li>
                                <Link href={'/profile'}>
                                  <a>
                                    <img src="assets/img/bid/bid-user-2.jpg" alt="" />
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
                        <div className="bid__content">
                          <div className="bid__content-top d-flex align-items-center justify-content-between">
                            <h3 className="bid__title">
                              <Link href={`/product-details/${item.id}`}>
                                <a>{item.title}</a>
                              </Link>
                            </h3>
                            <div className="bid__trending-icon mb-15">
                              <i className="fa-brands fa-ethereum"></i>
                            </div>
                          </div>
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
                </div>
              </div>
            ))}

          </div>
          <div className="row">
            <div className="col-xxl-12">
              <div className="nft__more text-center mt-20">
                <Link href={'/shop'}>
                  <a className="tp-load-more">
                    <i className="fa-light fa-arrow-rotate-right"></i>
                    View all items</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BidModal start */}
      <BidModal />
      {/* BidModal end */}
    </>
  );
};

export default ProductList;