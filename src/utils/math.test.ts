import { add, multiply, divide, isEven } from "./math";

describe('Math Utilities', () => {
    describe('add()', () => {
        it('should add two positive numbers', () => {
            expect(add(2, 3)).toBe(5);
        });

        it('should handle negative numbers', () => {
            expect(add(-1, 1)).toBe(0);
        });
    });

    describe('multiply()', () => {
        it('should multiply two numbers', () => {
            expect(multiply(4, 5)).toBe(20);
        });
        it('should handle multiplication with zero', () => {
            expect(multiply(5, 0)).toBe(0);
        });
    });

    describe('divide()', () => {
        it('should divide two numbers', () => {
            expect(divide(10, 5)).toBe(2);
        });
        it('should handle division with zero', () => {
            expect(() => divide(5, 0)).toThrow('Cannot divide by zero');
        });
    });

    describe('isEven()', () => {
        it('should return true for even numbers', () => {
            expect(isEven(4)).toBe(true);
        });
        it('should return false for odd numbers', () => {
            expect(isEven(7)).toBe(false);
        });
    });
})