import { Outlet } from "react-router"

export const HeroLayouts = () => {
  return (
    <div className="bg-red-500">
        <h1>Hola Mundo</h1>
        <Outlet/>
    </div>
  )
}
