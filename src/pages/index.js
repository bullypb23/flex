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
          <h1 className="info-heading"><FaInfoCircle style={{ marginRight: '10px', color: '#055793' }} />COVID - 19 RESPONSES</h1>
          <Typography className="service-paragraph">As the country responds to the pandemic of COVID-19, our thoughts are with the people affected and the medical professionals working around the clock to help those most in need. At Flex Moving Company, we are working to do our part as an ESSENTIAL BUSINESS by ensuring the safety of our employees, striving to protect the health and well-being of the communities in which we operate and providing relocation services and resources to our customers to make their move as safe as possible. We have taken great care in following the guidelines provided by the CDC to ensure our facilities, staff and equipment are safe and sanitary.</Typography>
        </Box>
      </Box>
    </Layout>
  )
}

export default IndexPage;