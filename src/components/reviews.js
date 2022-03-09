import React from 'react';
import { Typography, Box } from '@material-ui/core';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { reviews } from '../utils/reviews';
import { FaStar } from "@react-icons/all-files/fa/FaStar";

const Reviews = () => {
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
      {reviews.map((review, id) => (
        <Box key={id} className="review-container">
          <Typography style={{ fontStyle: 'italic', paddingBottom: '10px' }}>"{review.description}"</Typography>
          <Typography style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>{review.name}</Typography>
          <Box>
            <FaStar style={{ color: '#FFD700', fontSize: '20px' }} />
            <FaStar style={{ color: '#FFD700', fontSize: '20px' }} />
            <FaStar style={{ color: '#FFD700', fontSize: '20px' }} />
            <FaStar style={{ color: '#FFD700', fontSize: '20px' }} />
            <FaStar style={{ color: '#FFD700', fontSize: '20px' }} />
          </Box>
        </Box>
      ))}
    </Carousel>
  )
}

export default Reviews;
