import React, { useRef, useEffect } from 'react';
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

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  return (
    <SignInForm
      handleChange={formik.handleChange}
      handleSubmit={formik.handleSubmit}
      values={formik.values}
      inputRef={inputRef}
    />
  );
};

export default SignInContainer;
