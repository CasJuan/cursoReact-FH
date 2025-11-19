//TAREA

import type { CSSProperties } from "react";

  const firstName = 'Juan';
  const lastName = 'Castro';

  const favoriteGames = ['Elden Ring', 'Smash', 'Metal gear'];
  const isActive = false;
  const address = {
    zipCode: 'ABC-123',
    country: 'Canada'
  }
  const myStyle:CSSProperties = {
    backgroundColor: 'red',
    borderRadius: 10,
    padding: 10
  }

export const MyAwesomeApp = () => {
  return (
    <>
        <h1 data-testid="first-name-title" >{firstName}</h1>
        <h3>{lastName}</h3>

        <p>{favoriteGames.join(', ')}</p>

        <h1>{isActive ? 'Activo' : 'No activo'}</h1>

        <p
          style={{
              backgroundColor: '#fafafa',
              borderRadius: 10,
              padding: 10
            }}
        >
          {JSON.stringify(address)}
        </p>

        <p style={myStyle}>
          {JSON.stringify(address)}
        </p>
    </>
  )
}
