const person = {
    name:'Tony',
    age: 45,
    key: 'Iroman',
}


const {name:ironmanname,age,key} = person;


/* const name = person.name;
const age = person.age;
const key = person.key; */

console.log(ironmanname,age,key);

interface Hero {
    name:string;
    age:number;
    key:string;
    rank?:string;
}

const useContext = ({key, name, age, rank = 'Sin rango'}:Hero) => {

    return{
        keyName:key,
        user: {
            name:name,
            age: age
        },
        rank:rank
    }
}

const {rank,keyName, user:{name}} = useContext(person);

console.log({rank,keyName,name})