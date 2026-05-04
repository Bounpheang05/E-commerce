import { NavLink } from "react-router-dom";
import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
// import { useAuth } from "../hook/useAuth";
// import UserMenu from "../components/user/UserMenu";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
    // const { user, logout } = useAuth();

  const navItems = [
    { id: 1, label: "Home", path: "/" },
    { id: 2, label: "Bestsellers", path: "/bestsellers" },
    { id: 3, label: "New Arrivals", path: "/newArrival" },
    { id: 4, label: "About", path: "/about" },
  ];

  return (
    <header className=" shadow-md bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        
        {/* Logo */}
        <NavLink to="/" className="text-xl font-bold cursor-pointer">
          ModernShop
        </NavLink>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <li key={item.id}>
              <NavLink
                to={item.path}
                end={item.path === "/"}
                className={({ isActive }) =>
                  `relative text-sm font-semibold transition ${
                    isActive
                      ? "text-primary after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-primary"
                      : "text-gray-600 hover:text-primary"
                  }`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          
          {/* Search (hidden on mobile) */}
          <div className="hidden md:flex items-center bg-gray-100 rounded-md px-3 py-1">
            <IoIosSearch className="text-gray-500 text-lg" />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent outline-none px-2 text-sm"
            />
           
          </div>
           {/* {user ? (
            <UserMenu user={user} logout={logout} />
          ) : (
            <NavLink to="/auth/login">Login</NavLink>
          )} */}
          {/* Cart */}
          <FaCartShopping className="text-xl cursor-pointer hover:text-black" />

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl cursor-pointer "
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-4 p-4 bg-white">
          {navItems.map((item) => (
            <li key={item.id}>
              <NavLink
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "text-primary font-semibold"
                    : "text-gray-600"
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}

          {/* Mobile Search */}
          <div className="flex items-center bg-gray-100 rounded-md px-3 py-2">
            <IoIosSearch className="text-gray-500" />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent outline-none px-2 w-full"
            />
          </div>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;