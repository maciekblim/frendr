import { matrix } from './math';

const RECT = 'rect';
const OVAL = 'oval';
const NGON = 'ngon';
const POLYGON = 'polygon';

const IDENTITY = matrix(1, 0, 0, 0, 1, 0);


// shape :: RenderableType -> Any -> Style -> Matrix -> Shape
export function shape (type, props, style, matrix) {
    return Object.freeze({
        type, matrix,
        props: Object.assign({}, props),
        style: Object.assign({}, style)
    });
}

// base :: RenderableType -> Any -> Shape
function base (type, props) {
    return shape(type, props, {} , IDENTITY);
}

// rect :: Integer -> Integer -> Shape
export function rect (w, h) {
    return base(RECT, {w, h});
}

// square :: Integer -> Shape
export function square (l) {
    return rect(l, l);
}

// oval :: Integer -> Integer -> Shape
export function oval (w, h) {
    return base(OVAL, {w, h});
}

// circle :: Integer -> Shape
export function circle (r) {
    return oval(r, r);
}

// regular polygon
// ngon :: Integer -> Integer -> Shape
export function ngon (n, r) {
    return base(NGON, {n, r});
}

// polygon :: List<(Integer, Integer)> -> Shape
export function polygon (ps) {
    // just needed deep copy of args
    return base(POLYGON, {ps: JSON.stringify(JSON.parse(ps))});
}
