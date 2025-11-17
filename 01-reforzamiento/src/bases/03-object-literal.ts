
/* una abstracion del mundo real */


const ironman = {
    firstName: 'Tony',
    lastName: 'Starck',
    age: 40,
    addres: {
        postalCode: 'ABC123',
        city: 'New York'
    }
};

//funciona hasta cierto punto la desestructuracion misma
/* const spiderman = {...ironman} */

const spiderman = structuredClone(ironman);

spiderman.firstName = 'Peter';
spiderman.lastName = 'Parker';
spiderman.age = 22;
spiderman.addres.city = 'San Jose'

console.log(ironman, spiderman);