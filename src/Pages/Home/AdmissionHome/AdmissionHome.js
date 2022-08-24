import { Button, Container, Grid, Typography } from "@mui/material";
import React from "react";

const AdmissionHome = () => {
  return (
    <div>
      <Container>
        <Typography variant="h3" gutterBottom component="div">
          Admission
        </Typography>
        <Grid
          container
          direction="row"
          justifyContent="space-around"
          alignItems="center"
        >
          <Grid container spacing={2}>
            <Grid item xs={6} md={6}>
              <img
                src="https://educator.qodeinteractive.com/wp-content/uploads/2017/07/h3-image-3.jpg"
                alt=""
                width="80%"
              />
            </Grid>
            <Grid item xs={6} md={6}>
              <Typography variant="h5" gutterBottom component="div">
                Applying For Admmission
              </Typography>
              <Typography variant="h6" gutterBottom component="div">
                Admisson is going on......
              </Typography>
              <Button variant="contained" color="success">
                Apply now
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default AdmissionHome;
