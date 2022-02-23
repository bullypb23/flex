import React from 'react';
import { Typography, Box } from '@material-ui/core';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { images } from '../utils/images';

const FlexImages = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 2
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 576, min: 0 },
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
    >
      {images.map((img, number) => (
        <Box key={number}>
          <img src={img.src} alt={img.alt} />
        </Box>
      ))}
    </Carousel>
  )
}

export default FlexImages;
