import {describe, expect, test} from 'vitest';
import { add, divide, multiply, subtract } from './math.helper';


describe('add', () => {
    test('should add two positives numbers', () => { 

    // Arrange
    const a = 2;
    const b = 2;
   
    // Act
    const result = add(a,b)
    
    // Assert
    expect(result).toBe(4)

    //const result = add(1,3);

    /* if(result !== 2){
        throw new Error("El resultado no es 2");
    } */

    //expect(result).toBe(4)
    })
});


describe('subtract', () => {
    test('should substract two numbers', () => { 
        const a = 4;
        const b = 2;
        const result = subtract(a,b);
        expect(result).toBe(2);
     })
    test('should substract two numbers negative', () => { 
        const a = -4;
        const b = -2;
        const result = subtract(a,b);
        expect(result).toBe(a - b);
    })
})

describe('multiply', () => {
    test('should multiply two numbers', () => { 
        const a = 4;
        const b = 2;
        const result = multiply(a,b);
        expect(result).toBe(a * b);
    })
    test('should multiply two numbers negative', () => { 
        const a = -4;
        const b = -2;
        const result = subtract(a,b);
        expect(result).toBe(a - b);
    })
})

describe('divide', () => {
    test('should divide two numbers', () => { 
        const a = 4;
        const b = 2;
        const result = divide(a,b);
        expect(result).toBe(a / b);
    })
    test('should divide two numbers negative', () => { 
        const a = -4;
        const b = -2;
        const result = divide(a,b);
        expect(result).toBe(a / b);
    })
})






