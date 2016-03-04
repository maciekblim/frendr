import { matrix } from './math';

const RECT = 'rect';

// shape :: RenderableType -> Any -> Style -> Matrix -> Shape
export function shape (type, props, style, matrix) {
    return Object.freeze({
        type, matrix,
        props: Object.assign({}, props),
        style: Object.assign({}, style)
    });
}

// rect :: Int -> Int -> Shape
export function rect (w, h) {
    return shape(RECT, {w, h}, {}, matrix(1, 0, 0, 0, 1, 0));
}
