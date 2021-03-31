import React, { useRef, useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import routes from '../../routes.js';
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

  const [status, setStatus] = useState(0);

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  };

  const onSubmit = async (values) => {
    try {
      await axios.post(routes.signUpPath(), values);
      setStatus(1);
    } catch (error) {
      setStatus(2);
    }
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
      status={status}
    />
  );
};

export default SignUpContainer;
