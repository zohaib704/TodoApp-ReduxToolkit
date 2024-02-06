import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const NavBar = () => {
  const allusers = useSelector((state) => state.app.users);
  return (
    <div>
      <nav
        className="relative flex w-full flex-nowrap items-center justify-between bg-[#813535] py-2 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 lg:flex-wrap lg:justify-start lg:py-4"
        data-te-navbar-ref
      >
        <div className="flex w-full flex-wrap items-center justify-between px-3">
          {/* <!-- Collapsible navbar container --> */}
          <div
            className="!visible mt-2 flex-grow basis-[100%] items-center lg:mt-0 lg:!flex lg:basis-auto"
            id="navbarSupportedContent13"
            data-te-collapse-item
          >
            <div className="ml-2">
              <Link
                to="/"
                className="text-xl text-neutral-800 dark:text-neutral-200"
              >
                TODO APP
              </Link>
            </div>
            {/* <!-- Left links --> */}
            <ul
              className="list-style-none mr-auto flex flex-col pl-0 lg:mt-1 lg:flex-row"
              data-te-navbar-nav-ref
            >
              <li
                className="my-4 pl-2 lg:my-0 lg:pl-2 lg:pr-1"
                data-te-nav-item-ref
              >
                <Link
                  to="/"
                  className="active disabled:text-black/30 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                  aria-current="page"
                  data-te-nav-link-ref
                >
                  Create Post
                </Link>
              </li>

              <li
                className="mb-4 pl-2 lg:mb-0 lg:pl-0 lg:pr-1"
                data-te-nav-item-ref
              >
                <Link
                  to="/read"
                  className="p-0 text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                  data-te-nav-link-ref
                >
                  All Post ({allusers.length})
                </Link>
              </li>
            </ul>
            <div className="w-[300px] lg:pr-2">
              <div className="relative flex w-full flex-wrap items-stretch">
                <input
                  type="search"
                  className="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none motion-reduce:transition-none dark:border-neutral-500 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="button-addon3"
                />

                <button
                  className="relative z-[2] rounded-r border-2 border-primary px-6 py-2 text-xs font-medium uppercase text-primary transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 motion-reduce:transition-none"
                  type="button"
                  id="button-addon3"
                  data-te-ripple-init
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
