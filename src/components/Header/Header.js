import React from 'react';
import { withRouter } from 'react-router-dom';
import hs from './Header.module.css';
import Navigation from './Navigation/Navigation';
import UserMenu from './UserMenu/UserMenu';
import AuthMenu from './AuthMenu/AuthMenu';
import PropTypes from 'prop-types';

const Header = ({ isAuthenticated = true }) => {
  return (
    <header className={hs.header}>
      <div className={hs.container}>
        <Navigation />
        {isAuthenticated ? <UserMenu /> : <AuthMenu />}
      </div>
    </header>
  );
};
Header.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};
export default withRouter(Header);
