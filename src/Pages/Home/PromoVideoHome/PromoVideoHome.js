import { Container, Grid, Typography } from "@mui/material";
import React from "react";

const PromoVideoHome = () => {
  return (
    <div>
      <Container>
        <Typography variant="h3" gutterBottom component="div">
          Promo Vide
        </Typography>
        <Grid
          container
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
        >
          <Grid container spacing={2} columns={16}>
            <Grid item xs={8}>
              Video
            </Grid>
            <Grid item xs={8}>
              <Typography variant="h4" gutterBottom component="div">
                Title...
              </Typography>
              <Typography
                variant="h4"
                gutterBottom
                component="div"
                align="left"
              >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Mollitia, saepe!
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default PromoVideoHome;
