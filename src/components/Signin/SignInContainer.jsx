import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import SignInForm from './SignInForm.jsx';
import { useAuth } from '../../hooks/useAuth.js';

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

  const auth = useAuth();
  const history = useHistory();

  const onSubmit = async (values, { setStatus }) => {
    const { email, password } = values;
    const result = await auth.signIn(email, password);
    if (result.success) {
      history.push('/app');
    }
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
  }, []);

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
      status={formik.status}
    />
  );
};

export default SignInContainer;
