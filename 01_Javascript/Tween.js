/*
Copyright (c) 2020 Garrit Schaap

Published under the MIT License
*/

export default class Tween {
  constructor(target, duration, params) {
    this.target = target;
    this.duration = duration;
    this.ease = "linear";

    this.lastTimestamp = 0;
    this.speed = 1;
    this.delay = 0;
    this.currentTime = 0;
    this.repeat = 0;
    this.repeatCount = 0;
    this.yoyo = false;
    this.autoStart = true;
    this.isRunning = false;

    if (params.ease != undefined) {
      this.ease = params.ease;
      delete params.ease;
    }
    if (params.speed != undefined) {
      this.speed = params.speed;
      delete params.speed;
    }
    if (params.delay != undefined) {
      this.delay = params.delay;
      delete params.delay;
    }
    if (params.repeat != undefined) {
      this.repeat = params.repeat;
      delete params.repeat;
    }
    if (params.yoyo != undefined) {
      this.yoyo = params.yoyo;
      delete params.yoyo;
    }
    if (params.autoStart != undefined) {
      this.autoStart = params.autoStart;
      delete params.autoStart;
    }

    this.params = {};
    for (let key in params) {
      this.params[key] = { from: this.target[key], to: params[key] };
    }

    this._pValue = 0.3;
    this._sValue = 0.3 / 4;
    this._aValue = 1;
    this._sValueBack = 1.70158;

    this.startHandlers = [];
    this.updateHandlers = [];
    this.completionHandlers = [];

    if (this.autoStart) {
      this.start();
    }
  }

  get pValue() {
    return this._pValue;
  }
  set pValue(value) {
    this._pValue = value;
    if (this._aValue < 1) {
      this._sValue = this._pValue / 4;
    } else {
      this._sValue =
        (this._pValue / (Math.PI * 2)) * Math.asin(1 / this._aValue);
    }
  }

  get aValue() {
    return this._aValue;
  }
  set aValue(value) {
    if (value >= 1) {
      this._aValue = value;
      this._sValue =
        (this._pValue / (Math.PI * 2)) * Math.asin(1 / this._aValue);
    }
  }

  start() {
    this.isRunning = true;
    this.startHandlers.forEach((handler) => {
      handler();
    });
    window.requestAnimationFrame(this.update.bind(this));
  }

  pause() {
    this.isRunning = false;
  }

  resume() {
    this.isRunning = true;
    window.requestAnimationFrame(this.update.bind(this));
  }

  stop() {
    this.isRunning = false;
    this.currentTime = this.duration + this.delay;
    this.lastTimestamp = 0;
    this.completionHandlers.forEach((handler) => {
      handler();
    });
  }

  update(timestamp) {
    if ((this.currentTime >= this.delay && this.speed > 0) || this.speed < 0) {
      let time = (this.currentTime - this.delay) / this.duration;
      time = Math.min(1, Math.max(0, time));
      let value = this[this.ease](time);
      for (let key in this.params) {
        this.target[key] =
          this.params[key].from +
          value * (this.params[key].to - this.params[key].from);
      }

      if (time === 1) {
        if (!this.yoyo) {
          if (this.repeat === 0 || this.repeatCount === this.repeat) {
            this.stop();
          } else {
            this.currentTime = 0;
            this.repeatCount++;
          }
        } else {
          this.currentTime = this.duration + this.delay;
          this.speed *= -1;
        }
      } else if (time === 0 && this.speed < 0) {
        if (this.repeat === 0 || this.repeatCount === this.repeat) {
          this.stop();
        } else {
          this.currentTime = 0;
          this.speed *= -1;
          this.repeatCount++;
        }
      }
    }

    this.currentTime += ((timestamp - this.lastTimestamp) / 1000) * this.speed;
    this.lastTimestamp = timestamp;

    this.updateHandlers.forEach((handler) => {
      handler();
    });

    if (this.isRunning) {
      window.requestAnimationFrame(this.update.bind(this));
    }
  }

  onStart(startHandler) {
    this.startHandlers.push(startHandler);
  }

  onUpdate(updateHandler) {
    this.updateHandlers.push(updateHandler);
  }

  onCompletion(completionHandler) {
    this.completionHandlers.push(completionHandler);
  }

  linear(t) {
    return Math.min(1, Math.max(0, t));
  }

  easeInCircular(t) {
    return -(Math.sqrt(1 - t * t) - 1);
  }

  easeOutCircular(t) {
    t -= 1;
    return Math.sqrt(1 - t * t);
  }

  easeInOutCircular(t) {
    t *= 2;
    if (t < 1) {
      return -0.5 * (Math.sqrt(1 - t * t) - 1);
    } else {
      t -= 2;
      return 0.5 * (Math.sqrt(1 - t * t) + 1);
    }
  }

  easeInCubic(t) {
    return t * t * t;
  }

  easeOutCubic(t) {
    t -= 1.0;
    return t * t * t + 1;
  }

  easeInOutCubic(t) {
    t *= 2;
    if (t < 1) {
      return 0.5 * t * t * t;
    } else {
      t -= 2;
      return 0.5 * (t * t * t + 2);
    }
  }

  easeInExpo(t) {
    return t === 0 ? 0 : Math.pow(2, 10 * (t - 1));
  }

  easeOutExpo(t) {
    return t === 1 ? 1 : -Math.pow(2, -10 * t) + 1;
  }

  easeInOutExpo(t) {
    if (t === 0) {
      return 0;
    }
    if (t >= 1) {
      return 1;
    }
    t *= 2;
    if (t < 1) {
      return 0.5 * Math.pow(2, 10 * (t - 1));
    } else {
      return 0.5 * (-Math.pow(2, -10 * --t) + 2);
    }
  }

  easeInQuadratic(t) {
    return t * t;
  }

  easeOutQuadratic(t) {
    return -t * (t - 2);
  }

  easeInOutQuadratic(t) {
    t *= 2;
    if (t < 1) {
      return 0.5 * t * t;
    } else {
      --t;
      return -0.5 * (t * (t - 2) - 1);
    }
  }

  easeInQuartic(t) {
    return t * t * t * t;
  }

  easeOutQuartic(t) {
    t -= 1;
    return -(t * t * t * t - 1);
  }

  easeInOutQuartic(t) {
    t *= 2;
    if (t < 1) {
      return 0.5 * t * t * t * t;
    } else {
      t -= 2;
      return -0.5 * (t * t * t * t - 2);
    }
  }

  easeInQuintic(t) {
    return t * t * t * t * t;
  }

  easeOutQuintic(t) {
    t -= 1;
    return t * t * t * t * t + 1;
  }

  easeInOutQuintic(t) {
    t *= 2;
    if (t < 1) {
      return 0.5 * t * t * t * t * t;
    } else {
      t -= 2;
      return 0.5 * (t * t * t * t * t + 2);
    }
  }

  easeInSine(t) {
    return 1 - Math.cos(t * (Math.PI / 2));
  }

  easeOutSine(t) {
    return Math.sin(t * (Math.PI / 2));
  }

  easeInOutSine(t) {
    return -0.5 * (Math.cos(Math.PI * t) - 1);
  }

  easeInBounce(t) {
    return 1 - this.easeOutBounce(1 - t);
  }

  easeOutBounce(t) {
    if (t < 1 / 2.75) {
      return 7.5625 * t * t;
    } else if (t < 2 / 2.75) {
      let postfix = (t -= 1.5 / 2.75);
      return 7.5625 * postfix * t + 0.75;
    } else if (t < 2.5 / 2.75) {
      let postfix = (t -= 2.25 / 2.75);
      return 7.5625 * postfix * t + 0.9375;
    } else {
      let postfix = (t -= 2.625 / 2.75);
      return 7.5625 * postfix * t + 0.984375;
    }
  }

  easeInOutBounce(t) {
    t *= 2;
    if (t < 1) {
      return (1 - this.easeOutBounceWithTimeAndDuration(1 - t, 1)) * 0.5;
    } else {
      return this.easeOutBounceWithTimeAndDuration(t - 1, 1) * 0.5 + 0.5;
    }
  }

  easeOutBounceWithTimeAndDuration(t, d) {
    t /= d;
    if (t < 1 / 2.75) {
      return 7.5625 * t * t;
    } else if (t < 2 / 2.75) {
      let postfix = (t -= 1.5 / 2.75);
      return 7.5625 * postfix * t + 0.75;
    } else if (t < 2.5 / 2.75) {
      let postfix = (t -= 2.25 / 2.75);
      return 7.5625 * postfix * t + 0.9375;
    } else {
      let postfix = (t -= 2.625 / 2.75);
      return 7.5625 * postfix * t + 0.984375;
    }
  }

  easeInElastic(t) {
    if (t == 0) {
      return 0;
    }
    if (t === 1) {
      return 1;
    }
    let postfix = Math.pow(2, 10 * (t -= 1));
    return -(
      postfix * Math.sin(((t - this._sValue) * (Math.PI * 2)) / this.pValue)
    );
  }

  easeOutElastic(t) {
    if (t == 0) {
      return 0;
    }
    if (t === 1) {
      return 1;
    }
    return (
      Math.pow(2, -10 * t) *
        Math.sin(((t - this._sValue) * (Math.PI * 2)) / this.pValue) +
      1
    );
  }

  easeInOutElastic(t) {
    if (t == 0) {
      return 0;
    }
    if (t >= 1) {
      return 1;
    }
    t *= 2;
    if (t < 1) {
      let postfix = Math.pow(2, 10 * (t -= 1));
      return (
        -0.5 *
        (postfix * Math.sin(((t - this._sValue) * (Math.PI * 2)) / this.pValue))
      );
    } else {
      let postfix = Math.pow(2, -10 * (t -= 1));
      return (
        postfix *
          Math.sin(((t - this._sValue) * (Math.PI * 2)) / this.pValue) *
          0.5 +
        1
      );
    }
  }

  easeInBack(t) {
    return t * t * ((this._sValueBack + 1) * t - this._sValueBack);
  }

  easeOutBack(t) {
    t -= 1;
    return t * t * ((this._sValueBack + 1) * t + this._sValueBack) + 1;
  }

  easeInOutBack(t) {
    t *= 2;
    let s = this._sValueBack * 1.525;
    if (t < 1) {
      return 0.5 * (t * t * ((s + 1) * t - s));
    } else {
      t -= 2;
      return 0.5 * (t * t * ((s + 1) * t + s) + 2);
    }
  }
}
