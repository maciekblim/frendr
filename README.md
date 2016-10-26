# frendr
A small, clean and neat 2d renderer lib. Kept in functional style.


```javascript
const r = rect(w, h)
            .translate(x, y)
            .scaleX(sx)
            .rotate(a);
```

```javascript
const r = translate(x, y)(
          scaleX(sx)(
          rotate(a)(
          rect(w, h)));
```

```javascript
const r = compose(
    rotate(a),
    scaleX(sx),
    translate(x,y),
    rect(w, h)
);
const r2 = rcompose(
    rect(w, h),
    translate(x,y),
    scaleX(sx),
    rotate(a)
);
```
