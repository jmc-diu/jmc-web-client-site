import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import cover from "../../../images/cover.jpg";

const About = () => {
  return (
    <div>
      <Grid
        style={{
          background: `url(${cover})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "cover",
          width: "100%",
        }}
      >
        <Container>
          <Grid
            container
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
            sx={{ height: "100vh" }}
          >
            <Typography variant="h5" gutterBottom component="div" align="left">
              Etiam porttitor risus massa nec condiment gravida nibh vel velit
              auctor aliquet. Aenean sollicitudinlorem quis bibendum
            </Typography>
          </Grid>
        </Container>
      </Grid>
    </div>
  );
};

export default About;
