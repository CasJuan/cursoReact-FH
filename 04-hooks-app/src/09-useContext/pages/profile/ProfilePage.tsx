import { UserContext } from '@/09-useContext/context/UserContext'
import { Button } from '@/components/ui/button'
import { use } from 'react'

const ProfilePage = () => {

  const {user, logout} = use(UserContext);

  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>

      <h1 className='text-4xl font-bold '>Perfil del usuario</h1>
      <hr />

      <pre className='my-4x w-[80%] overflow-x-auto'>
        {JSON.stringify(user, null, 2)}
      </pre>

      <Button variant="destructive" onClick={logout}>Salir</Button>

    </div>
  )
}

export default ProfilePage