import Link from 'next/link';

const FooterWidget = ({list,url}) => {
  return (
    <>
      <li><Link href={`${url}`}><a>{list.text}</a></Link></li>
    </>
  );
};

export default FooterWidget;