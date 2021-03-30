import React from 'react';
import { useFormik } from 'formik';
import SignUpForm from './SignUpForm.jsx';

const SignUpContainer = () => {
  const initialValues = {
    firstName: '',
    lastName: '',
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
    <SignUpForm
      handleChange={formik.handleChange}
      handleSubmit={formik.handleSubmit}
      values={formik.values}
    />
  );
};

export default SignUpContainer;
