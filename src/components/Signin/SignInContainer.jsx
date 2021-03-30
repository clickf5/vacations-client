import React from 'react';
import { useFormik } from 'formik';
import SignInForm from './SignInForm.jsx';

const SignInContainer = () => {
  const initialValues = {
    email: '',
    password: '',
  };
  const onSubmit = (values) => {
    alert(JSON.stringify(values, null, 2));
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
  });

  return (
    <SignInForm
      handleChange={formik.handleChange}
      handleSubmit={formik.handleSubmit}
      values={formik.values}
    />
  );
};

export default SignInContainer;
