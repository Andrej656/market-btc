const brands = [
  {
    id:1,
    img:'assets/img/brand/brand-1.png',
  },
  {
    id:2,
    img:'assets/img/brand/brand-2.png',
  },
  {
    id:3,
    img:'assets/img/brand/brand-3.png',
  },
  {
    id:4,
    img:'assets/img/brand/brand-4.png',
  },
  {
    id:5,
    img:'assets/img/brand/brand-5.png',
  },
  {
    id:6,
    img:'assets/img/brand/brand-6.png',
  },
  {
    id:7,
    img:'assets/img/brand/brand-7.png',
  },
  {
    id:8,
    img:'assets/img/brand/brand-8.png',
  },
  {
    id:9,
    img:'assets/img/brand/brand-9.png',
  },
]
const BrandArea = () => {
  return (
    <>
     <div className="brand__area pt-15 pb-70">
            <div className="container">
               <div className="row row-cols-xxl-5 justify-content-center">
                {
                  brands.map(brand => (
                    <div key={brand.id} className="col">
                     <div className="brand__item text-center mb-30">
                        <img src={brand.img} alt=""/>
                     </div>
                  </div>
                  ))
                }
               </div>
            </div>
         </div> 
    </>
  );
};

export default BrandArea;