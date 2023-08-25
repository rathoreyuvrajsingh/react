import React from 'react'
import ImageCard from './ImageCard'
import ImageData from './ImageData'




const ncard = (val) =>{
  return < ImageCard key={val.id} title={val.title} imgsrc={val.imgsrc} desc={val.desc} />
}

const ProjectCard = () => {
  return (
    <div  className='row'>
    <h2><i>Indoor</i></h2>
      {ImageData.map((val,index)=>(
        <div key ={val.id} className='col-md-3'>
          {ncard(val)}
        </div>
      ))}
    </div>
  )
}

export default ProjectCard