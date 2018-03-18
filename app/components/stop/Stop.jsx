import React from 'react';
import PropTypes from 'prop-types';
import styles from 'components/stop/Stop.scss';

import StopDotSingle from 'components/stop/dot/Single';
import StopDotDouble from 'components/stop/dot/Double';
import StopDotTriple from 'components/stop/dot/Triple';

const dotTypes = {
  Single: StopDotSingle,
  Double: StopDotDouble,
  Triple: StopDotTriple
}

Stop.propTypes = {
  dotX: PropTypes.number.isRequired,
  dotY: PropTypes.number.isRequired,
  dotSize: PropTypes.oneOf([27, 34, 46, 54]),
  dotTransform: PropTypes.string,
  dotType: PropTypes.oneOf(['Single', 'Double', 'Triple']).isRequired,
  labelX: PropTypes.number.isRequired,
  labelY: PropTypes.number.isRequired,
  labelText: PropTypes.string.isRequired,
  labelTransform: PropTypes.string,
  textColor: PropTypes.string
}

export default function Stop ({ dotX, dotY, dotType = 'Single', labelX, labelY, labelText, dotSize, dotTransform, labelTransform, textColor = 'black' }) {
  const StopDot = dotTypes[dotType];
  const textClass = styles[`stop__text--${textColor}`];
  return (
    <g>
      <StopDot x={dotX} y={dotY} size={dotSize} transform={dotTransform} />
      <text x={labelX} y={labelY} transform={labelTransform} class={textClass}>{labelText}</text>
    </g>
  )
}
