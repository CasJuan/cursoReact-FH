import {Fragment} from 'react'

// const newMessage = {
//   mesage: 'Hola Mundo',
//   title: 'Juan'
// };

// const getResult = () => {
//   return 4 + 4;
// }

import PropTypes from 'prop-types';


export const FirstApp = ( {title, subTitle}  ) => {
    
  return (
    <>

    <h1>{title}</h1>
    {/* <code>{ JSON.stringify(newMessage) }</code> */}
    <p>{subTitle}</p>
    
    
    </>
  )
}

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.number.isRequired
}
