import { useCallback, useState } from "react"
import { MyTitlte } from "./ui/MyTitlte"
import { MySubTitle } from "./ui/MySubTitle";

/* const handleMyApiCall = (myValue: string) => {
    console.log('Llamar a mi API' + myValue)
}; */

export const MemoHok = () => {

    const [title, setTitle] = useState('Hola');
    const [subTitle, setSuTitle] = useState('Mundo');

    const handleMyAPICall = useCallback(() => {
        console.log('Llamar a mi API', subTitle)
    }, [subTitle])

  return (
    <div className="bg-gradient flez flex-col gap-4">
        <h1 className="text-2xl font-thin text-white">MemoApp</h1>

        <MyTitlte title={title}/>

        <MySubTitle subtitle={subTitle} callMyAPI={handleMyAPICall}/>

        <button className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
            onClick={() => setTitle('Hello' + new Date().getTime())}
        >Cambiar titulo</button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
            //onClick={() => setSuTitle('World' + new Date().getTime())}
            onClick={() => setSuTitle('World')}
        >Cambiar subtitulo</button>


    </div>
  )
}
