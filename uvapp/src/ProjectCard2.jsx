import React from 'react'
import ImageCard2 from './ImageCard2'
import ImageData2 from './ImageData2'

const ncard = (val) =>{
    return < ImageCard2 key={val.id} title={val.title} imgsrc={val.imgsrc} desc={val.desc} />
  }
  
  const ProjectCard2 = () => {
    return (
      <div  className='row'>
      <h2><i>Outdoor</i></h2>

        {ImageData2.map((val,index)=>(
          <div key ={val.id} className='col-md-3'>
            {ncard(val)}
          </div>
        ))}
      </div>
    )
  }
  

export default ProjectCard2
