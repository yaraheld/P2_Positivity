# Tweety

A simple class based tweening engine for javascript

![](https://media1.tenor.com/images/99f5cf994c0136a6fa1e2b9ae18a31ce/tenor.gif?itemid=12421448)

## Get started

Download the `tween.js` file and add it to your project. Now you can easily create tweens like this:

```javascript
import Tween from "./tween.js";

let emoji = {x: 0, y: 0};

let tween = new Tween(emoji, 1.3, {
  x: 800,
  ease: "easeOutSine",
});
```

It works perfectly with class based objects, but also with simple object.

## Features

- `speed` (default: `1.0`)
- `delay` (default: `0`)
- `repeat` (default: `0`)
- `yoyo` (default: `false`)
- `autoStart` (default: `true`)
- `ease` (default: `linear`)

## Easings

- `linear` (default)
- `easeInCircular`, `easeOutCircular`, `easeInOutCircular`
- `easeInCubic`, `easeOutCubic`, `easeInOutCubic`
- `easeInExpo`, `easeOutExpo`, `easeInOutExpo`
- `easeInQuadratic`, `easeOutQuadratic`, `easeInOutQuadratic`
- `easeInQuartic`, `easeOutQuartic`, `easeInOutQuartic`
- `easeInQuintic`, `easeOutQuintic`, `easeInOutQuintic`
- `easeInSine`, `easeOutSine`, `easeInOutSine`
- `easeInBounce`, `easeOutBounce`, `easeInOutBounce`
- `easeInElastic`, `easeOutElastic`, `easeInOutElastic`
- `easeInBack`, `easeOutBack`, `easeInOutBack`
