import { Container, Grid, Typography } from "@mui/material";
import React from "react";

const MediaBuzzHome = () => {
  return (
    <div>
      <Container>
        <Typography variant="h2" gutterBottom component="div">
          Media Buzz
        </Typography>
        <Grid
          container
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
        >
          <Grid xs={12} sm={6}>
            <Typography variant="h2" gutterBottom component="div" align="left">
              Welcome
            </Typography>
            <Typography variant="h5" gutterBottom component="div" align="left">
              Etiam porttitor risus massa nec condiment gravida nibh vel velit
              auctor aliquet. Aenean sollicitudinlorem quis bibendum
            </Typography>
            <Grid align="left">
              <img
                src="https://educator.qodeinteractive.com/wp-content/uploads/2017/07/h3-img.jpg"
                alt=""
                width="80%"
              />
            </Grid>
          </Grid>

          <Grid xs={12} sm={6}>
            <Typography variant="h2" gutterBottom component="div" align="left">
              Latest news
            </Typography>
            <Typography variant="h5" gutterBottom component="div" align="left">
              Etiam porttitor risus massa nec condiment gravida nibh vel velit
              auctor aliquet. Aenean sollicitudinlorem quis bibendum
            </Typography>
            <Grid>
              <Grid align="left" sx={{ display: "flex", my: 2 }}>
                <img
                  src="https://educator.qodeinteractive.com/wp-content/uploads/2017/07/blog-featured-1-1-550x550.jpg"
                  alt=""
                  width="20%"
                />
                <Typography
                  variant="h5"
                  gutterBottom
                  component="div"
                  align="left"
                  sx={{ ml: 4 }}
                >
                  Etiam porttitor risus massa nec condiment gravida nibh vel
                  velit auctor aliquet. Aenean sollicitudinlorem quis bibendum
                </Typography>
              </Grid>
              <Grid align="left" sx={{ display: "flex" }}>
                <img
                  src="https://educator.qodeinteractive.com/wp-content/uploads/2017/07/blog-featured-1-1-550x550.jpg"
                  alt=""
                  width="20%"
                />
                <Typography
                  variant="h5"
                  gutterBottom
                  component="div"
                  align="left"
                  sx={{ ml: 4 }}
                >
                  Etiam porttitor risus massa nec condiment gravida nibh vel
                  velit auctor aliquet. Aenean sollicitudinlorem quis bibendum
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default MediaBuzzHome;
