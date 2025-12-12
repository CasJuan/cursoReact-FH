import { useState } from "react"
import { MyTitlte } from "./ui/MyTitlte"
import { MySubTitle } from "./ui/MySubTitle";


export const MemoHok = () => {

    const [title, setTitle] = useState('Hola');
    const [subTitel, setSuTitle] = useState('Mundo');

  return (
    <div className="bg-gradient flez flex-col gap-4">
        <h1 className="text-2xl font-thin text-white">MemoApp</h1>

        <MyTitlte title={title}/>

        <MySubTitle subtitle={subTitel}/>

        <button className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer">Cambiar titulo</button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer">Cambiar subtitulo</button>


    </div>
  )
}
