import React from 'react';
import PropTypes from 'prop-types';
import { MorphReplaceResize } from 'react-svg-morph';

import styles from 'components/stop/Stop.scss';

import StopDotSingle from 'components/stop/dot/Single';
import StopDotDouble from 'components/stop/dot/Double';
import StopDotTriple from 'components/stop/dot/Triple';

import StopSquare from 'components/stop/square/Square';

const dotTypes = {
  Single: StopDotSingle,
  Double: StopDotDouble,
  Triple: StopDotTriple
}

export default class Stop extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      selected: false
    }
  }

  get dot () {
    const StopDot = dotTypes[this.props.dotType];
    return (
      <StopDot
        x={this.props.dotX}
        y={this.props.dotY}
        size={this.props.dotSize}
        transform={this.props.dotTransform}
      />
    );
  }

  get square () {
    return (
      <StopSquare />
    )
  }

  get dotOrSquare () {
    return this.state.selected ? this.square : this.dot;
  }

  render () {
    const textClass = styles[`stop__text--${this.props.textColor}`];

    return (
      <g onClick={() => this.setState({ selected: !this.state.selected })}>
        <MorphReplaceResize width={28} height={28}>
          { this.dotOrSquare }
        </MorphReplaceResize>
        <text
          x={this.props.labelX}
          y={this.props.labelY}
          transform={this.props.labelTransform}
          class={textClass}
        >
          {this.props.labelText}
        </text>
      </g>
    )
  }
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

Stop.defaultProps = {
  dotType: 'Single',
  textColor: 'black'
};
