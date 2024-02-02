import { useFormik } from 'formik';

import ErrorMsg from '../common/ErrorMsg';
import { forgetSchema } from '../common/validation-schema';

const ForgetArea = () => {
  const handleOnSubmit = (values, { resetForm }) => {
    alert(`${values.email}`);
    resetForm()
  }
  const { handleChange, handleSubmit, handleBlur, errors, values, touched } = useFormik({
    initialValues: {email: '',},
    validationSchema: forgetSchema,
    onSubmit: handleOnSubmit,
  })

  return (
    <>
      <section className="login__area pt-150 pb-275 p-relative z-index-2">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xxl-6 col-xl-6 col-lg-8">
              <div className="login__wrapper">
                <div className="login__shape">
                  <img className="login__shape-1" src="assets/img/login/login-person.png" alt="" />
                  <img className="login__shape-2" src="assets/img/login/login-shape-1.png" alt="" />
                  <img className="login__shape-3" src="assets/img/login/login-shape-2.png" alt="" />
                  <img className="login__shape-4" src="assets/img/login/login-shape-3.png" alt="" />
                </div>
                <div className="login__top text-center">
                  <h3>Reset your password</h3>
                  <p>We will send a password reset link</p>
                </div>
                <div className="login__form">
                  <form onSubmit={handleSubmit}>
                    <div className="login__input-box">
                      <div className="login__input-title">
                        <h4>Enter email <span>*</span></h4>
                      </div>
                      <div className="login__input">
                        <input id='email' value={values.email} onChange={handleChange} onBlur={handleBlur} 
                        type="email" placeholder="Enter Your Email" />
                        {touched.email && <ErrorMsg error={errors.email} />}
                        <span className="login__input-icon">
                          <i className="fa-light fa-envelope"></i>
                        </span>
                      </div>
                    </div>

                    <div className="login__btn mb-20">
                      <button className="tp-btn-4 w-100">Reset Password</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ForgetArea;