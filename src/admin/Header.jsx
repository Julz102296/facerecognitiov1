import React from 'react'

export default function Header() {
  return (
      <header className="bg-slate-700">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="hidden md:block">
              <nav aria-label="Global">
                <ul className="flex items-center gap-6 text-sm">
                  <li>
                    <a className="text-gray-50 transition hover:text-gray-500/75" href="/dashboard"> Dashboard </a>
                  </li>

                  <li>
                    <a className="text-gray-50 transition hover:text-gray-500/75" href="/users"> Users </a>
                  </li>

                  <li>
                    <a className="text-gray-50 transition hover:text-gray-500/75" href="/forms"> Forms </a>
                  </li>

                  <li>
                    <a className="text-gray-50 transition hover:text-gray-500/75" href="/tables"> Tables </a>
                  </li>

                  <li>
                    <a className="text-gray-50 transition hover:text-gray-500/75" href="/charts"> Charts </a>
                  </li>

                  <li>
                    <a className="text-gray-50 transition hover:text-gray-500/75" href="/settings"> Settings </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="flex items-center gap-4">

            <div className="sticky inset-x-0 bottom-0 border-t border-gray-100">
              <a href="#" className="flex items-center gap-2 p-4">
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  className="size-10 rounded-full object-cover"
                />

                <div>
                  <p className="text-xs">
                    <strong className="block text-white font-medium">Lebron James</strong>

                    <span className="text-gray-50"> Admin </span>
                  </p>
                </div>
              </a>
            </div>

              <div className="sm:flex sm:gap-4">
                {/* <a
                  className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow"
                  href="#"
                >
                  Login
                </a> */}

                <div className="hidden sm:flex">
                <a
                  className="group relative inline-flex items-center overflow-hidden rounded bg-slate-200 px-8 py-3 text-slate-500 focus:outline-none focus:ring active:bg-slate-500"
                  href="/login"
                >
                  <span className="absolute -start-full transition-all group-hover:start-4">
                    <svg
                      className="size-5 rtl:rotate-180"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>

                  <span className="text-sm font-medium transition-all group-hover:ms-4"> Logout </span>
                </a>
                </div>
              </div>

              <div className="block md:hidden">
                <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                  Menu
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
  )
}
