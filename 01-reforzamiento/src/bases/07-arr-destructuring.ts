

const characterName = ['Goku','Vegetta','Trunks'];

const [,p2] = characterName;

console.log(p2)

const returnArrayFn = () => {
    //as const siempre va a retornas el tipado estrcito string y number
    return['ABC',123] as const;
};

const [letters, numbers] = returnArrayFn();

console.log(letters + numbers)

//TAREA

const useState = (value:string) => {
    return [
        value,
        (newValue: string) => {
            console.log(newValue)
        }
    ] as const
};

const [name, setName] = useState('Goku');
console.log(name);       // Goku
setName('Vegeta');       // Imprime "Vegeta"