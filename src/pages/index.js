import * as React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Form from "../components/form";
import ServicesNavigation from "../components/servicesNavigation";
import Reviews from "../components/reviews";
import FlexImages from "../components/flexImages";
import { Typography, Box } from "@material-ui/core";
import { data } from "../utils/homePageData";
import department from "../images/department-of-transportation.png";
import newYorkDepartment from "../images/new-york-department.jpg";
import ucr from "../images/ucr.png";
import { FaFacebookSquare } from '@react-icons/all-files/fa/FaFacebookSquare';
import { FaTwitterSquare } from '@react-icons/all-files/fa/FaTwitterSquare';
import { FaInstagramSquare } from '@react-icons/all-files/fa/FaInstagramSquare';
import { FaLinkedin } from '@react-icons/all-files/fa/FaLinkedin';

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Flex Moving New York" />
      <div className="home-page-wrapper" id="contact">
        <div className="home-page-overflow">
          <h3>Get you moving quote</h3>
          <Form />
        </div>
      </div>
      <Box className="info-container">
        <Box style={{ width: '80%' }}>
          <h1 className="data-heading">About Flex Moving...</h1>
          <Typography className="service-paragraph">The friendship that began ten years ago back home in Europe has grown into partnership here in the United States. We spent six years working in the largest NYC moving companies gaining experience in all aspects of moving industry before making Flex moving as well-known company. We wanted to form a moving company that kept its word. A company dedicated to making a difference in the lives of its clients, team members and community. A moving company who offers service that puts a smile on the faces of our customers. Our services include local, intrastate, long distance, international, residential and commercial moves as well storage service and warehousing. Whether you are moving your apartment or house or your businesses in NYC area or out of state Flex Moving is there as your only and best choice for a long-term period. As a trusted moving company our moving service ensure every aspect of your move to be coherent and stress free.</Typography>
        </Box>
      </Box>
      <ServicesNavigation />
      <Box className="info-container">
        <Box style={{ width: '80%' }}>
          <h1 className="data-heading">Why Flex Moving is the first and only choice?</h1>
          <Box className="data-wrapper">
            {data.map((item, index) => (
              <Box key={index} className="data-container">
                <Box>
                  <h3 className="data-heading" style={{ fontSize: '1.5rem' }}>{item.title}</h3>
                </Box>
                <Box>
                  <Typography className="data-text">{item.text}</Typography>
                </Box>
                <Box className="data-icon-wrapper">
                  {item.icon}
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
      <Box className="info-container">
        <Box style={{ width: '80%' }}>
          <h1 className="data-heading">Our satisfied clients speaking instead of us...</h1>
          <Reviews />
        </Box>
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
      <Box className="info-container">
        <Box style={{ width: '80%' }}>
          <h1 className="data-heading">COVID - 19 responses</h1>
          <Typography className="service-paragraph">As the country responds to the pandemic of COVID-19, our thoughts are with the people affected and the medical professionals working around the clock to help those most in need. At Flex Moving Company, we are working to do our part as an ESSENTIAL BUSINESS by ensuring the safety of our employees, striving to protect the health and well-being of the communities in which we operate and providing relocation services and resources to our customers to make their move as safe as possible. We have taken great care in following the guidelines provided by the CDC to ensure our facilities, staff and equipment are safe and sanitary.</Typography>
        </Box>
      </Box>
      {/* <Box className="info-container">
        <Box style={{ width: '80%' }}>
          <h1 className="data-heading">Follow us on:</h1>
          <Box className="logo-wrapper">
            <Box className="logo">
              <a href="" style={{ color: '#3b5998' }}>
                <FaFacebookSquare />
              </a>
            </Box>
            <Box className="logo">
              <a href="" style={{ color: '#00acee' }}>
                <FaTwitterSquare />
              </a>
            </Box>
            <Box className="logo">
              <a href="https://www.instagram.com/flexmoving/?hl=en" target="_blank">
                <FaInstagramSquare className="instagram-logo" />
              </a>
            </Box>
            <Box className="logo">
              <a href="" style={{ color: '#0077b5' }}>
                <FaLinkedin />
              </a>
            </Box>
          </Box>
        </Box>
      </Box> */}
    </Layout>
  )
}

export default IndexPage;