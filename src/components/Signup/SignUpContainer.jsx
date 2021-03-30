import React, { useRef, useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import SignUpForm from './SignUpForm.jsx';

const SignUpContainer = () => {
  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(3, 'Too short!')
      .required('Required'),
    lastName: Yup.string()
      .min(3, 'Too short!')
      .required('Required'),
    email: Yup.string()
      .email('Invalid email')
      .required('Required'),
    password: Yup.string()
      .min(8, 'Too short')
      .required('Required'),
  });

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
    validationSchema,
    onSubmit,
  });

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, [inputRef]);

  return (
    <SignUpForm
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

export default SignUpContainer;
