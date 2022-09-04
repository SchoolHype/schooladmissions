import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

const TabView = ({ value, handleChange }) => {
  return (
    <>
      <Box sx={{ bgcolor: "background.paper" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
          aria-label="scrollable auto tabs example"
        >
          <Tab label="Overview" />
          <Tab label="About" />
          <Tab label="Leadership Team" />
          <Tab label="Academics" />
          <Tab label="Infrastructure" />
          <Tab label="Distribution" />
          <Tab label="Activities & Events" />
          <Tab label="Facilities" />
          <Tab label="Test Preparations" />
          <Tab label="Teachers & Staff" />
          <Tab label="Admission & Fees" />
          <Tab label="Policy" />
          <Tab label="Gallery" />
          <Tab label="Contact" />
          <Tab label="Reviews & Ratings" />
          <Tab label="Downloads" />
          <Tab label="Specialities" />
        </Tabs>
      </Box>
    </>
  );
};

export default TabView;
