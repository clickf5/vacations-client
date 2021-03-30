import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const RedirectSuccess = (props) => {
  const { redirectTo } = props;

  const [counter, setCounter] = useState(5);

  const history = useHistory();

  useEffect(() => {
    const timerId = setInterval(() => {
      setCounter((seconds) => {
        if (seconds === 1) {
          history.push(redirectTo);
        }
        return (seconds - 1);
      });
    }, 1000);
    return () => clearInterval(timerId);
  }, []);

  return (
    <div className="bg-green-200 border-green-600 text-green-600 border-l-4 p-4" role="alert">
      <p className="font-bold">
        Success
      </p>
      <p>
        {`Congratulations! After ${counter} seconds you redirect to sign in page.`}
      </p>
    </div>
  );
};

export default RedirectSuccess;
