import React, { useState } from 'react';
import Header from './Header';

export default function Users() {
  const [showModal, setShowModal] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleSubmit = () => {

    setShowAlert(true);
  };

  const handleDelete = () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this user?");
    if (confirmDelete) {

      alert("User Successfully deleted");
    } else {

      alert("Delete action cancelled");
    }
  };

  return (
    <div>
      <Header />


      {/* Table */}
      <div className="flex justify-center mt-10">
        <div className="bg-white w-full md:w-auto shadow-lg">
          <div className="rounded-lg border border-gray-200">

          {/* filter */}
          <div className="flex justify-center gap-10 p-2">
            <div class="sm:flex sm:items-center sm:justify-between">

            <div className="relative">
              <label htmlFor="Search" className="sr-only"> Search </label>

              <input
                type="text"
                id="Search"
                placeholder="Search"
                className="w-full rounded-md border-gray-200 py-2.5 pe-10 shadow-sm sm:text-sm p-2"
              />

              <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
                <button type="button" className="text-gray-600 hover:text-gray-700">
                  <span className="sr-only">Search</span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                  </svg>
                </button>
              </span>
            </div>

            <div className="top-0 right-0 text-gray-500 transition hover:text-gray-600 p-5">
              <label for="SortBy" className="sr-only">Sort By</label>

              <select id="SortBy" className="h-10 rounded border-gray-300 text-sm">
                <option>Sort By</option>
                <option value="Title, DESC">ID, DESC</option>
                <option value="Title, ASC">ID, ASC</option>
                <option value="Price, DESC">Name, DESC</option>
                <option value="Price, ASC">Name, ASC</option>
              </select>
            </div>
            </div>
          </div>


            {/* table */}
            <div className="overflow-x-auto rounded-t-lg">
              <table className="w-full md:min-w-max divide-y-2 divide-gray-200 bg-white text-sm">
                <thead className="ltr:text-left rtl:text-right">
                  <tr>
                    <th className="sticky inset-y-0 start-0 bg-white px-4 py-2">
                      <label htmlFor="SelectAll" className="sr-only">Select All</label>
                      <input type="checkbox" id="SelectAll" className="size-5 rounded border-gray-300" />
                    </th>
                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">User ID</th>
                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Firstname</th>
                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Lastname</th>
                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Email</th>
                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Type</th>
                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="sticky inset-y-0 start-0 bg-white px-4 py-2">
                      <label className="sr-only" htmlFor="Row1">Row 1</label>
                      <input className="size-5 rounded border-gray-300" type="checkbox" id="Row1" />
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-900">1</td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-900">John</td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-900">Doe</td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-900">john@example.com</td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-900">Admin</td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-900">
                      <button
                        className="bg-green-500 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded"
                        onClick={openModal}
                      >
                        Edit
                      </button>
                      <span> </span>
                      <button 
                        className="bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded"
                        onClick={handleDelete}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
      <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-50"></div>
        <div className="bg-white rounded-lg p-8 z-50 relative">
          {/* Close button */}
          <button
            className="absolute top-0 right-0 text-gray-500 transition hover:text-gray-600 p-5"
            onClick={closeModal}
          >
            <span className="sr-only">Dismiss popup</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Modal */}
          <h2 className="text-2xl font-bold mb-4 m-5">Edit User</h2>
              {/* alert message */}

              {showAlert && (
                <div className="mt-4 bg-green-200 border border-green-600 text-green-800 px-4 py-2 rounded-md">
                  User updated successfully!
                </div>
              )}
          

              <div className="col-span-8 mb-5">
                <p className="text-sm text-gray-500">
                  By creating an account, you agree to our
                  <a href="#" className="text-gray-700 underline"> terms and conditions </a>
                  and
                  <a href="#" className="text-gray-700 underline">privacy policy</a>.
                </p>
              </div>

                <form action="#" className="space-y-4">
                <div className="col-span-6">
                <label htmlFor="TypeofHuman" className="block text-sm font-medium text-gray-700"> Type of Human </label>

                <select
                  name="TypeofHuman"
                  id="TypeofHuman"
                  className="mt-1 w-full rounded-md p-3 border border-gray-200 bg-gray-100 text-sm text-gray-700 shadow-sm"
                >
                  <option value="">Please select</option>
                  <option value="student">Student</option>
                  <option value="instructor">Intructor</option>
                </select>
                </div>

                <div className="col-span-2 sm:col-span-3">
                  <label htmlFor="FirstName" className="block text-sm font-medium text-gray-700">
                    First Name
                  </label>

                  <input
                    placeholder="John"
                    type="text"
                    id="FirstName"
                    name="first_name"
                    className="mt-1 w-full rounded-md p-3 border border-gray-200 bg-gray-100 text-sm text-gray-700 shadow-sm"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="LastName" className="block text-sm font-medium text-gray-700">
                    Last Name
                  </label>

                  <input
                    placeholder="Doe"
                    type="text"
                    id="LastName"
                    name="last_name"
                    className="mt-1 w-full rounded-md p-3 border border-gray-200 bg-gray-100 text-sm text-gray-700 shadow-sm"
                  />
                </div>

                <div className="col-span-6">
                  <label htmlFor="Email" className="block text-sm font-medium text-gray-700"> Email </label>

                  <input
                    placeholder="john@example.com"
                    type="email"
                    id="Email"
                    name="email"
                    className="mt-1 w-full rounded-md p-3 border border-gray-200 bg-gray-100 text-sm text-gray-700 shadow-sm"
                  />
                </div>

                <div className="mt-4">
                    <button
                      type="submit"
                      className="block rounded-lg bg-green-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-green-700 focus:outline-none focus:ring"
                      onClick={handleSubmit}
                    >
                      Update
                    </button>

                  </div>
                </form>
        </div>
    </div>
      )}
    </div>
  );
}
