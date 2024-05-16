import React from 'react'

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="fixed inset-0 bg-black opacity-50"></div>
          <div className="bg-white rounded-lg p-8 z-50 relative">

            {/* Modal */}
            <h2 className="text-2xl font-bold mb-4">Welcome</h2>
                    {/* alert message */}

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
          <option value="instructor">Staff</option>
        </select>
        </div>


        <div className="col-span-6">
          <label htmlFor="MarketingAccept" className="flex gap-4">
            <input
              type="checkbox"
              id="MarketingAccept"
              name="marketing_accept"
              className="size-5 rounded-md border-gray-200 bg-white shadow-sm"
            />
          </label>
        </div>

        <div className="col-span-6">
          <p className="text-sm text-gray-500">
            By selecting a type of user, you agree to our
            <a href="#" className="text-gray-700 underline"> terms and conditions </a>
            and
            <a href="#" className="text-gray-700 underline">privacy policy</a>.
          </p>
        </div>

        <div className="mt-4">
          <button
            type="submit"
            className="block rounded-lg mb-5 bg-green-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-green-700 focus:outline-none focus:ring"
          >
            Next
          </button>

            <a href="/login" className="underline font-bold text-blue-600">Back to Login  </a>


        </div>
      </form>
            
          </div>
      </div>

    </div>
  )
}
