import Link from 'next/link';

const ErrorArea = () => {
  return (
    <>
      <section className="error__area pt-120 pb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-10">
              <div className="error__content text-center">
                <div className="error__thumb m-img mb-20">
                  <img src="assets/img/error/error-1.png" alt="" />
                </div>
                <div className="error__content">
                  <h3 className="error__title">Page Not Found</h3>
                  <p>Oops! The page you are looking for does not exist. It might have been moved or deleted.</p>
                  <Link href="/">
                    <a className="tp-btn-3">Return Home</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ErrorArea;