import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './AuthNav.module.css';

export default function AuthNav() {
  return (
    <div>
      <NavLink
        to="/register"
        className={({ isActive }) =>
          isActive ? `${style.activeLink}` : `${style.link}`
        }
      >
        Registration
      </NavLink>
      <NavLink
        to="/login"
        className={({ isActive }) =>
          isActive ? `${style.activeLink}` : `${style.link}`
        }
      >
        Login
      </NavLink>
    </div>
  );
}
