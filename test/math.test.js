'use strict';

import {expect} from 'chai';
import {matrix, add, multiply} from '../lib/math';

describe('math', () => {
    const a = 1 , b = 2, c = 3, d = 4, e = 5, f = 6;

    describe('#matrix', () => {
        it('should accept aparams and return matrix object', () => {
            const m = matrix(a, b, c, d, e, f);
            expect(m).to.be.instanceof(Object);
            expect(m.a).to.be.equal(a);
            expect(m.b).to.be.equal(b);
            expect(m.c).to.be.equal(c);
            expect(m.d).to.be.equal(d);
            expect(m.e).to.be.equal(e);
            expect(m.f).to.be.equal(f);
        });

        it('should return inmutable object', () => {
            const m = matrix(a, b, c, d, e, f);
            expect(() => m.a = a * 2).to.throw(TypeError);
        });
    });

    describe('#multiply', () => {
        it('should return result of matrix multiplication', () => {
            const m1 = matrix(a, b, c, d, e, f);
            const m2 = matrix(1, 0, 0, 0, 1, 0);

            const result = multiply(m1, m2);
            expect(result.a).to.be.equal(m1.a);
            expect(result.b).to.be.equal(m1.b);
            expect(result.c).to.be.equal(m1.c);
            expect(result.d).to.be.equal(m1.d);
            expect(result.e).to.be.equal(m1.e);
            expect(result.f).to.be.equal(m1.f);
        });
    });

    describe('#add', () => {
        it('should return result of matrix addition', () => {
            const m1 = matrix(a, b, c, d, e, f);
            const m2 = matrix(a, b, c, d, e, f);

            const result = add(m1, m2);
            expect(result.a).to.be.equal(m1.a * 2);
            expect(result.b).to.be.equal(m1.b * 2);
            expect(result.c).to.be.equal(m1.c * 2);
            expect(result.d).to.be.equal(m1.d * 2);
            expect(result.e).to.be.equal(m1.e * 2);
            expect(result.f).to.be.equal(m1.f * 2);
        });
    });
});
