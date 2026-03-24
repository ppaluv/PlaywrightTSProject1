import { test, expect } from '@playwright/test';

function returnListUpToN<T>(list: T[], n: number): T[] {
    let final: T[];
    final = [];

    if (n >= list.length) {
        final = list;
    }
    if (n <= list.length) {
        final = list.slice(0, n);
    }
    return final;
}


test('return list with up to n-th element', () => {
        const numbers = [1, 2, 3, 4, 5];
        const result = returnListUpToN(numbers, 3);
        
        // Playwright assertion for array equality
        expect(result).toEqual([1, 2, 3]);
    });

test('returns original list when n is greater than list length', () => {
        const animals = ['camel', 'wolf', 'fox', 'dove', 'bear'];
        const result = returnListUpToN(animals, 7);
        
        // Assert the values match
        expect(result).toEqual(['camel', 'wolf', 'fox', 'dove', 'bear']);
        
        // Assert it returned the EXACT same list in memory (reference check)
        expect(result).toBe(animals);
    });