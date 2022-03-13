class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
    }, 1000);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return this.currentTime % 60;
  }

  computeTwoDigitNumber(value) {
    //**  note to self: both ways work, first is unnecessarily complicated
    // let stringNumber = '0';
    // if (value.toString().length === 1 || !value.toString().length) {
    //   stringNumber += String(value);
    // } else if (value.toString().length === 2) {
    //   stringNumber = String(value);
    // }
    // return stringNumber;

    let stringNumber = String(value);
    if (stringNumber.length === 1) {
      stringNumber = '0' + value;
    }
    return stringNumber;
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    
    let secondsNum = this.getSeconds();
    let minutesNum = this.getMinutes();

    return `${this.computeTwoDigitNumber(minutesNum)}:${this.computeTwoDigitNumber(secondsNum)}`;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
