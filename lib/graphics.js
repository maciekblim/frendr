export function shape (type, props, style, matrix) {
    return Object.freeze({
        type, matrix,
        props: Object.assign({}, props),
        style: Object.assign({}, style)
    });
}
