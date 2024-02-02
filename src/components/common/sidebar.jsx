import Link from 'next/link';
import { useState } from 'react';

import useGlobalContext from '../../hooks/use-globalContext';

const Sidebar = () => {
  const { showSidebar, setShowSidebar } = useGlobalContext();
  const [home, setHome] = useState(false);
  const [shop, setShop] = useState(false);
  const [pages, setPages] = useState(false);


  const handleMenuDropDown = (page) => {
    if (page === 'home') {
      setHome(!home)
      setShop(false)
      setPages(false)
    }

    if (page === 'shop') {
      setHome(false)
      setShop(!shop)
      setPages(false)
    }

    if (page === 'pages') {
      setHome(false)
      setShop(false)
      setPages(!pages)
    }

  }

  return (
    <>
      {/* <!-- offcanvas area start --> */}
      <div className={`offcanvas__area side-mobile-menu ${showSidebar ? 'active' : ''}`}>
        <div>
          <div className="offcanvas__wrapper p-0">
            <div className="offcanvas__content">
              <div className="offcanvas__top mb-40 d-flex justify-content-between align-items-center">
                <div className="offcanvas__logo logo">
                  <Link href={'/'}>
                    <a>
                      <img src="/assets/img/logo/logo-black.png" alt="logo" />
                    </a>
                  </Link>
                </div>
                <div className="offcanvas__close" onClick={() => setShowSidebar(false)}>
                  <button className="offcanvas__close-btn">
                    <i className="fal fa-times"></i>
                  </button>
                </div>
              </div>
              <div className="offcanvas__search mb-25">
                <form>
                  <input type="text" placeholder="What are you searching for?" />
                  <button type="button" ><i className="far fa-search"></i></button>
                </form>
              </div>

              <div className="mobile-menu fix mb-40 mm-menu">

                <ul>
                  <li className={`menu-item-has-children has-droupdown ${home ? 'active' : ''}`}>
                    <a onClick={() => handleMenuDropDown('home')}>Home</a >
                    <ul onClick={() => setShowSidebar(false)} className={`sub-menu ${home ? 'active' : ''}`}>
                      <li><Link href="/">Home Style 1</Link></li>
                      <li><Link href="/home-2">Home Style 2</Link></li>
                      <li><Link href="/home-3">Home Style 3</Link></li>
                    </ul>
                  </li>

                  <li className={`menu-item-has-children has-droupdown ${shop ? 'active' : ''}`}>
                    <a onClick={() => handleMenuDropDown('shop')}>Marketplace</a>
                    <ul onClick={() => setShowSidebar(false)} className={`sub-menu ${shop ? 'active' : ''}`}>
                      <li><Link href="/shop">Marketplace</Link></li>
                      <li><Link href="/shop-grid">Marketplace Grid</Link></li>
                      <li><Link href="/product-details">Product Details</Link></li>
                      <li><Link href="/product-details-tab">Product Details Tab</Link></li>
                      <li><Link href="/product-details-grid">Product Details Grid</Link></li>
                      <li><Link href="/product-carousel">Product Carousel</Link></li>
                      <li><Link href="/product-filter">Product Filter</Link></li>
                      <li><Link href="/product-grid">Product Grid</Link></li>
                      <li><Link href="/product-list">Product List</Link></li>
                      <li><Link href="/product-live">Product Live</Link></li>
                      <li><Link href="/product-live-carousel">Product Live Carousel</Link></li>
                      <li><Link href="/product-simple">Product Simple</Link></li>
                      <li><Link href="/product-tab">Product Tab</Link></li>
                    </ul>
                  </li>


                  <li className={`menu-item-has-children has-droupdown ${pages ? 'active' : ''}`}>
                    <a onClick={() => handleMenuDropDown('pages')}>Pages</a>
                    <ul onClick={() => setShowSidebar(false)} className={`sub-menu ${pages ? 'active' : ''}`}>
                      <li><Link href="/about">About</Link></li>
                      <li><Link href="/login">Login</Link></li>
                      <li><Link href="/creator">Creators</Link></li>
                      <li><Link href="/shop">Our Shop</Link></li>

                      <li><Link href="/contact">Contact Us</Link></li>
                      <li><Link href="/register">Register</Link></li>
                      <li><Link href="/creator-grid">Creators Grid</Link></li>
                      <li><Link href="/shop-grid">Shop Grid</Link></li>

                      <li><Link href="/activity">Activity</Link></li>
                      <li><Link href="/forget">Forget Password</Link></li>
                      <li><Link href="/creator-list">Creators List</Link></li>
                      <li><Link href="/product-details">Product Details</Link></li>

                      <li><Link href="/edit-profile">Edit Profile</Link></li>
                      <li><Link href="/auction">Live Auction</Link></li>
                      <li><Link href="/creator-list-2">Creators List Square</Link></li>
                      <li><Link href="/support">Support/FAQ</Link></li>

                      <li><Link href="/blog">Blog</Link></li>
                      <li><Link href="/collection">Collection</Link></li>
                      <li><Link href="/create">Create NFT</Link></li>
                      <li><Link href="/terms">Terms & Conditions</Link></li>

                      <li><Link href="/blog-details">Blog Details</Link></li>
                      <li><Link href="/collection-grid">Collection Grid</Link></li>
                      <li><Link href="/create-single">Create Sinle NFT</Link></li>
                      <li><Link href="/privacy">Privacy & Policy</Link></li>

                      <li><Link href="/ranking">NFT Ranking</Link></li>
                      <li><Link href="/collection-grid-2">Collection Grid Square</Link></li>
                      <li><Link href="/create-multiple">Create Multiple NFT</Link></li>
                      <li><Link href="/maintenance">Maintanance</Link></li>

                      <li><Link href="/upcoming">Upcoming Projects</Link></li>
                      <li><Link href="/wallet">Connect Wallet</Link></li>
                      <li><Link href="/coming-soon">Coming Soon</Link></li>
                      <li><Link href="/404">404 Error</Link></li>
                    </ul>
                  </li>

                  <li> <Link href="/collection">Collections</Link> </li>
                  <li> <Link href="/profile">Profile</Link></li>
                  <li> <Link href="/creator">Creators</Link> </li>

                </ul>

              </div>

              <div className="offcanvas__wallet mb-25 d-sm-none">
                <a href="wallet.html" className="offcanvas__wallet-btn">
                  <svg viewBox="0 0 19 16">
                    <path d="M17.5 5.83333V10.1667C17.5 13.5 15.9 14.5 13.5 14.5H5.5C2.5 14.5 1.5 13 1.5 10.1667V5.83333C1.5 3 2.5 2 4.852 1.552C5.06 1.51733 5.276 1.5 5.5 1.5H13.5C13.708 1.5 13.908 1.50866 14.1 1.54332C16.5 2 17.5 3 17.5 5.83333Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M9 5.03314H5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M17.2998 5.75061H14.8998C14.0198 5.75061 13.2998 6.65061 13.2998 7.75061C13.2998 8.85061 14.0198 9.75061 14.8998 9.75061H17.2998" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Wallet
                </a>
              </div>
              <div className="offcanvas__notification d-sm-none d-flex align-items-center mb-25">
                <div className="offcanvas__notification-icon mr-25">
                  <a href="activity.html">
                    <i className="fa-light fa-bell"></i>
                    <span className="notification-count">8</span>
                  </a>
                </div>
                <div className="offcanvas__notification-text">
                  <p>You have <span className="notification-number">8</span> notifications <a href="activity.html">view</a></p>
                </div>
              </div>
              <div className="offcanvas__text d-none d-lg-block">
                <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and will give you a complete account of the system and expound the actual teachings of the great explore</p>
              </div>
              <div className="offcanvas__map d-none d-lg-block mb-15">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d29176.030811137334!2d90.3883827!3d23.924917699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1605272373598!5m2!1sen!2sbd"></iframe>
              </div>
              <div className="offcanvas__contact mt-30 mb-20">
                <h4>Contact Info</h4>
                <ul>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="fal fa-map-marker-alt"></i>
                    </div>
                    <div className="offcanvas__contact-text">
                      <a target="_blank" rel="noreferrer" href="https://www.google.com/maps/place/Dhaka/@23.7806207,90.3492859,12z/data=!3m1!4b1!4m5!3m4!1s0x3755b8b087026b81:0x8fa563bbdd5904c2!8m2!3d23.8104753!4d90.4119873">12/A, Mirnada City Tower, NYC</a>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="far fa-phone"></i>
                    </div>
                    <div className="offcanvas__contact-text">
                      <a href="mailto:support@gmail.com">088889797697</a>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="fal fa-envelope"></i>
                    </div>
                    <div className="offcanvas__contact-text">
                      <a href="tel:+012-345-6789">support@mail.com</a>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="offcanvas__social">
                <ul>
                  <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                  <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                  <li><a href="#"><i className="fab fa-youtube"></i></a></li>
                  <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- offcanvas area end -->       */}
      <div onClick={() => setShowSidebar(false)} 
      className={`body-overlay ${showSidebar ? 'opened' : ''}`}></div>
      {/* <!-- offcanvas area end -->   */}
    </>
  );
};

export default Sidebar;