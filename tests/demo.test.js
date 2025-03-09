
describe('Pruebas en el archivo demo.test.js', () => {

    test('esta prueba no debe fallar', () => { 
        
        // I Inicialización
    
        const message1 = 'Hola Mundo';
    
        //E Estimulo
    
        const message2 = message1.trim();
    
        //Observar el comportamiento esperado
    
        //expect(message1).toBe(message2);
        expect(message1).toBe(message2);
    
     })
});


