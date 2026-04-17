import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { logout } from "../../features/user/userSlice";
import type { RootState, AppDispatch } from "../../app/store";

export default function Navbar() {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const user = useSelector((state: RootState) => state.user.name);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <nav className="flex items-center gap-4 bg-black p-4 text-white">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>

      {user ? (
        <>
          <span className="ml-auto">Welcome, {user}</span>

          <button
            onClick={handleLogout}
            className="ml-4 text-red-400 hover:text-red-500"
          >
            Logout
          </button>
        </>
      ) : (
        <span className="ml-auto text-gray-400">Guest</span>
      )}
    </nav>
  );
}