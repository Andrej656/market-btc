import BreadcrumbTwo from '../common/breadcrumb/breadcrumb-2';
import FooterOne from '../common/footer/footer-1';
import Header from '../common/headers/header';
import ContactArea from './contact-area';
import ContactInfoArea from './contact-info-area';

const index = () => {
  return (
    <>
      <Header header_transparent="header__transparent" />
      <BreadcrumbTwo/>
      <ContactArea/>
      <ContactInfoArea/>
      <FooterOne bg_color="footer__gradient footer__overlay" />
    </>
  );
};

export default index;