import { heroes , Owner, type Hero} from "./data/heroes.data"

const getHeroById  = (id: number): Hero | undefined => {
    const hero = heroes.find( (hero) => {
        return hero.id === id;
    })
    /* if(!hero){
        throw new Error("No existe el hero con el id");
    } */
    return hero;
}

//console.log(getHeroById(4))

export const getHeroesByOwner = (owner: Owner) => {
    const herosByOwner = heroes.filter(
        hero => hero.owner === owner
    )

    return herosByOwner;
}