import React from "react";
import { Container, Divider, Grid, Typography } from "@mui/material";

const ShowReelHome = () => {
  return (
    <div>
      <Container>
        <Typography variant="h2" gutterBottom component="div">
          Show Reel
        </Typography>

        <Grid
          container
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
        >
          <Typography
            variant="subtitle1"
            gutterBottom
            component="div"
            paragraph
            align="justify"
          >
            Etiam porttitor risus massa nec condiment gravida nibh vel velit
            auctor aliquetnean sollicitudin, lorem quis bibendum auci elit
            consequat
          </Typography>
          <Grid xs={12} sm={4} md={4}>
            <Grid sx={{ m: 2 }}>
              <img
                src="https://educator.qodeinteractive.com/wp-content/uploads/2017/07/event-8.jpg"
                alt=""
                width="100%"
              />
              <Typography
                variant="subtitle1"
                gutterBottom
                component="div"
                paragraph
                align="justify"
              >
                Let's talk science.
              </Typography>
              <Divider />
              <Typography align="left">
                October 22, 2021 @ 9:00 am - October 22, 2026 @ 9:00 am 24 Wiley
                Ave, East York
              </Typography>
            </Grid>
          </Grid>
          <Grid xs={12} sm={4} md={4}>
            <Grid sx={{ m: 2 }}>
              <img
                src="https://educator.qodeinteractive.com/wp-content/uploads/2017/07/event-9.jpg"
                alt=""
                width="100%"
              />
              <Typography
                variant="subtitle1"
                gutterBottom
                component="div"
                paragraph
                align="justify"
              >
                Let's talk science.
              </Typography>
              <Divider />
              <Typography align="left">
                October 22, 2021 @ 9:00 am - October 22, 2026 @ 9:00 am 24 Wiley
                Ave, East York
              </Typography>
            </Grid>
          </Grid>
          <Grid xs={12} sm={4} md={4}>
            <Grid sx={{ m: 2 }}>
              <img
                src="https://educator.qodeinteractive.com/wp-content/uploads/2017/07/event-7.jpg"
                alt=""
                width="100%"
              />
              <Typography
                variant="subtitle1"
                gutterBottom
                component="div"
                paragraph
                align="justify"
              >
                Let's talk science.
              </Typography>
              <Divider />
              <Typography align="left">
                October 22, 2021 @ 9:00 am - October 22, 2026 @ 9:00 am 24 Wiley
                Ave, East York
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default ShowReelHome;
