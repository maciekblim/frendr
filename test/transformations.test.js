'use strict';

import {expect} from 'chai';
import {translate, translateX, translateY} from '../lib/transformations';

describe('transformations', () => {
    describe('#translate', () => {
        it('should translate object about (x, y)');
    });

    describe('#translateX', () => {
        it('should translate object about (x, 0)');
    });

    describe('#translateY', () => {
        it('should translate object about (0, y)');
    });

    describe('#rotate', () => {
        it('should rotate object about angle');
    });

    describe('#scale', () => {
        it('should scale object about (x, y)');
    });

    describe('#scaleX', () => {
        it('should scale object about (x, 1)');
    });

    describe('#scaleY', () => {
        it('should scale object about (1, y)');
    });

    describe('#shear', () => {
        it('should shear object about (x, y)');
    });

    describe('#shearX', () => {
        it('should shear object about (x, 0)');
    });

    describe('#shearY', () => {
        it('should shear object about (0, y)');
    });
});
