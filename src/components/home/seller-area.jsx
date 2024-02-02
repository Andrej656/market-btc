import { useState } from 'react';
import Link from 'next/link';

import NiceSelect from '../ui/NiceSelect';

const sellersData = [
  {
    id: 1,
    img: 'assets/img/seller/seller-1.jpg',
    name: 'Robin Milford',
    revenue: '00.74',
    color: '',
    category: 'Day before yesterday',
  },
  {
    id: 2,
    img: 'assets/img/seller/seller-2.jpg',
    name: 'Penny Tool',
    revenue: '00.254',
    color: 'clr-green',
    category: 'Tommorow',
  },
  {
    id: 3,
    img: 'assets/img/seller/seller-3.jpg',
    name: 'Shahnewaz SP',
    revenue: '00.20',
    color: 'clr-orange',
    category: 'Day before yesterday',
  },
  {
    id: 4,
    img: 'assets/img/seller/seller-4.jpg',
    name: 'Joss Sticks',
    revenue: '00.74',
    color: 'clr-purple',
    category: 'Tommorow',
  },
  {
    id: 5,
    img: 'assets/img/seller/seller-5.jpg',
    name: 'Ruüd van Driver',
    revenue: '00.74',
    color: 'clr-yellow',
    category: 'Tommorow',
  },
  {
    id: 6,
    img: 'assets/img/seller/seller-6.jpg',
    name: 'Gordon Norman',
    revenue: '00.78',
    color: 'clr-pink',
    category: 'Tommorow',
  },
]

const SellerArea = () => {
  const [sellers, setSellers] = useState(sellersData);
  const slectHandler = (e) => {
    if (e.value === "Today") {
      setSellers(sellersData)
    }
    if (e.value === "Tommorow") {
      const filterItem = sellersData.filter(item => item.category === e.value);
      setSellers(filterItem)
    }
    if (e.value === "Day before yesterday") {
      const filterItem = sellersData.filter(item => item.category === e.value);
      setSellers(filterItem)
    }
  }
  return (
    <>
      <section className="seller__area pt-115 pb-60">
        <div className="container tp-container">
          <div className="row">
            <div className="col-xxl-9 col-lg-9 col-sm-7">
              <div className="section__title-wrapper mb-40">
                <h4 className="section__title-stroke">Populer</h4>
                <span className="section__title-pre">Popular </span>
                <h3 className="section__title section__title-blue">Sellers</h3>
              </div>
            </div>
            <div className="col-xxl-3 col-lg-3 col-sm-5">
              <div className="seller__date ml-15">
                <div className="seller__date-select">
                  <h3>Timeframe</h3>
                  <NiceSelect
                    options={[
                      { value: "Today", text: "Today" },
                      { value: "Tommorow", text: "Tommorow" },
                      { value: "Day before yesterday", text: "Day before yesterday" },
                    ]}
                    defaultCurrent={0}
                    onChange={slectHandler}
                    name="Today"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            {
              sellers.map((item, index) => (
                <div key={item.id} className="col-xxl-2 col-xl-2 col-lg-4 col-md-4 col-sm-6">
                  <div className={`seller__item theme-bg-dark mb-30 transition-3 ${item.color}`}>
                    <div className="seller__top d-flex justify-content-between">
                      <div className="seller__rank">
                        <span><i className="fa-light fa-trophy"></i> #{index + 1}</span>
                      </div>
                      <div className="seller__action">
                        <ul>
                          <li>
                            <a href="#" className="plus-minus">
                              <i className="fa-regular fa-square-plus"></i>
                              <i className="fa-regular fa-square-minus"></i>
                            </a>
                          </li>

                          <li>
                            <a href="#">
                              <i className="fa-regular fa-arrow-up-right"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="seller__content text-center">
                      <div className="seller__thumb">
                        <a href="#">
                          <img src={item.img} alt="" />
                        </a>
                      </div>
                      <div className="seller__info">
                        <h3 className="seller__name">
                          <Link href={'/profile'}>
                            <a>{item.name}</a>
                          </Link>
                        </h3>
                        <div className="seller__revenue d-flex align-items-center justify-content-center">
                          <div className="seller__revenue-icon">
                            <i className="fa-brands fa-ethereum"></i>
                          </div>
                          <div className="seller__revenue-ammount">
                            <p>{item.revenue}<span>ETH</span></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            }

          </div>
        </div>
      </section>
    </>
  );
};

export default SellerArea;