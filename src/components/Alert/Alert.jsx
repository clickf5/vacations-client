import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import cn from 'classnames';

const basicClass = cn(
  'border-l-4',
  'p-4',
);

const dangerClass = cn(
  'bg-yellow-200',
  'border-yellow-600',
  'text-yellow-600',
  basicClass,
);

const successClass = cn(
  'bg-green-200',
  'border-green-600',
  'text-green-600',
  basicClass,
);

const warningClass = cn(
  'bg-red-200',
  'border-red-600',
  'text-red-600',
  basicClass,
);

const classMappers = {
  danger: dangerClass,
  success: successClass,
  warning: warningClass,
};

const getClass = (type) => classMappers[type];

const Alert = (props) => {
  const {
    type = 'success',
    withRedirect = false,
    redirectTo = '/',
    seconds = 5,
    children,
  } = props;

  const [counter, setCounter] = useState(seconds);
  const [redirect, setRedirect] = useState(false);

  if (withRedirect) {
    useEffect(() => {
      const timerId = setInterval(() => {
        setCounter((s) => {
          if (s === 0) {
            setRedirect(true);
          }
          return (s - 1);
        });
      }, 1000);
      return () => clearInterval(timerId);
    }, []);
  }

  const styleClass = getClass(type);

  return (
    <>
      {redirect ? <Redirect to={redirectTo} /> : (
        <div className={styleClass} role="alert">
          <p className="font-bold">
            Success
          </p>
          <p>
            {children}
            {withRedirect ? ` After ${counter} seconds you redirect to "${redirectTo}" page.` : null}
          </p>
        </div>
      )}
    </>
  );
};

export default Alert;
