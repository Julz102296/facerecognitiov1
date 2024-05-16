import React, { useState } from 'react';
import Header from './Header';

export default function Forms() {
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

  return (
    <div>
      <Header />
      
      {/* Forms */}
      <div className="bg-gray-200">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="text-center sm:text-left">
              <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">Welcome Back Tol!</h1>
              <p className="mt-1.5 text-sm text-gray-500">Let's create a new user!</p>
            </div>

            <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
              <button
                className="block rounded-lg bg-blue-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-700 focus:outline-none focus:ring"
                type="button"
                onClick={openModal}
              >
                Create New User
              </button>
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
            <h2 className="text-2xl font-bold mb-4">Create New User</h2>
                    {/* alert message */}

                    {showAlert && (
                      <div className="mt-4 bg-green-200 border border-green-600 text-green-800 px-4 py-2 rounded-md">
                        User created successfully!
                      </div>
                    )}
            
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
                          type="text"
                          id="LastName"
                          name="last_name"
                          className="mt-1 w-full rounded-md p-3 border border-gray-200 bg-gray-100 text-sm text-gray-700 shadow-sm"
                        />
                      </div>

                      <div className="col-span-6">
                        <label htmlFor="Email" className="block text-sm font-medium text-gray-700"> Email </label>

                        <input
                          type="email"
                          id="Email"
                          name="email"
                          className="mt-1 w-full rounded-md p-3 border border-gray-200 bg-gray-100 text-sm text-gray-700 shadow-sm"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="Password" className="block text-sm font-medium text-gray-700"> Password </label>

                        <input
                          type="password"
                          id="Password"
                          name="password"
                          className="mt-1 w-full rounded-md p-3 border border-gray-200 bg-gray-100 text-sm text-gray-700 shadow-sm"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="PasswordConfirmation" className="block text-sm font-medium text-gray-700">
                          Password Confirmation
                        </label>

                        <input
                          type="password"
                          id="PasswordConfirmation"
                          name="password_confirmation"
                          className="mt-1 w-full rounded-md p-3 border border-gray-200 bg-gray-100 text-sm text-gray-700 shadow-sm"
                        />
                      </div>

                      <div className="col-span-6">
                        <label htmlFor="MarketingAccept" className="flex gap-4">
                          <input
                            type="checkbox"
                            id="MarketingAccept"
                            name="marketing_accept"
                            className="size-5 rounded-md border-gray-200 bg-white shadow-sm"
                          />

                          <span className="text-sm text-gray-700">
                            I want to receive emails about events, product updates and company announcements.
                          </span>
                        </label>
                      </div>

                      <div className="col-span-6">
                        <p className="text-sm text-gray-500">
                          By creating an account, you agree to our
                          <a href="#" className="text-gray-700 underline"> terms and conditions </a>
                          and
                          <a href="#" className="text-gray-700 underline">privacy policy</a>.
                        </p>
                      </div>

                      <div className="mt-4">
                        <button
                          type="submit"
                          className="block rounded-lg bg-green-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-green-700 focus:outline-none focus:ring"
                          onClick={handleSubmit}
                        >
                          Submit
                        </button>

                      </div>
                    </form>
          </div>
      </div>
)}

    </div>
  );
}
