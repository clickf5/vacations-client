import React, { useRef, useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import SignUpForm from './SignUpForm.jsx';
import { useAuth } from '../../hooks/useAuth';

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

  const auth = useAuth();

  const onSubmit = async (values, { setStatus }) => {
    const {
      firstName, lastName, email, password,
    } = values;

    const result = await auth.signUp(firstName, lastName, email, password);

    setStatus(result);
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
      status={formik.status}
    />
  );
};

export default SignUpContainer;
