import React, { Component } from 'react'
import { observer } from 'mobx-react'

import TimerDisplay from './TimerDisplay'
import { mainStyle, buttonStyle } from '../styles'

@observer
class Main extends Component {
  constructor(props) {
    super(props)
  }
  renderButton() {
    const { timerStore } = this.props;
    let firstButton;
    let secondButton;
    if (!timerStore.isRunning) {
      secondButton = (
        <button
          style={{ ...buttonStyle, color: '#4bd761' }}
          onClick={() => timerStore.startTimer()}
        >
          start
      </button>
      );

      firstButton = (
        <button
          style={buttonStyle}
          onClick={() => timerStore.resetTimer()}
        >
          reset
      </button>
      );
      if (!timerStore.hasStarted) {
        firstButton = null;
      }
    } else {
      secondButton = (
        <button
          style={{ ...buttonStyle, color: '#fd3d2a' }}
          onClick={() => timerStore.stopTimer()}
        >
          stop
      </button>
      );

      firstButton = (
        <button
          style={buttonStyle}
          onClick={() => timerStore.lapTimer()}
        >
          lap
      </button>
      );
    }

    return (
      <div>
        {firstButton}
        {secondButton}
      </div>
    );

  }
  renderLapData() {
    const { timerStore } = this.props;
    const laps = timerStore.lapData.map((lap) => {
      return (
        <TimerDisplay
          key={lap.lap.id}
          leftText={lap.text}
          rightText={lap.lap.display}
        />
      )
    })
  }
  render() {
    const { timerStore } = this.props;
    return (
      <div style={{ fontSize: 30 }}>
        <div
          style={mainStyle.display}
        >
          {timerStore.mainDisplay}
        </div>
        <div>
          <div style={mainStyle.buttons}>
            {this.renderButton()}
          </div>
          <div>
            {timerStore.lapData.map((el) =>
              <TimerDisplay
                key={el.lap.id}
                leftText={el.text}
                rightText={el.lap.display}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Main
