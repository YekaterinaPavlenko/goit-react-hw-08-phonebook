import React from 'react';
import { withRouter } from 'react-router-dom';
import hs from '../Header.module.css';
import PropTypes from 'prop-types';

const UserMenu = () => {
  return (
    <div className={hs.navList}>
      <p className={hs.navItem}>Email</p>
      <button type="button">Logout</button>
    </div>
  );
};
// UserMenu.propTypes = {
//   match: PropTypes.shape({
//     url: PropTypes.string.isRequired,
//   }),
// };
export default withRouter(UserMenu);
