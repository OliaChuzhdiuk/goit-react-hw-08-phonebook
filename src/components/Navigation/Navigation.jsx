import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import style from './Navigation.module.css';
import { authSelectors } from 'redux/auth';

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? `${style.activeLink}` : `${style.link}`
        }
      >
        Main
      </NavLink>

      {isLoggedIn && (
        <NavLink
          to="/contacts"
          className={({ isActive }) =>
            isActive ? `${style.activeLink}` : `${style.link}`
          }
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
