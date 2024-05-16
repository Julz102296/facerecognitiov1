import React from 'react'
import Header from './Header'

export default function Dashboard() {
  return (
    <div>
      <Header />  
    <section className="bg-white">
      <div className="mx-auto max-w-screen-xl sm:px-6 md:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
              Hello Admin
            <strong className="font-extrabold text-blue-600 sm:block"> Welcome Back! </strong>
          </h1>
          <p className="mt-4 text-gray-500 sm:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dolores laborum labore
            provident impedit esse recusandae facere libero harum sequi.
          </p>
        </div>

        <div className="mt-8 sm:mt-12">
          <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center">
              <dt className="order-last text-lg font-medium text-gray-500">Total Sales</dt>

              <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">₱4.8m</dd>
            </div>

            <div className="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center">
              <dt className="order-last text-lg font-medium text-gray-500">Total Audit</dt>

              <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">23,058.99</dd>
            </div>

            <div className="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center">
              <dt className="order-last text-lg font-medium text-gray-500">Total Addons</dt>

              <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">86,442.08</dd>
            </div>
          </dl>
        </div>

        <article className="flex flex-col gap-4 rounded-lg border border-gray-100 bg-white p-6">
          <div className="inline-flex gap-2 self-end rounded bg-green-100 p-1 text-green-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
              />
            </svg>

            <span className="text-xs font-medium"> 67.81% </span>
          </div>

          <div>
            <strong className="block text-sm font-medium text-gray-500"> Profit </strong>

            <p>
              <span className="text-2xl font-medium text-gray-900"> $404.32 </span>

              <span className="text-xs text-gray-500"> from $240.94 </span>
            </p>
          </div>
        </article>

<article className="flex flex-col gap-4 rounded-lg border border-gray-100 bg-white p-6">
  <div className="inline-flex gap-2 self-end rounded bg-red-100 p-1 text-red-600">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
      />
    </svg>

    <span className="text-xs font-medium"> 67.81% </span>
  </div>

  <div>
    <strong className="block text-sm font-medium text-gray-500"> Profit </strong>

    <p>
      <span className="text-2xl font-medium text-gray-900"> $240.94 </span>

      <span className="text-xs text-gray-500"> from $404.32 </span>
    </p>
  </div>
</article>

      </div>
    </section>
    
    </div>
  )
}
