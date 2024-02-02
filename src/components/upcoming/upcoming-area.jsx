import Pagination from '../common/pagination';


const upcoming_data = [
  {
    id:1,
    title:'Aqua Watcher Genesis',
    time:'11 PM UTC',
    count:'10%',
    price:'$40',
    extras:'If SOL is above $140'
  },
  {
    id:2,
    title:'Secure 25',
    time:'15 PM UTC',
    count:'70%',
    price:'$90',
    extras:'If SOL is above $20'
  },
  {
    id:3,
    title:'Secure 25',
    time:'20 PM UTC',
    count:'50%',
    price:'$50',
    extras:'If SOL is above $122'
  },
  {
    id:4,
    title:'Secure 25',
    time:'22 PM UTC',
    count:'550%',
    price:'$20',
    extras:'If SOL is above $240'
  },
]

const UpcomingArea = () => {
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
                          <th scope="col">Project</th>
                          <th scope="col">Time</th>
                          <th scope="col">Count</th>
                          <th scope="col">Price</th>
                          <th scope="col">Extras</th>
                        </tr>
                      </thead>
                      <tbody>
                        {upcoming_data.map(item => (
                        <tr key={item.id}>
                          <td>{item.title}</td>
                          <td className="color-green">{item.time}</td>
                          <td className="color-red">{item.count}</td>
                          <td className="color-theme">{item.price}</td>
                          <td>{item.extras}</td>
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
               <Pagination url={'upcoming'} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UpcomingArea;