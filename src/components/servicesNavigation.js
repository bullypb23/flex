import React from 'react';
import { Link } from "gatsby";
import { FaHome } from "@react-icons/all-files/fa/FaHome";
import { FaStoreAlt } from "@react-icons/all-files/fa/FaStoreAlt";
import { FaWarehouse } from "@react-icons/all-files/fa/FaWarehouse";
import { FaBox } from '@react-icons/all-files/fa/FaBox';
import { FaTruck } from '@react-icons/all-files/fa/FaTruck';
import { FaPaintBrush } from '@react-icons/all-files/fa/FaPaintBrush';
import { Box } from "@material-ui/core";

const ServicesNavigation = () => {
  return (
    <div>
      <Box>
        <h1 className="data-heading">What Flex Moving offers to our clients...</h1>
      </Box>
      <Box className="services-navigation">
        <Box className="service-nav">
          <Link to="/moving-services/residental">
            <Box className="icon-background">
              <FaHome />
            </Box>
            <Box>Residental</Box>
          </Link>
        </Box>
        <Box className="service-nav">
          <Link to="/moving-services/commercial">
            <Box className="icon-background">
              <FaStoreAlt />
            </Box>
            <Box>Commercial</Box>
          </Link>
        </Box>
        <Box className="service-nav">
          <Link to="/moving-services/long-distance">
            <Box className="icon-background">
              <FaTruck />
            </Box>
            <Box>Long distance</Box>
          </Link>
        </Box>
        <Box className="service-nav">
          <Link to="/moving-services/storage">
            <Box className="icon-background">
              <FaWarehouse />
            </Box>
            <Box>Storage</Box>
          </Link>
        </Box>
        <Box className="service-nav">
          <Link to="/moving-services/arts">
            <Box className="icon-background">
              <FaPaintBrush />
            </Box>
            <Box>Arts</Box>
          </Link>
        </Box>
        <Box className="service-nav">
          <Link to="/moving-services/packing">
            <Box className="icon-background">
              <FaBox />
            </Box>
            <Box>Packing</Box>
          </Link>
        </Box>
      </Box>
    </div>
  )
}

export default ServicesNavigation;
