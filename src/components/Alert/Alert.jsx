import React from 'react';
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
    type,
    children,
  } = props;

  const styleClass = getClass(type);

  return (
    <div className={styleClass} role="alert">
      <p className="font-bold">
        {type.toUpperCase()}
      </p>
      <p>
        {children}
      </p>
    </div>
  );
};

export default Alert;
