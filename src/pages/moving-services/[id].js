import React, { useEffect, useState } from 'react';
import Layout from '../../components/layout';
import SEO from '../../components/seo';
import Reviews from '../../components/reviews';
import FlexImages from '../../components/flexImages';
import { Box, Typography } from '@material-ui/core';
import { data } from '../../utils/movingServicesData';
import department from "../../images/department-of-transportation.png";
import newYorkDepartment from "../../images/new-york-department.jpg";
import ucr from "../../images/ucr.png";
import useWindowSize from "../../utils/useWindowSize";

const Services = (props) => {
  const { id } = props.params;
  const [serviceData, setServiceData] = useState();
  const { width } = useWindowSize();

  useEffect(() => {
    if (id) {
      setServiceData(data[id]);
    }
  }, [id]);

  return (
    serviceData ? (
      <Layout>
        <SEO title={serviceData.title} />
        <Box className="service-page" style={{ backgroundImage: `url(${serviceData.img})`, backgroundPositionX: `${width < 768 ? `${serviceData.backgroundPosition}px` : '0px' }`}}></Box>
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
          <h1 className="data-heading">Officially autorized and licensed by:</h1>
          <Box className="image-wrapper">
            <img
              src={department}
              alt="USA Department of transportation"
              style={{ width: 150, height: 150 }}
            />
            <img
              src={newYorkDepartment}
              alt="New York Department of transportation"
              style={{ height: 200 }}
            />
            <img
              src={ucr}
              alt="USA Department of transportation"
              style={{ width: 150, height: 150 }}
            />
          </Box>
        </Box>
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
