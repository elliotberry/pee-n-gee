import { readFileSync } from 'fs';
import { describe, it, expect, beforeEach, afterEach } from 'node:test';
import PNG from './index.js';

describe('PNG', () => {
    it('constructor should throw error if data is not a Buffer', () => {
        expect(() => {
            new PNG('not a buffer');
        }).toThrow('PNG: expected Buffer');
    });

    it('constructor should initialize properties correctly', () => {
        const data = readFileSync('test/images/sample.png');
        const png = new PNG(data);

        expect(png.data).toEqual(data);
        expect(png.pos).toBe(8);
        expect(png.palette).toEqual([]);
        expect(png.imgData).toEqual([]);
        expect(png.transparency).toEqual({});
        expect(png.text).toEqual({});
    });

    it('add more tests for other functionality of the PNG class', () => {
        // Write additional tests here
    });
});
