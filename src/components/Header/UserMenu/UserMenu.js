import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import hs from '../Header.module.css';
import PropTypes from 'prop-types';

const UserMenu = ({ match }) => {
  return (
    <div className={hs.navList}>
      <p className={hs.navItem}>Email</p>
      <button type="button">Exit</button>
    </div>
    // <ul className={hs.navList}>
    //   <li>
    //     <NavLink
    //       exact
    //       to={`${match.url}register`}
    //       className={hs.navLink}
    //       activeClassName={hs.navLink_active}
    //     >
    //       Register
    //     </NavLink>
    //   </li>
    //   <li className={hs.navItem}>
    //     <NavLink
    //       to={`${match.url}login`}
    //       className={hs.navLink}
    //       activeClassName={hs.navLink_active}
    //     >
    //       Login
    //     </NavLink>
    //   </li>
    // </ul>
  );
};
UserMenu.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }),
};
export default withRouter(UserMenu);
