import { heroApi } from "../api/hero.api"


export const getHeroByPageAction = async() => {

    const {data} = await heroApi.get(`/`);

    console.log({data});

    return data;


}