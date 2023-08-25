import React from 'react'
import Carousel from 'react-bootstrap/Carousel';


const HomeCarousel = () => {
  return (
    <div>
        <Carousel className='carousel'>
       <Carousel.Item>
        <img src='https://wallpapercave.com/wp/wp2482996.jpg' text="First slide" alt='' />
      </Carousel.Item>

      <Carousel.Item>
        <img src="https://e1.pxfuel.com/desktop-wallpaper/250/71/desktop-wallpaper-men-muscle-human-back-black-backgrounds-man-muscle.jpg" text="Second slide" alt='' />
      </Carousel.Item>

      <Carousel.Item>
        <img src="https://wallpaper-house.com/data/out/9/wallpaper2you_350186.jpg" text="Third slide" alt=''/>

      </Carousel.Item>

      <Carousel.Item>
      <img src="https://e1.pxfuel.com/desktop-wallpaper/250/71/desktop-wallpaper-men-muscle-human-back-black-backgrounds-man-muscle.jpg" text="Fourth slide" alt='' />
    </Carousel.Item>

    </Carousel>
      
    </div>
  )
}

export default HomeCarousel
