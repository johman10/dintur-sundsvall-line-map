import React from 'react';
import PropTypes from 'prop-types';

Hospital.propType = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired
}

export default function Hospital ({ x, y }) {
  return (
    <path class="icon icon--hospital" d={`M ${x} ${y} h 32.6 v 12.8 h -32.6zM 2066.4 1048.4 h 12.8 v 32.6 h -12.8z`} />
  )
}
