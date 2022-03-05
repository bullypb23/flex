import React from 'react';
import { Box } from '@material-ui/core';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { images } from '../utils/images';

const FlexImages = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1
    }
  };

  return (
    <Carousel
      responsive={responsive}
      ssr={true}
      infinite={true}
      swipeable={true}
      draggable={true}
      autoPlay
      autoPlaySpeed={3000}
      keyBoardControl={true}
      sliderClass="carousel-container"
      itemClass="carousel-item-image"
    >
      {images.map((img, index) => (
        <Box key={index} className="image-carousel-container" style={{ backgroundImage: `url(${img.src})`, backgroundPositionX: `${img.backgroundPositionX}px` }}>
        </Box>
      ))}
    </Carousel>
  )
}

export default FlexImages;
