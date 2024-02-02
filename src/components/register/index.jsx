import BreadcrumbTwo from '../common/breadcrumb/breadcrumb-2';
import FooterTwo from '../common/footer/footer-2';
import Header from '../common/headers/header';
import RegisterArea from './register-area';

const index = () => {
  return (
    <>
      <Header header_transparent={'header__transparent'} />
      <BreadcrumbTwo />
      <RegisterArea/>
      <FooterTwo tp_container={false} gradient_overlay={true} widget_url="/register" />
    </>
  );
};

export default index;