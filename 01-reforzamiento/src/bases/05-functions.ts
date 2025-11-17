
function greet (name: string ):string{
    return `Hola ${name}`
}

const greet2 = (name: string): string => {
    return `Hola ${name}`
}

const message = greet('Goku');
const message2 = greet2('Vegetta');

console.log(message)
console.log(message2)


function getUser() {
    return {
        uid: 'ABC-123',
        username: 'Father123'
    }
}

const getUser2  = () => {
    return {
        uid: 'ABC-123',
        username: 'Father123'
    }
}

const user = getUser();
console.log(user)

const user2 = getUser2();
console.log(user2)