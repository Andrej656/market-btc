import { useFormik } from 'formik';

import ErrorMsg from '../ErrorMsg';
import { blogSchema } from '../validation-schema';

const BlogForm = () => {
  const handleOnSubmit = (values, { resetForm }) => {
    alert(`${values.name + "\n" + values.email + "\n" + values.msg}`);
    resetForm()
  }
  const { handleChange, handleSubmit, handleBlur, errors, values, touched } = useFormik({
    initialValues: { name: '', email: '', msg: '' },
    validationSchema: blogSchema,
    onSubmit: handleOnSubmit,
  })
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-xxl-6 col-xl-6 col-lg-6">
            <div className="postbox__comment-input-box">
              <h4>Name <span>*</span></h4>
              <div className="postbox__comment-input">
                <input id='name' value={values.name} onChange={handleChange} onBlur={handleBlur}
                  type="text" placeholder="Enter Your Name" />
                {touched.name && <ErrorMsg error={errors.name} />}
              </div>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6">
            <div className="postbox__comment-input-box">
              <h4>Email <span>*</span></h4>
              <div className="postbox__comment-input">
                <input id='email' value={values.email} onChange={handleChange} onBlur={handleBlur}
                  type="email" placeholder="Enter Your Email" />
                {touched.email && <ErrorMsg error={errors.email} />}
              </div>
            </div>
          </div>
          <div className="col-xxl-12">
            <div className="postbox__comment-input-box">
              <h4>Your Comment</h4>
              <div className="postbox__comment-input">
                <textarea id='msg' value={values.msg} onChange={handleChange} onBlur={handleBlur} 
                placeholder="Your comment here..."></textarea>
                {touched.msg && <ErrorMsg error={errors.msg} />}
              </div>
            </div>
          </div>
          <div className="col-xxl-12">
            <div className="postbox__comment-btn">
              <button type="submit" className="tp-btn-4 w-100">Submit Comment</button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default BlogForm;