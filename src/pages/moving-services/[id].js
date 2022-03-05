import React, { useEffect, useState } from 'react';
import Layout from '../../components/layout';
import SEO from '../../components/seo';
import Reviews from '../../components/reviews';
import FlexImages from '../../components/flexImages';
import { Box, Typography } from '@material-ui/core';
import { data } from '../../utils/movingServicesData';

const Services = (props) => {
  const { id } = props.params;
  const [serviceData, setServiceData] = useState();

  useEffect(() => {
    if (id) {
      setServiceData(data[id]);
    }
  }, [id])
  return (
    serviceData ? (
      <Layout>
        <SEO title={serviceData.title} />
        <Box className="service-page" style={{ backgroundImage: `url(${serviceData.img})` }}></Box>
        <Box className="service-info">
          <h1 className="service-heading">{serviceData.name}</h1>
          <Typography className="service-paragraph">{serviceData.text}</Typography>
          <Typography style={{ textAlign: 'right', fontStyle:'italic', paddingTop: '10px' }}>Your move is our pleasure!</Typography>
        </Box>
        <Box className="service-reviews">
          <Reviews />
        </Box>
        <Box className="info-container">
          <Box style={{ width: '80%' }}>
            <h1 className="data-heading">Flex Moving in images...</h1>
            <FlexImages />
          </Box>
        </Box>
      </Layout>
    ) : <></>
  )
}

export default Services;
