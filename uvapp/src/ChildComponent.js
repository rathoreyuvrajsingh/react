import React from 'react'

const ChildComponent = ({onDataFromChild}) => {
    const SendDatatoParentComponent =()=>{
     const data ="Logged in";
     onDataFromChild(data);

    };
  return (
    <div>
     <div>ChildComponent</div>
     <button  onClick={SendDatatoParentComponent}/>
    
       
    </div>
  );
};

export default ChildComponent
