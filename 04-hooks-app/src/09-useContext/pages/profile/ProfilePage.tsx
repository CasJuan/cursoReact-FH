import { Button } from '@/components/ui/button'
import React from 'react'

const ProfilePage = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>

      <h1 className='text-4xl font-bold '>Perfil del usuario</h1>
      <hr />

      <pre className='my-4x'>
        {JSON.stringify({}, null, 2)}
      </pre>

      <Button variant="destructive">Salir</Button>

    </div>
  )
}

export default ProfilePage