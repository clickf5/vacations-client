import React from 'react';
import Alert from './Alert.jsx';
import withTimerRedirect from '../../hoc/withTimerRedirect.js';

const TimerAlert = (props) => {
  const {
    counter,
    redirectTo,
    type,
    children,
  } = props;

  return <Alert type={type}>{`${children} After ${counter} seconds, you will be redirected to "${redirectTo}" page`}</Alert>;
};

export default withTimerRedirect(TimerAlert);
