import {expect, test} from 'vitest';
import { add } from './math.helper';

test('should add two positives numbers', () => { 

    // Arrange
    const a = 1;
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


