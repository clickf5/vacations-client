import React from 'react';
import {
  NavLink,
  useRouteMatch,
} from 'react-router-dom';
import cn from 'classnames';
import useRequireAuth from '../../hooks/useRequireAuth.js';

const basicClass = cn(
  'w-full',
  'font-thin',
  'uppercase',
  'text-gray-500',
  'dark:text-gray-200',
  'flex',
  'items-center',
  'p-4',
  'my-2',
  'transition-colors',
  'duration-200',
  'justify-start',
  'hover:text-purple-500',
);

const activeClass = cn(
  'bg-gradient-to-r',
  'from-white',
  'to-purple-100',
  'border-r-4',
  'border-purple-500',
  'dark:from-gray-700',
  'dark:to-gray-800',
  'text-purple-500',
);

const Sidebar = () => {
  const auth = useRequireAuth();
  const { url, path } = useRouteMatch();

  return (
    <div className="h-screen hidden lg:block my-4 ml-4 shadow-lg relative w-96">
      <div className="bg-white h-full rounded-2xl dark:bg-gray-700">
        <div className="flex items-center justify-center pt-6">
          <span className="text-gray-600 dark:text-gray-300 ml-4 text-2xl font-bold">
            {`${auth.user.firstName} ${auth.user.lastName}`}
          </span>
        </div>
        <nav className="mt-6">
          <div>
            <NavLink to={`${url}/dashboard`} className={basicClass} activeClassName={activeClass}>
              <span className="text-left">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 2048 1792" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1070 1178l306-564h-654l-306 564h654zm722-282q0 182-71 348t-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z" />
                </svg>
              </span>
              <span className="mx-4 text-sm font-normal">
                Dashboard
              </span>
            </NavLink>
            <NavLink to={`${url}/users`} className={basicClass} activeClassName={activeClass}>
              <span className="text-left">
                <svg width="20" height="20" fill="currentColor" className="m-auto" viewBox="0 0 2048 1792" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1024 1131q0-64-9-117.5t-29.5-103-60.5-78-97-28.5q-6 4-30 18t-37.5 21.5-35.5 17.5-43 14.5-42 4.5-42-4.5-43-14.5-35.5-17.5-37.5-21.5-30-18q-57 0-97 28.5t-60.5 78-29.5 103-9 117.5 37 106.5 91 42.5h512q54 0 91-42.5t37-106.5zm-157-520q0-94-66.5-160.5t-160.5-66.5-160.5 66.5-66.5 160.5 66.5 160.5 160.5 66.5 160.5-66.5 66.5-160.5zm925 509v-64q0-14-9-23t-23-9h-576q-14 0-23 9t-9 23v64q0 14 9 23t23 9h576q14 0 23-9t9-23zm0-260v-56q0-15-10.5-25.5t-25.5-10.5h-568q-15 0-25.5 10.5t-10.5 25.5v56q0 15 10.5 25.5t25.5 10.5h568q15 0 25.5-10.5t10.5-25.5zm0-252v-64q0-14-9-23t-23-9h-576q-14 0-23 9t-9 23v64q0 14 9 23t23 9h576q14 0 23-9t9-23zm256-320v1216q0 66-47 113t-113 47h-352v-96q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v96h-768v-96q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v96h-352q-66 0-113-47t-47-113v-1216q0-66 47-113t113-47h1728q66 0 113 47t47 113z" />
                </svg>
              </span>
              <span className="mx-4 text-sm font-normal">
                Users
              </span>
            </NavLink>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
