import React from 'react';
import BreadcrumbTwo from '../common/breadcrumb/breadcrumb-2';
import FooterTwo from '../common/footer/footer-2';
import Header from '../common/headers/header';
import ForgetArea from './forget-area';

const index = () => {
  return (
    <>
      <Header header_transparent={'header__transparent'} />
      <BreadcrumbTwo/>
      <ForgetArea/>
      <FooterTwo tp_container={false} gradient_overlay={true} widget_url="/forget" />
    </>
  );
};

export default index;