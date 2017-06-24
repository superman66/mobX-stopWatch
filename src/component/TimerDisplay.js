import React from 'react';
import { observer } from 'mobx-react';
import { timerStyle } from '../styles';

const TimerDisplay = props => (
  <div style={timerStyle.main} >
    <div style={timerStyle.left} >
      {props.leftText}&nbsp;&nbsp;&nbsp;
    </div>
    <div style={timerStyle.right} >
      {props.rightText}
    </div>
  </div>
)

export default TimerDisplay

