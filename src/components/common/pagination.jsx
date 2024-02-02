import Link from 'next/link';

const Pagination = ({ url }) => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link href={`/${url}`}>
              <a >
                <i className="fa-light fa-arrow-left"></i>
              </a>
            </Link>
          </li>
          <li>
            <Link href={`/${url}`}>
              <a >1</a>
            </Link>
          </li>
          <li>
            <span className="current">2</span>
          </li>
          <li>
            <Link href={`/${url}`}>
              <a >3</a>
            </Link>
          </li>
          <li>
            <Link href={`/${url}`}>
              <a >
                <i className="fa-light fa-arrow-right"></i>
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Pagination;