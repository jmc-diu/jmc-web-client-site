import { Container, Grid, Typography } from "@mui/material";
import React from "react";

const ShowReels = () => {
  return (
    <div>
      <Container sx={{ my: 8 }}>
        <Typography variant="h3" gutterBottom component="div">
          Welcome to Show Reel
        </Typography>
        <Typography variant="h6" gutterBottom component="div" align="left">
          Show Reel videos
        </Typography>
        <Grid
          container
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
        >
          <React.Fragment>
            <Grid item xs={3}>
              <Typography variant="subtitle1" gutterBottom component="div">
                video
              </Typography>
              <Typography variant="subtitle1" gutterBottom component="div">
                video title
              </Typography>
              <Typography variant="subtitle1" gutterBottom component="div">
                student Name
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography variant="subtitle1" gutterBottom component="div">
                video
              </Typography>
              <Typography variant="subtitle1" gutterBottom component="div">
                video title
              </Typography>
              <Typography variant="subtitle1" gutterBottom component="div">
                student Name
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography variant="subtitle1" gutterBottom component="div">
                video
              </Typography>
              <Typography variant="subtitle1" gutterBottom component="div">
                video title
              </Typography>
              <Typography variant="subtitle1" gutterBottom component="div">
                student Name
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography variant="subtitle1" gutterBottom component="div">
                video
              </Typography>
              <Typography variant="subtitle1" gutterBottom component="div">
                video title
              </Typography>
              <Typography variant="subtitle1" gutterBottom component="div">
                student Name
              </Typography>
            </Grid>
          </React.Fragment>
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
        >
          <Grid xs={12}>
            <Typography variant="h6" gutterBottom component="div" align="left">
              Written Reports
            </Typography>
          </Grid>
          <React.Fragment>
            <Grid item xs={4}>
              <Typography variant="subtitle1" gutterBottom component="div">
                Title
              </Typography>
              <Typography variant="subtitle2" gutterBottom component="div">
                student name
              </Typography>
              <Typography variant="subtitle1" gutterBottom component="div">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
                incidunt?
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="subtitle1" gutterBottom component="div">
                Title
              </Typography>
              <Typography variant="subtitle2" gutterBottom component="div">
                student name
              </Typography>
              <Typography variant="subtitle1" gutterBottom component="div">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
                incidunt?
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="subtitle1" gutterBottom component="div">
                Title
              </Typography>
              <Typography variant="subtitle2" gutterBottom component="div">
                student name
              </Typography>
              <Typography variant="subtitle1" gutterBottom component="div">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
                incidunt?
              </Typography>
            </Grid>
          </React.Fragment>
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
        >
          <Grid xs={12}>
            <Typography variant="h6" gutterBottom component="div" align="left">
              Show Reels Photos
            </Typography>
          </Grid>
          <React.Fragment>
            <Grid item xs={3}>
              <Typography variant="subtitle1" gutterBottom component="div">
                Image
              </Typography>
              <Typography variant="subtitle1" gutterBottom component="div">
                student Name
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography variant="subtitle1" gutterBottom component="div">
                Image
              </Typography>
              <Typography variant="subtitle1" gutterBottom component="div">
                student Name
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography variant="subtitle1" gutterBottom component="div">
                Image
              </Typography>
              <Typography variant="subtitle1" gutterBottom component="div">
                student Name
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography variant="subtitle1" gutterBottom component="div">
                Image
              </Typography>
              <Typography variant="subtitle1" gutterBottom component="div">
                student Name
              </Typography>
            </Grid>
          </React.Fragment>
        </Grid>
      </Container>
    </div>
  );
};

export default ShowReels;
