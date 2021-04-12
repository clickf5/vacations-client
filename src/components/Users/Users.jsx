import React from 'react';
import cn from 'classnames';

const Users = (props) => {
  const { users, approveHandler, dismissHandler } = props;
  const renderRows = (u) => u.map((user) => {
    const {
      _id: id,
      firstName,
      lastName,
      email,
      role,
      approved,
    } = user;

    const statusClass = cn(
      'absolute',
      'inset-0',
      { 'bg-green-200': approved },
      { 'bg-red-200': !approved },
      'opacity-50',
      'rounded-full',
    );

    return (
      <tr key={id}>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-900 whitespace-no-wrap">
            {`${firstName} ${lastName}`}
          </p>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-900 whitespace-no-wrap">
            {email}
          </p>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-900 whitespace-no-wrap">
            {role.join(' ')}
          </p>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
            <span aria-hidden="true" className={statusClass} />
            <span className="relative">
              {approved ? 'Yes' : 'No' }
            </span>
          </span>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          {approved ? (
            <button
              type="button"
              className="px-4 py-1 flex justify-center items-center  bg-red-500 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white transition ease-in duration-200 text-center font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-full"
              onClick={dismissHandler(id)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
              </svg>
              Dismiss
            </button>
          ) : (
            <button
              type="button"
              className="px-4 py-1 flex justify-center items-center  bg-green-500 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white transition ease-in duration-200 text-center font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-full"
              onClick={approveHandler(id)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Approve
            </button>
          )}

        </td>
      </tr>
    );
  });

  return (
    <div className="py-4">
      <div className="flex flex-row mb-1 sm:mb-0 justify-between w-full">
        <h2 className="text-2xl leading-tight">
          Users
        </h2>
      </div>
      <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
        <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
          <table className="min-w-full leading-normal">
            <thead>
              <tr>
                <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                  User
                </th>
                <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                  Email
                </th>
                <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                  Role
                </th>
                <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                  Approved
                </th>
                <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {renderRows(users)}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;
