'use strict';

import {expect} from 'chai';
import {
    translate, translateX, translateY,
    rotate,
    scale, scaleX, scaleY,
    shear, shearX, shearY
} from '../lib/transformations';
import {rect} from '../lib/graphics';

const PI = Math.PI;

describe('transformations', () => {
    let s = null;
    beforeEach(() => {
        s = rect(10, 20);
    });

    describe('#translate', () => {
        it('should translate object about (x, y)', () => {
            const tx = 10;
            const ty = 5;
            const translated = translate(tx, ty)(s);
            const m = translated.matrix;
            expect(m.c).to.be.equal(tx);
            expect(m.f).to.be.equal(ty);
        });
    });

    describe('#translateX', () => {
        it('should translate object about (x, 0)', () => {
            const tx = 10;
            const translated = translateX(tx)(s);
            const m = translated.matrix;
            expect(m.c).to.be.equal(tx);
            expect(m.f).to.be.equal(0);
        });
    });

    describe('#translateY', () => {
        it('should translate object about (0, y)', () => {
            const ty = 10;
            const translated = translateY(ty)(s);
            const m = translated.matrix;
            expect(m.c).to.be.equal(0);
            expect(m.f).to.be.equal(ty);
        });
    });

    describe('#rotate', () => {
        it('should rotate object about angle', () => {
            const angle = 2 * PI;

            const rotated = rotate(angle)(s);
            const m = rotated.matrix;

            const sin = Math.sin(angle);
            const cos = Math.cos(angle);
            expect(m.a).to.be.equal(cos);
            expect(m.b).to.be.equal(-sin);
            expect(m.d).to.be.equal(sin);
            expect(m.e).to.be.equal(cos);
        });
    });

    describe('#scale', () => {
        it('should scale object about (x, y)', () => {
            const sx = 2;
            const sy = 4;

            const scaled = scale(sx, sy)(s);
            const m = scaled.matrix;

            expect(m.a).to.be.equal(sx);
            expect(m.e).to.be.equal(sy);
        });
    });

    describe('#scaleX', () => {
        it('should scale object about (x, 1)', () => {
            const sx = 2;

            const scaled = scaleX(sx)(s);
            const m = scaled.matrix;

            expect(m.a).to.be.equal(sx);
            expect(m.e).to.be.equal(1);
        });
    });

    describe('#scaleY', () => {
        it('should scale object about (1, y)', () => {
            const sy = 2;

            const scaled = scaleY(sy)(s);
            const m = scaled.matrix;

            expect(m.a).to.be.equal(1);
            expect(m.e).to.be.equal(sy);
        });
    });

    describe('#shear', () => {
        it('should shear object about (x, y)', () => {
            const x = 3;
            const y = 4;

            const sheared = shear(x, y)(s);
            const m = sheared.matrix;

            expect(m.b).to.be.equal(y);
            expect(m.d).to.be.equal(x);
        });
    });

    describe('#shearX', () => {
        it('should shear object about (x, 0)', () => {
            const x = 4;

            const sheared = shearX(x)(s);
            const m = sheared.matrix;

            expect(m.b).to.be.equal(0);
            expect(m.d).to.be.equal(x);
        });
    });

    describe('#shearY', () => {
        it('should shear object about (0, y)', () => {
            const y = 4;

            const sheared = shearY(y)(s);
            const m = sheared.matrix;

            expect(m.b).to.be.equal(y);
            expect(m.d).to.be.equal(0);
        });
;
    });
});
