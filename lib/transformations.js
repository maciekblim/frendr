import {matrix, multiply, add} from './math';
import {shape} from './graphics';

// translate :: Float -> Float -> Transformation
export function translate (x, y) {
    return (s => shape(
        s.type,
        s.props,
        s.style,
        add(s.matrix, matrix(0, 0, x, 0, 0, y)))
    );
}

// translateX :: Float -> Transformation
export function translateX (x) {
    return translate(x, 0);
}

// translateY :: Float -> Transformation
export function translateY (y) {
    return translate(0, y);
}

// rotate :: Radians -> Transformation
export function rotate (angle) {
    const cos = Math.cos(angle);
    const sin = Math.sin(angle);
    return (s => shape(
        s.type,
        s.props,
        s.style,
        multiply(matrix(cos, -sin, 0, sin, cos, 0), s.matrix))
    );
}

// scale :: Float -> Float -> Transformation
export function scale (sx, sy) {
    return (s => shape(
        s.type,
        s.props,
        s.style,
        multiply(matrix(sx, 0, 0, 0, sy, 0), s.matrix))
    );
}

// scaleX :: Float -> Transformation
export function scaleX (sx) {
    return scale(sx, 1);
}

// scaleY :: Float -> Transformation
export function scaleY (sy) {
    return scale(1, sy);
}

// shear :: Float -> Float -> Transformation
export function shear (x, y) {
    return (s => shape(
        s.type,
        s.props,
        s.style,
        multiply(matrix, matrix(1, y, 0, x, 1, 0)))
    );
}

// shearX :: Float -> Transformation
export function shearX (x) {
    return shear(x, 0);
}

// shearY :: Float -> Transformation
export function shearY (y) {
    return shear(0, y);
}

// export function reflect () {
//     return (s => shape(
//         s.type,
//         s.props,
//         s.style,
//         multiply(matrix(-1, 0, 0, 0, -1, 0), s.matrix))
//     );
// }
// export function reflectX () {
//     return (s => shape(
//         s.type,
//         s.props,
//         s.style,
//         multiply(matrix(1, 0, 0, 0, -1, 0), s.matrix))
//     );
// }
// export function reflectY () {
//     return (s => shape(
//         s.type,
//         s.props,
//         s.style,
//         multiply(matrix(-1, 0, 0, 0, 1, 0), s.matrix))
//     );
// }
