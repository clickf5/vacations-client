import React, { useEffect, useState } from 'react';
import withRedirect from './withRedirect.js';

export default (ComposeComponent) => {
  const WithTimerRedirect = (props) => {
    const {
      seconds = 5,
    } = props;

    const [counter, setCounter] = useState(seconds);
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
      const handler = () => {
        setCounter((s) => {
          if (s === 0) {
            setRedirect(true);
          }
          return s - 1;
        });
      };

      const timerId = setInterval(handler, 1000);
      return () => clearInterval(timerId);
    }, []);

    const Component = withRedirect(ComposeComponent);
    return <Component redirect={redirect} counter={counter} {...props} />;
  };

  return WithTimerRedirect;
};
