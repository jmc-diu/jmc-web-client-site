import React from "react";
import { Container, Divider, Grid, Typography } from "@mui/material";

const FallDetails = () => {
  return (
    <div>
      <Container sx={{ my: 12 }}>
        <Grid
          container
          direction="column"
          justifyContent="space-around"
          alignItems="flex-start"
        >
          <Grid>
            <Grid item xs={6} md={12}>
              <Typography
                variant="h4"
                gutterBottom
                component="div"
                align="left"
              >
                Media Buzz Description...
              </Typography>
              <Typography
                variant="subtitle1"
                gutterBottom
                component="div"
                align="left"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis velit numquam ut maxime doloremque distinctio sequi
                eum quidem architecto, delectus nam voluptatibus. Doloremque
                perspiciatis velit enim odio maiores quod suscipit odit,
                mollitia nostrum ullam laboriosam expedita, repudiandae dolores
                nesciunt quia sed delectus minus earum tempora? Illo unde dolor
                laudantium architecto!
              </Typography>
            </Grid>
            <Grid item xs={6} md={12}>
              <Typography
                variant="h4"
                gutterBottom
                component="div"
                align="left"
              >
                Video Intro of our renowned guest..
                <Divider />
              </Typography>
              <Typography
                variant="h4"
                gutterBottom
                component="div"
                align="left"
              >
                Video
              </Typography>
              <Typography
                variant="h4"
                gutterBottom
                component="div"
                align="left"
              >
                Video title,,
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={12} sm={6}>
              <Typography
                variant="h4"
                gutterBottom
                component="div"
                align="left"
              >
                Ad. Poster
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography
                variant="h4"
                gutterBottom
                component="div"
                align="left"
              >
                Ad. video
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid xs={12}>
            <Typography variant="h4" gutterBottom component="div" align="left">
              Guest lecture...
              <Divider />
            </Typography>
          </Grid>
          <Grid xs={12} sm={6}>
            Video1
          </Grid>
          <Grid xs={12} sm={6}>
            video2
          </Grid>
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid xs={12}>
            <Typography variant="h4" gutterBottom component="div" align="left">
              Questions and Asnwer session...
              <Divider />
            </Typography>
          </Grid>
          <Grid xs={12} sm={6}>
            vlog Video1
            <Typography>student title</Typography>
          </Grid>
          <Grid xs={12} sm={6}>
            vlog video2
            <Typography>student title</Typography>
          </Grid>
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid xs={12}>
            <Typography variant="h4" gutterBottom component="div" align="left">
              Photo exhibitions...
              <Divider />
            </Typography>
          </Grid>
          <Grid xs={12} sm={3}>
            photo1
            <Typography>student title</Typography>
          </Grid>
          <Grid xs={12} sm={3}>
            photo2
            <Typography>student title</Typography>
          </Grid>
          <Grid xs={12} sm={3}>
            Photo3
            <Typography>student title</Typography>
          </Grid>
          <Grid xs={12} sm={3}>
            photo4
            <Typography>student title</Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default FallDetails;
