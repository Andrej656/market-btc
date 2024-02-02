import { useFormik } from 'formik';

import NiceSelect from '../ui/NiceSelect';
import ErrorMsg from '../common/ErrorMsg';
import { contactSchema } from '../common/validation-schema';

const ContactArea = () => {

  const handleOnSubmit = (values, { resetForm }) => {
    alert(`${values.name + "\n" + values.email + "\n" + values.msg }`);
    resetForm()
  }
  const { handleChange, handleSubmit, handleBlur, errors, values, touched } = useFormik({
    initialValues: { name: '', email: '', msg: ''},
    validationSchema: contactSchema,
    onSubmit: handleOnSubmit,
  })

  // selectHandler
  const selectHandler = e => {

  }
  return (
    <>
      <section className="contact__area pb-60 p-relative z-index-2">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xxl-10 col-xl-10">
              <div className="contact__wrapper">
                <div className="contact__shape">
                  <img className="contact__shape-1" src="assets/img/icon/contact/contact-shape-1.png" alt="" />
                  <img className="contact__shape-2" src="assets/img/icon/contact/contact-shape-2.png" alt="" />
                  <img className="contact__shape-3" src="assets/img/icon/contact/contact-shape-3.png" alt="" />
                  <img className="contact__shape-4" src="assets/img/icon/contact/contact-shape-4.png" alt="" />
                  <img className="contact__shape-5" src="assets/img/icon/contact/contact-shape-5.png" alt="" />
                </div>
                <div className="contact__content text-center mb-40">
                  <h3>Get in Touch</h3>
                  <p>Need support, have feature requests, looking for partnerships orwould like to make unlimited number of API calls? We respond within 24 hours during business days.</p>
                </div>
                <div className="contact__form">
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-xxl-12">
                        <div className="contact__input-box">
                          <h4>Your name <span>*</span></h4>
                          <div className="contact__input">
                            <input id='name' value={values.name} onChange={handleChange} onBlur={handleBlur} type="text" placeholder="Enter Your Name" />
                            {touched.name && <ErrorMsg error={errors.name} />}
                          </div>
                        </div>
                      </div>
                      <div className="col-xxl-12">
                        <div className="contact__input-box">
                          <h4>Your email <span>*</span></h4>
                          <div className="contact__input">
                            <input id='email' value={values.email} onChange={handleChange} onBlur={handleBlur} type="email" placeholder="Enter Your Email" />
                            {touched.email && <ErrorMsg error={errors.email} />}
                          </div>
                        </div>
                      </div>
                      <div className="col-xxl-6 col-md-6">
                        <div className="contact__input-box">
                          <h4>Select a subject</h4>
                          <div className="contact__input">
                            <NiceSelect
                              options={[
                                { value: 'Service Request', text: 'Service Request' },
                                { value: 'Service 1', text: 'Service 1' },
                                { value: 'Service 2', text: 'Service 2' },
                                { value: 'Service 3', text: 'Service 3' },
                              ]}
                              defaultCurrent={0}
                              onChange={selectHandler}
                              name="Service Request"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-xxl-6 col-md-6">
                        <div className="contact__input-box">
                          <h4>Select country</h4>
                          <div className="contact__input">
                            <NiceSelect
                              options={[
                                { value: 'United States', text: 'United States' },
                                { value: 'United Kingdom', text: 'United Kingdom' },
                                { value: 'Dubai', text: 'Dubai' },
                                { value: 'Canada', text: 'Canada' },
                              ]}
                              defaultCurrent={0}
                              onChange={selectHandler}
                              name="United States"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-xxl-12">
                        <div className="contact__input-box">
                          <h4>Message <span>*</span></h4>
                          <div className="contact__input">
                            <textarea id='msg' value={values.msg} onChange={handleChange} onBlur={handleBlur} placeholder="How we can help you?"></textarea>
                            {touched.msg && <ErrorMsg error={errors.msg} />}
                          </div>
                        </div>
                      </div>
                      <div className="col-xxl-12">
                        <div className="contact__bottom d-sm-flex align-items-center justify-content-between">
                          <div className="contact__agree d-flex align-items-center">
                            <input className="m-check-input" type="checkbox" id="m-lock" />
                            <label className="m-check-label" htmlFor="m-lock">Allow to all tearms & condition</label>
                          </div>
                          <div className="contact__btn">
                            <button type="submit" className="tp-btn-4">send message</button>
                          </div>
                        </div>
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

export default ContactArea;