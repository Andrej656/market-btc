import Counter from "../common/counter";

const counter_data = [
  {
    id: 1,
    img: 'assets/img/icon/counter/counter-1.png',
    number: 2020,
    subtitle: 'Since Launching'
  },
  {
    id: 2,
    j_content: 'justify-content-md-center',
    img: 'assets/img/icon/counter/counter-2.png',
    number: 4,
    subtitle: 'Total User',
    end_text: 'M+',
  },
  {
    id: 3,
    j_content: 'justify-content-md-end',
    img: 'assets/img/icon/counter/counter-3.png',
    number: 170,
    subtitle: 'Total Employees',
    end_text: '+',
  },
  {
    id: 4,
    img: 'assets/img/icon/counter/counter-4.png',
    number: 2,
    subtitle: 'Total Collections',
    end_text: 'M+',
  },
  {
    id: 5,
    j_content: 'justify-content-md-center',
    img: 'assets/img/icon/counter/counter-5.png',
    number: 2,
    subtitle: 'NFT Created',
    end_text: 'k+',
  },
  {
    id: 6,
    j_content: 'justify-content-md-end',
    img: 'assets/img/icon/counter/counter-6.png',
    number: 14,
    subtitle: 'Trading Volume',
    end_text: 'B+',
  },
]

const MissionArea = () => {
  return (
    <>
      <section className="mission__area pb-50">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xxl-8 col-xl-8 col-lg-10">
              <div className="mission__wrapper">
                <div className="mission__title-wrapper">
                  <span className="mission__title-pre">Our Mission</span>
                  <p>At Bitakon, we are excited about a brand new type of digital good called
                    a non-fungible token, or NFT. NFTs have exciting new properties:unique, provably scarce, tradeable, and usable across multiple applications. Just like physical goods, you can do whatever you want with them! </p>
                </div>

                <div className="mission__counter p-relative">
                  <span className="mission__counter-vr-br"></span>
                  <span className="mission__counter-vr-br mission__counter-vr-br-2"></span>
                  <span className="mission__counter-hr-br"></span>
                  <div className="row">

                    {
                      counter_data.map(item => (
                        <div key={item.id} className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-6">
                          <div className={`mission__counter-item d-flex align-items-start ${item.j_content ? item.j_content : ''}`}>
                            <div className="mission__counter-icon mr-10">
                              <img src={item.img} alt="" />
                            </div>
                            <div className="mission__counter-content">
                              <h4><span className="counter"><Counter number={item.number} end_text={item.end_text} />
                              </span></h4>
                              <p>{item.subtitle}</p>
                            </div>
                          </div>
                        </div>
                      ))
                    }

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MissionArea;