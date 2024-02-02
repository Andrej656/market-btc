import Link from 'next/link';

import Time from '../../utility/time';

const AuctionItem = ({ item }) => {
  return (
    <>
      <div className="auction__item auction__item-2 auction__item-bg  mb-30">
        <div className="auction__thumb m-img mb-15">
          <Link href={`/product-details/${item.id}`}>
            <a>
              <img className='w-100' src={item.auc_img} alt="" />
            </a>
          </Link>
        </div>
        <div className="auction__content">
          <h3 className="auction__title">
            <Link href={`/product-details/${item.id}`}>
              <a>{item.title}</a>
            </Link>
          </h3>
          <div className="auction__author mb-15 d-flex align-items-center">
            <div className="auction__author-thumb mr-10">
              <Link href={`/profile`}>
                <a>
                  <img src={item.auc_user} alt="" />
                </a>
              </Link>
            </div>
            <div className="auction__author-content">
              <h4><span>by</span> <Link href={'/profile'}>
                <a>{item.title}</a>
              </Link></h4>
            </div>
          </div>
          <div className="auction__bid-status mb-15 d-flex align-items-end justify-content-between">
            <div className="auction__bid-current">
              <p>Current Bid</p>
              <h5>{item.eth} ETH <span>/ ${item.dollar}</span></h5>
            </div>
            <div className="auction__bid-ammount">

            </div>
          </div>
          <div className="auction__countdown-wrapper mb-30">
            <div className="auction__countdown d-flex align-items-center justify-content-between">
              <div className="cdown day">
                <span className="time-count">{Time(item.date).days}</span>
                <p>Days</p>
              </div>
              <div className="cdown hour">
                <span className="time-count">{Time(item.date).hours}</span>
                <p>Hrs</p>
              </div>

              <div className="cdown minutes">
                <span className="time-count">{Time(item.date).minutes}</span>
                <p>Min</p>
              </div>

              <div className="cdown second"> <div>
                <span className="time-count" suppressHydrationWarning>{Time(item.date).seconds}</span>
                <p>Sec</p></div>
              </div>
            </div>
          </div>
          <div className="auction__btn d-sm-flex align-items-center justify-content-between">
            <Link href={`/product-details/${item.id}`}>
              <a className="tp-btn-2">Buy Now</a>
            </Link>
            <button type="button" className="tp-btn-2 active" data-bs-toggle="modal" data-bs-target="#bidmodal">Place Your Bid</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuctionItem;