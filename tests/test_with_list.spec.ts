import { test, expect } from '@playwright/test';

// 1. The function we want to test
function getElementsUpToN<T>(list: T[], n: number): T[] {
    if (n >= list.length) {
        return list;
    }
    return list.slice(0, n);
}

// 2. Playwright Test Suite grouping our related tests
test.describe('getElementsUpToN function', () => {

    test('returns sliced list when n is smaller than list length', () => {
        const numbers = [10, 20, 30, 40, 50];
        const result = getElementsUpToN(numbers, 3);
        
        // Playwright assertion for array equality
        expect(result).toEqual([10, 20, 30]);
    });

    test('returns original list when n is greater than list length', () => {
        const fruits = ['apple', 'banana', 'cherry'];
        const result = getElementsUpToN(fruits, 5);
        
        // Assert the values match
        expect(result).toEqual(['apple', 'banana', 'cherry']);
        
        // Assert it returned the EXACT same list in memory (reference check)
        expect(result).toBe(fruits);
    });
});