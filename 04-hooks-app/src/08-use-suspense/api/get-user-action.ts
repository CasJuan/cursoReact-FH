import { id } from "zod/locales";

export interface User {
    id: number,
    name: string,
    location: string,
    role: string
}

export const getUserAction = async() => {
    await new Promise((res) => setTimeout(res, 2000));

    return{
        id:id,
        name: 'Juan Castro',
        location: 'Buenos Aires, Argetinas',
        role: 'Estudiante de Software'
    }
}