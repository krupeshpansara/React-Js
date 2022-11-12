import React from 'react';
// import PropTypes from 'prop-types';
import PropTypes from 'prop-types';

export default function Navbar(props) {
  return (
    <div className='nevbar'>
      <ul className='list'>
        <li className="list-items">{props.home_}</li>
        <li className="list-items">{props.about_}</li>
        <li className="list-items">{props.contect_}</li>
        <li className="list-items">{props.list_}</li>
      </ul>
    </div>

  )
}

Navbar.prototype = {
  home_: PropTypes.string,
  about_: PropTypes.string,
};


