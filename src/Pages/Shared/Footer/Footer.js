import { Grid, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <div style={{ background: "#16a085", height: "50vh" }}>
      <Grid
        container
        direction="row"
        justifyContent="space-around"
        alignItems="center"
      >
        <Typography variant="h4" gutterBottom component="div">
          This is footer...
        </Typography>
      </Grid>
    </div>
  );
};

export default Footer;
