import Link from 'next/link';

const Pagination = () => {
  return (
    <>
      <div className="col-xxl-12">
        <div className="basic-pagination mt-20">
          <nav>
            <ul>
              <li>
                <Link href={'/blog'}>
                  <a>
                    <i className="fa-light fa-arrow-left"></i>
                  </a>
                </Link>
              </li>
              <li>
                <Link href={'/blog'}>
                  <a>1</a>
                </Link>
              </li>
              <li>
                <span className="current">2</span>
              </li>
              <li>
                <Link href={'/blog'}>
                  <a>3</a>
                </Link>
              </li>
              <li>
                <Link href={'/blog'}>
                  <a>
                    <i className="fa-light fa-arrow-right"></i>
                  </a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Pagination;