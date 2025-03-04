import {Fragment} from 'react'

// const newMessage = {
//   mesage: 'Hola Mundo',
//   title: 'Juan'
// };

// const getResult = () => {
//   return 4 + 4;
// }

import PropTypes from 'prop-types';


export const FirstApp = ( {title, subTitle, name}  ) => {
    
  return (
    <>

    <h1>{title}</h1>
    {/* <code>{ JSON.stringify(newMessage) }</code> */}
    <p>{subTitle}</p>
    <p>{name}</p>
    
    
    </>
  )
}

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired
}

FirstApp.defaultProps = {
  title: ' No hay ningun titulo',
  subTitle: 'No hay subtitulo',
  name: 'Juan Castro'
}
