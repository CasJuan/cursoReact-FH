
/* una abstracion del mundo real */

/* un molde de como quiero que luzca algo */
interface Person {
    firstName: string;
    lastName: string;
    age: number;
    address: Address;
}

interface Address {
    postalCode:string;
    city: string;
}


const ironman: Person = {
    firstName: 'Tony',
    lastName: 'Starck',
    age: 40,
    address: {
        postalCode: 'ABC123',
        city: 'New York'
    }
};


console.log(ironman)

//funciona hasta cierto punto la desestructuracion misma
/* const spiderman = {...ironman} */

//nueva forma de reutilizar
/* const spiderman = structuredClone(ironman);

spiderman.firstName = 'Peter';
spiderman.lastName = 'Parker';
spiderman.age = 22;
spiderman.addres.city = 'San Jose'

console.log(ironman, spiderman); */