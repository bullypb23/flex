import * as React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Form from "../components/form";
import ServicesNavigation from "../components/servicesNavigation";
import { Typography, Box } from "@material-ui/core";
import { FaInfoCircle } from "@react-icons/all-files/fa/FaInfoCircle";

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Flex Moving New York" />
      <div className="home-page-wrapper" >
        <div className="home-page-heading">
          <h1>NYC Moving Company</h1>
          <h3>Your move is our pleasure</h3>
        </div>
        <div className="home-page-overflow">
          <h3>Looking for amazing moving experience?</h3>
          <Form />
        </div>
      </div>
      <ServicesNavigation />
      <Box className="info-container">
        <Box style={{ width: '80%' }}>
          <h1 className="info-heading">About us</h1>
          <Typography>The friendship that began ten years ago back home in Europe has grown into partnership here in the United States. We spent six years working in the largest NYC moving companies gaining experience in all aspects of moving industry before making Flex moving as well-known company. We wanted to form a moving company that kept its word. A company dedicated to making a difference in the lives of its clients, team members and community. A moving company who offers service that puts a smile on the faces of our customers. Our services include local, intrastate, long distance, international, residential and commercial moves. as well storage service and warehousing. Whether you are moving your apartment or house or your businesses in NYC area or out of state Flex Moving is there as your only and best choice for a long-term period. As a trusted moving company our moving service ensure every aspect of your move to be coherent and stress free.</Typography>
        </Box>
      </Box>
      <Box className="info-container">
        <Box style={{ width: '80%' }}>
          <h1 className="info-heading"><FaInfoCircle style={{ marginRight: '10px', color: '#055793' }} />COVID - 19 RESPONSES</h1>
          <Typography className="service-paragraph">As the country responds to the pandemic of COVID-19, our thoughts are with the people affected and the medical professionals working around the clock to help those most in need. At Flex Moving Company, we are working to do our part as an ESSENTIAL BUSINESS by ensuring the safety of our employees, striving to protect the health and well-being of the communities in which we operate and providing relocation services and resources to our customers to make their move as safe as possible. We have taken great care in following the guidelines provided by the CDC to ensure our facilities, staff and equipment are safe and sanitary.</Typography>
        </Box>
      </Box>
    </Layout>
  )
}

export default IndexPage;