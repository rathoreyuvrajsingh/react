import React, { useContext } from 'react'
import DataContext from './DataContext'

const Dcomponent = () => {
    const sharedData = useContext(DataContext);

  return (
    <div>
    <i>Dcomponent</i>
    <p><i>Property Recived From Grand Parents</i></p>
      
    </div>
  )
}

export default Dcomponent
