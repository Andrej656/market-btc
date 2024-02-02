const brands = [
  {
    id: 1,
    img: 'assets/img/brand/2/brand-1.png',
  },
  {
    id: 2,
    img: 'assets/img/brand/2/brand-2.png',
  },
  {
    id: 3,
    img: 'assets/img/brand/2/brand-3.png',
  },
  {
    id: 4,
    img: 'assets/img/brand/2/brand-4.png',
  },
  {
    id: 5,
    img: 'assets/img/brand/2/brand-5.png',
  },
  {
    id: 6,
    img: 'assets/img/brand/2/brand-6.png',
  },
  {
    id: 7,
    img: 'assets/img/brand/2/brand-7.png',
  },
  {
    id: 8,
    img: 'assets/img/brand/2/brand-8.png',
  },
  {
    id: 9,
    img: 'assets/img/brand/2/brand-9.png',
  },
]

const BrandArea = () => {
  return (
    <>
      <section className="brand__area pb-80">
        <div className="container">
          <div className="row row-cols-xxl-5 row-cols-xl-5 row-cols-lg-4 row-cols-md-3 justify-content-center">
            {brands.map(logo => (
              <div key={logo.id} className="col">
                <div className="brand__item mb-30 text-center">
                  <img src={logo.img} alt="" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BrandArea;