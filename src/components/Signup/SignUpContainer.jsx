import React, { useRef, useEffect } from 'react';
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

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  return (
    <SignUpForm
      handleChange={formik.handleChange}
      handleSubmit={formik.handleSubmit}
      values={formik.values}
      inputRef={inputRef}
    />
  );
};

export default SignUpContainer;
