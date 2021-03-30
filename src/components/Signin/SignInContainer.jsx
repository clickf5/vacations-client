import React, { useRef, useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import SignInForm from './SignInForm.jsx';

const SignInContainer = () => {
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email')
      .required('Required'),
    password: Yup.string()
      .min(8, 'Too short')
      .required('Required'),
  });

  const initialValues = {
    email: '',
    password: '',
  };

  const onSubmit = (values) => {
    alert(JSON.stringify(values, null, 2));
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, [inputRef]);

  return (
    <SignInForm
      handleChange={formik.handleChange}
      handleSubmit={formik.handleSubmit}
      values={formik.values}
      errors={formik.errors}
      touched={formik.touched}
      isValid={formik.isValid}
      isSubmitting={formik.isSubmitting}
      inputRef={inputRef}
    />
  );
};

export default SignInContainer;
