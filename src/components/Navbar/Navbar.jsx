import { NavLink } from "react-router-dom";
import logo from "../../assets/logoText.png";
import illustration from "../../assets/giphy.gif";

const Navbar = () => {
  return (
    <div className="bg-slate-900 w-full mx-auto sticky top-0 z-50">
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#15802a"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "border-b-4 border-primary"
                      : "hover:border-b-4 border-primary"
                  }
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              {/* <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "border-b-4 border-primary" : "hover:border-b-4 border-primary"
                }
                to="/early-bird"
              >
                Early Bird
              </NavLink>
            </li> */}
              <li className="">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "border-b-4 border-primary"
                      : "hover:border-b-4 border-primary"
                  }
                  to="/our-story"
                >
                  Our Story
                </NavLink>
              </li>
              <li className="">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "border-b-4 border-primary"
                      : "hover:border-b-4 border-primary"
                  }
                  to="/operator"
                >
                  Operators
                </NavLink>
              </li>
              <li className="">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "border-b-4 border-primary"
                      : "hover:border-b-4 border-primary"
                  }
                  to="/drivers"
                >
                  Drivers
                </NavLink>
              </li>
              <li className="">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "border-b-4 border-primary"
                      : "hover:border-b-4 border-primary"
                  }
                  to="/users"
                >
                  Users
                </NavLink>
              </li>
              <li className="">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "border-b-4 border-primary"
                      : "hover:border-b-4 border-primary"
                  }
                  to="/join-us"
                >
                  Join Us
                </NavLink>
              </li>
              {/* <li className="">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "border-b-4 border-primary" : "hover:border-b-4 border-primary"
                }
                to="/articles"
              >
                Articles
              </NavLink>
            </li> */}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">
            <img className="w-36 -mt-10" src={logo} alt="" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex items-center gap-2 lg:gap-5 lg:space-x-8 px-1 lg:px-3 text-xl font-medium text-base-100">
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "border-b-4 border-primary pb-1"
                    : "hover:border-b-4 border-primary pb-1"
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            {/* <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "border-b-4 border-primary" : "hover:border-b-4 border-primary"
                }
                to="/early-bird"
              >
                Early Bird
              </NavLink>
            </li> */}
            <li className="">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "border-b-4 border-primary pb-1"
                    : "hover:border-b-4 border-primary pb-1"
                }
                to="/our-story"
              >
                Our Story
              </NavLink>
            </li>
            <li className="">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "border-b-4 border-primary pb-1"
                    : "hover:border-b-4 border-primary pb-1"
                }
                to="/operator"
              >
                Operators
              </NavLink>
            </li>
            <li className="">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "border-b-4 border-primary pb-1"
                    : "hover:border-b-4 border-primary pb-1"
                }
                to="/drivers"
              >
                Drivers
              </NavLink>
            </li>
            <li className="">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "border-b-4 border-primary pb-1"
                    : "hover:border-b-4 border-primary pb-1"
                }
                to="/users"
              >
                Users
              </NavLink>
            </li>
            <li className="">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "border-b-4 border-primary pb-1"
                    : "hover:border-b-4 border-primary pb-1"
                }
                to="/join-us"
              >
                Join Us
              </NavLink>
            </li>
            {/* <li className="hover:border-b-4 border-primary pb-1">
              <a className="" href="#articles">Articles</a>
            </li> */}
            {/* <li className="">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "border-b-4 border-primary pb-1" : "hover:border-b-4 border-primary pb-1"
                }
                to="/articles"
              >
                Articles
              </NavLink>
            </li> */}
          </ul>
        </div>
        <div className="navbar-end">
          <img className="w-[5rem] lg:w-[8rem]" src={illustration} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
