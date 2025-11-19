//TAREA
export const MyAwesomeApp = () => {

    const firstName = 'Juan';
    const lastName = 'Castro';

    const favoriteGames = ['Elden Ring', 'Smash', 'Metal gear'];
    const isActive = false;

    const address = {
      zipCode: 'ABC-123',
      country: 'Canada'
    }

  return (
    <>
        <h1>{firstName}</h1>
        <h3>{lastName}</h3>

        <p>{favoriteGames.join(', ')}</p>

        <h1>{isActive ? 'Activo' : 'No activo'}</h1>

        <p>
          {JSON.stringify(address)}
        </p>
    </>
  )
}
