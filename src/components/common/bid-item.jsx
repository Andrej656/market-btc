import Link from 'next/link';

const BidItem = ({ item }) => {
  return (
    <>
      <div className="bid__item theme-bg-dark">
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
          <div className="bid__thumb m-img mb-20">
            <Link href={`/product-details/${item.id}`}>
              <a>
                <img src={item.smImg} alt="" />
              </a>
            </Link>
          </div>
          <div className="bid__content">
            <h3 className="bid__title">
              <Link href={`/product-details/${item.id}`}>
                <a>{item.title}</a>
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
    </>
  );
};

export default BidItem;