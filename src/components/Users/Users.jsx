import React from 'react';
import cn from 'classnames';

const Users = ({ users }) => {
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
          <a href="#" className="text-indigo-600 hover:text-indigo-900">
            Edit
          </a>
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
        <div className="text-end">
          <form className="flex w-full max-w-sm space-x-3">
            <div className=" relative ">
              <input type="text" id="&quot;form-subscribe-Filter" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="name" />
            </div>
            <button className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200" type="submit">
              Filter
            </button>
          </form>
        </div>
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
                <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal" />
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
