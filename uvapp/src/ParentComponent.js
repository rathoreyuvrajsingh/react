import React, { Children, useState } from 'react'
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const [data, setdata] = useState(null);
  const HandleChildComponent = (Children) => {
    setdata(Children);

  };
  return (
    <div>
      <ChildComponent onDataFromChild={HandleChildComponent} />
      <p>{data}</p>
    </div>


  )
}

export default ParentComponent;
