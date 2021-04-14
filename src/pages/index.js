import * as React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { TextField, Box, Button, TextareaAutosize } from "@material-ui/core";
import ServicesNavigation from "../components/servicesNavigation";

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
          <Box>
            <Box className="form-control-container">
              <TextField label="Name" className="input" />
            </Box>
            <Box className="form-control-container">
              <TextField label="Email" className="input" />
            </Box>
            <Box className="form-control-container">
              <TextareaAutosize style={{ padding: '5px' }} placeholder="Message" className="input textarea" rowsMin={3} />
            </Box>
            <Box className="form-control-container">
              <Button style={{ backgroundColor: '#055793', color: '#fff' }} variant="contained">Send message</Button>
            </Box>
          </Box>
        </div>
      </div>
      <ServicesNavigation />
    </Layout>
  )
}

export default IndexPage;