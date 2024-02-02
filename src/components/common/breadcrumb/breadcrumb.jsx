import Link from 'next/link';

const Breadcrumb = ({title,subtitle,b_border}) => {
  return (
    <>
      <section className={`breadcrumb__area pt-160 pb-85 p-relative z-index-1 ${b_border ? b_border : ''}`}>
        <div className="breadrumb__shape">
          <img className="breadcrumb__shape-1" src="assets/img/breadcrumb/breadcrumb-shape-1.png" alt="" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="breadcrumb__content text-center">
                <h3 className="breadcrumb__title">{title}</h3>
                <div className="breadcrumb__list">
                  <span><Link href="/"><a>Home</a></Link></span>
                  <span className="dvdr tp-dot"><i className="fa-solid fa-period"></i></span>
                  <span>{subtitle}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Breadcrumb;