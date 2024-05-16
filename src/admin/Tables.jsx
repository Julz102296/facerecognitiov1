import React, { useState } from 'react'
import Header from './Header'

export default function Tables() {

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <Header />
      <h1>Tables</h1>
      {/* student table */}
      <div className="flex justify-center mt-10">
        <div className="bg-white w-full md:w-auto shadow-lg">
          <div className="rounded-lg border border-gray-200">
          <h3 className="text-2xl font-bold p-5">Students</h3>

          {/* filter */}
          <div className="flex justify-center gap-10 p-2">
            <div className="sm:flex sm:items-center sm:justify-between">

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

              <button>
              <a
                className="inline-block rounded border border-green-600 px-4 py-1 text-sm font-medium text-green-600 hover:bg-green-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500"
                href="#"
              >
                Print
              </a>
              </button>

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
                        View
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* end student table */}

      {/* instructor table */}
      <div className="flex justify-center mt-10">
        <div className="bg-white w-full md:w-auto shadow-lg">
          <div className="rounded-lg border border-gray-200">
          <h3 className="text-2xl font-bold p-5">Instructor</h3>

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

            <button>
              <a
                className="inline-block rounded border border-green-600 px-4 py-1 text-sm font-medium text-green-600 hover:bg-green-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500"
                href="#"
              >
                Print
              </a>
              </button>

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
                        View
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* end instructor table */}

      {/* staff table */}
      <div className="flex justify-center mt-10">
        <div className="bg-white w-full md:w-auto shadow-lg">
          <div className="rounded-lg border border-gray-200">
          <h3 className="text-2xl font-bold p-5">Staff</h3>

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

            <button>
              <a
                className="inline-block rounded border border-green-600 px-4 py-1 text-sm font-medium text-green-600 hover:bg-green-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500"
                href="#"
              >
                Print
              </a>
              </button>

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
                        View
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* end staff table */}
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
          <h2 className="text-2xl font-bold mb-4 m-5">User Details</h2>
              {/* alert message */}          

              <div className="col-span-8 mb-5">
                <p className="text-sm text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, modi.
                </p>
              </div>

        </div>
    </div>
      )}

    </div>
  )
}
