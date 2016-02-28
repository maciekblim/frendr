
// matrix :: Float -> Float -> Float -> Float -> Float -> Float -> Matrix
export function matrix(a, b, c, d, e, f) {
    return Object.freeze({a, b, c, d, e, f});
}

// multiply :: Matrix -> Matrix -> Matrix
export function multiply(m1, m2) {
    return matrix(
        m1.a * m2.a + m1.b * m2.d,          // a
        m1.a * m2.b + m1.b * m2.e,          // b
        m1.a * m2.c + m1.b * m2.f + m1.c,   // c
        m1.d * m2.a + m1.e * m2.d,          // d
        m1.d * m2.b + m1.e * m2.e,          // e
        m1.d * m2.c + m1.e * m2.f + m1.f    // f
    );
}


// add :: Matrix -> Matrix -> Matrix
export function add(m1, m2) {
    return matrix(
        m1.a + m2.a,    // a
        m1.b + m2.b,    // b
        m1.c + m2.c,    // c
        m1.d + m2.d,    // d
        m1.e + m2.e,    // e
        m1.f + m2.f     // f
    );
}
