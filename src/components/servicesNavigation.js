import React from 'react';
import { Link } from "gatsby";
import { FaHome } from "@react-icons/all-files/fa/FaHome";
import { FaStoreAlt } from "@react-icons/all-files/fa/FaStoreAlt";
import { FaFlagUsa } from "@react-icons/all-files/fa/FaFlagUsa";
import { FaWarehouse } from "@react-icons/all-files/fa/FaWarehouse";
import { FaBox } from '@react-icons/all-files/fa/FaBox';
import { Box } from "@material-ui/core";

const ServicesNavigation = () => {
  return (
    <div className="services-navigation">
      <Box className="service-nav">
        <Link to="/moving-services/local">
          <Box>Local</Box>
          <FaHome />
        </Link>
      </Box>
      <Box className="service-nav">
        <Link to="/moving-services/commercial">
          <Box>Commercial</Box>
          <FaStoreAlt />
        </Link>
      </Box>
      <Box className="service-nav">
        <Link to="/moving-services/long-distance">
          <Box>Long distance</Box>
          <FaFlagUsa />
        </Link>
      </Box>
      <Box className="service-nav">
        <Link to="/moving-services/storage">
          <Box>Storage</Box>
          <FaWarehouse />
        </Link>
      </Box>
      <Box className="service-nav">
        <Link to="/moving-services/packing">
          <Box>Packing</Box>
          <FaBox />
        </Link>
      </Box>
    </div>
  )
}

export default ServicesNavigation;
