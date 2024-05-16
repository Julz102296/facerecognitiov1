import React from 'react'
import Header from './Header'

export default function AdminHome() {
  return (
    <div>
      <section className="bg-gray-50">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-xl text-center">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              Hello Admin
              <strong className="font-extrabold text-blue-600 sm:block"> Welcome Back! </strong>
            </h1>

          </div>
        </div>
      </section>

    </div>
  )
}
