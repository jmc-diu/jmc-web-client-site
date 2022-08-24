import { Container, Grid, Typography } from "@mui/material";
import React from "react";

const EventsHome = () => {
  return (
    <div>
      <Container>
        <Typography variant="h2" gutterBottom component="div">
          Events
        </Typography>
        <Grid
          container
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
        >
          <Grid container spacing={2}>
            <Grid xs={6}>
              <Typography variant="h4" gutterBottom component="div">
                Banner side..
              </Typography>
            </Grid>
            <Grid xs={6}>
              <Typography variant="h4" gutterBottom component="div">
                Banner side
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default EventsHome;
