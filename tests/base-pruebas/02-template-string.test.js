import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe ('Prubas en el archivo 02-template-string.test.js', () => {

test('getsalludo debe de retornar Hola Fernando', () => { 
    

    const name = 'Fernando';

    const message  = getSaludo(name);

    expect(message).toBe(`Hola ${name}`);
 })

});