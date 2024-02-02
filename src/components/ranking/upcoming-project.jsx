import Link from 'next/link';

import Pagination from "../common/pagination";

const upcoming_project_data = [
  {
    id: 1,
    product: '/assets/img/bid/bid-img-1.jpg',
    title: 'Meta Wolves Club',
    td_1: '7,50,000',
    td_2: '-310.63%',
    td_3: '+62.21%',
    td_4: '33.02',
    td_5: '3k',
    td_6: '10k',
    color_red: true,
  },
  {
    id: 2,
    product: '/assets/img/bid/bid-img-2.jpg',
    title: 'Aqua Watcher Genesis',
    td_1: '50,000',
    td_2: '-10.63%',
    td_3: '+2.21%',
    td_4: '10.15',
    td_5: '1k',
    td_6: '20k',
    color_red: true,
  },
  {
    id: 3,
    product: '/assets/img/bid/bid-img-3.jpg',
    title: 'Brave Tigers NFT',
    td_1: '70,000',
    td_2: '30.63%',
    td_3: '+6.1%',
    td_4: '40.5',
    td_5: '4k',
    td_6: '3k',
    color_red: false,
  },
  {
    id: 4,
    product: '/assets/img/bid/bid-img-4.jpg',
    title: 'Prime Ape Planet',
    td_1: '4,10,000',
    td_2: '-20.51%',
    td_3: '+20%',
    td_4: '10.2',
    td_5: '7k',
    td_6: '15k',
    color_red: true,
  },
]

const UpcomingProject = () => {
  return (
    <>
      <section className="upcoming__area pt-115 pb-120 p-relative z-index-1">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="upcoming__wrapper">
                <div className="upcoming__item">
                  <h3 className="upcoming__title"><i className="fa-regular fa-calendar"></i> April 20</h3>

                  <div className="upcoming__table">
                    <table className="table">
                      <thead>
                        <tr>
                          <th scope="col">SL</th>
                          <th scope="col">Product</th>
                          <th scope="col">Volume</th>
                          <th scope="col">24h%</th>
                          <th scope="col">7d%</th>
                          <th scope="col">Floor Price</th>
                          <th scope="col">Owners</th>
                          <th scope="col">Items</th>
                        </tr>
                      </thead>
                      <tbody>
                        {upcoming_project_data.map(item => (
                          <tr key={item.id}>
                            <td>{item.id < 9 && '0'}{item.id}</td>
                            <td>
                              <div className="upcoming__single d-flex align-items-center">
                                <div className="upcoming__thumb mr-10">
                                  <Link href={`/product-details`}>
                                    <a>
                                      <img src={item.product} alt="" />
                                    </a>
                                  </Link>
                                </div>
                                <div className="upcoming__content">
                                  <Link href={`/product-details`}>
                                    <a>{item.title}</a>
                                  </Link>
                                </div>
                              </div>
                            </td>
                            <td>{item.td_1}</td>
                            <td className={item.color_red ? "color-red" : ''}>{item.td_2}</td>
                            <td className="color-green">{item.td_3}</td>
                            <td>{item.td_4}</td>
                            <td>{item.td_5}</td>
                            <td>{item.td_6}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className="row">
            <div className="col-xxl-12">
              <div className="basic-pagination mt-50">
                <Pagination url={'ranking'} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UpcomingProject;