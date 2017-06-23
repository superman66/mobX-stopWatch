import { observable, computed, action } from 'mobx'
import { v4 } from 'node-uuid'
import moment from 'moment'
import format from 'format-number-with-string'

class TimerModel {
  @observable milliseconds
  @observable saveMilliseconds
  constructor(initialMilliseconds = 0) {
    this.milliseconds = initialMilliseconds;
    this.saveMilliseconds = 0;
    this.id = v4();
  }

  @action saveTime() {
    this.saveMilliseconds += this.milliseconds;
    this.milliseconds = 0;
  }

  @action reset() {
    this.milliseconds = this.saveMilliseconds = 0;
  }

  @computed get totalMilliSeconds() {
    return this.milliseconds + this.saveMilliseconds;
  }

  @computed get display() {
    const tenMilliSeconds = parseInt(this.milliseconds / 10, 10);
    const seconds = parseInt(tenMilliSeconds / 100, 10);
    const minutes = parseInt(seconds / 60, 10);
    return `${minutes} : ${format(seconds % 60, '00')} : ${format(tenMilliSeconds % 100, '00')} `;
  }
}

export default TimerModel

