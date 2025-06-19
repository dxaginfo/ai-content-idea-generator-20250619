import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { logout } from '../redux/slices/authSlice';

const Navbar: React.FC = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector((state: RootState) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <nav className="bg-indigo-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">AI Content Idea Generator</Link>
        
        <div className="flex items-center space-x-4">
          <Link to="/" className="hover:text-indigo-200">Home</Link>
          
          {isAuthenticated ? (
            <>
              <Link to="/generator" className="hover:text-indigo-200">Generator</Link>
              <Link to="/saved" className="hover:text-indigo-200">Saved Ideas</Link>
              <Link to="/calendar" className="hover:text-indigo-200">Calendar</Link>
              <span className="text-indigo-200">Hi, {user?.name}</span>
              <button 
                onClick={handleLogout}
                className="bg-white text-indigo-600 px-3 py-1 rounded hover:bg-indigo-100"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link 
                to="/login"
                className="bg-white text-indigo-600 px-3 py-1 rounded hover:bg-indigo-100"
              >
                Login
              </Link>
              <Link 
                to="/register"
                className="bg-transparent border border-white px-3 py-1 rounded hover:bg-indigo-700"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
