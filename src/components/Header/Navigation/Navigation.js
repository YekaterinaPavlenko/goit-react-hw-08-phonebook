import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import hs from '../Header.module.css';
import PropTypes from 'prop-types';

const Navigation = ({ match }) => {
  // console.log(this.props);
  return (
    <div className={hs.navItem}>
      <NavLink
        exact
        to={`${match.url}`}
        className={hs.navLink}
        activeClassName={hs.navLink_active}
      >
        Home
      </NavLink>
    </div>
  );
};
Navigation.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }),
};
export default withRouter(Navigation);
