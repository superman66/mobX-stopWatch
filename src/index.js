import React from 'react';
import ReactDOM from 'react-dom'
import Main from './main'

import { TimerStore } from './store/TimerStore'
import { useStrict } from 'mobx'

useStrict(true);

const timerStore = new TimerStore();

ReactDOM.render(
  <Main
    timerStore={timerStore}
  />,
  document.getElementById('app')
);
