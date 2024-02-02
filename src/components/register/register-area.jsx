import { useState } from 'react';
import { useFormik } from 'formik';
import Link from 'next/link';

import ErrorMsg from '../common/ErrorMsg';
import { registerSchema } from '../common/validation-schema';

const RegisterArea = () => {
  const [showPassword,setShowPassword] = useState(false)
  const handleOnSubmit = (values, { resetForm }) => {
    alert(`${values.name + "\n" + values.email + "\n" + values.password }`);
    resetForm()
  }
  
  const { handleChange, handleSubmit, handleBlur, errors, values, touched } = useFormik({
    initialValues: {name:'', email: '', password: ''},
    validationSchema: registerSchema,
    onSubmit: handleOnSubmit,
  })

  return (
    <>
      <section className="login__area pb-120 p-relative z-index-2">
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
                  <h3>Register</h3>
                  <p>Already have an account? <Link href="/login"><a>Sign in </a></Link></p>
                </div>
                <div className="login__form">
                  <form onSubmit={handleSubmit}>
                    <div className="login__input-box">
                      <div className="login__input-title">
                        <h4>Enter name <span>*</span></h4>
                      </div>
                      <div className="login__input">
                        <input id='name' value={values.name} onChange={handleChange} onBlur={handleBlur} 
                        type="text" placeholder="Your full name" />
                        {touched.name && <ErrorMsg error={errors.name} />}
                        <span className="login__input-icon">
                          <i className="fa-solid fa-user"></i>
                        </span>
                      </div>
                    </div>
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
                    <div className="login__input-box">
                      <div className="login__input-title d-flex align-items-center justify-content-between">
                        <h4>Password <span>*</span></h4>
                        <div className="forgot-password">
                          <Link href="/forget"> 
                           <a>Forgot Password?</a>
                          </Link>
                        </div>
                      </div>
                      <div className="login__input">
                        <input name='password' value={values.password} onChange={handleChange} onBlur={handleBlur} 
                        type={showPassword ? "text" : "password"} placeholder="Enter your Password" />
                        {touched.password && <ErrorMsg error={errors.password} />}
                        <span className="login__input-icon">
                          <i className="fa-light fa-lock"></i>
                        </span>
                        <span onClick={() => setShowPassword(!showPassword)} className="login__input-password-visible">
                          <i className="fa-light fa-eye"></i>
                        </span>
                      </div>
                    </div>

                    <div className="login__btn mb-20">
                      <button className="tp-btn-4 w-100">register</button>
                    </div>
                    <div className="login__signup text-center">
                      <p>Or <Link href="/login"><a>Sing in</a></Link> with email</p>
                    </div>
                    <div className="login__option-wrapper">
                      <div className="login__option-item mb-15">
                        <a href="#" className="login__option-btn w-100">
                          <img src="assets/img/icon/google.png" alt="" /> Continue with Google</a>
                      </div>
                      <div className="login__option-item">
                        <a href="#" className="login__option-btn w-100">
                          <img src="assets/img/icon/facebook.png" alt="" /> Continue with Facebook</a>
                      </div>
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

export default RegisterArea;