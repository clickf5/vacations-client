import React from 'react';
import authRedirect from '../hoc/authRedirect';

const Main = () => <div>Hello world!</div>;

export default authRedirect(Main);
