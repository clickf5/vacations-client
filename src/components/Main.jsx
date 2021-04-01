import React from 'react';
import withAuthRedirect from '../hoc/withAuthRedirect.js';

const Main = () => <div>Hello world!</div>;

export default withAuthRedirect(Main);
