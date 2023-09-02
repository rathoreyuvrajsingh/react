import React from 'react'
import DataContext from './DataContext';
import Bcomponent from './Bcomponent';

const Acomponent = () => {
    const vasihatnama = "mere pote ko 4,0,000cr dedena mere salat ne ke baad ";
  return (
    <DataContext.Provider>
      <div>
       <i>Acomponent</i>
       <Bcomponent/>


      </div>




    </DataContext.Provider>
   
  )
}

export default Acomponent
