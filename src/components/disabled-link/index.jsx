import React from 'react'
import './styles.scss'

import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types';

const DisabledNavLink = ({ children, message = null, otherClass}) => {
  return (
    <NavLink
      className={ `${otherClass} tooltip`}
      disabled
      to=""
    >
      <span className="tooltiptext">
        {
          message ?
          message :
          `Currently disabled. Will be directed to home`
        }
      </span>
      { children }
    </NavLink>
  )
}

DisabledNavLink.propTypes = {
  children: PropTypes.any.isRequired,
  message: PropTypes.string,
  otherClass: PropTypes.string,
}

export default DisabledNavLink
