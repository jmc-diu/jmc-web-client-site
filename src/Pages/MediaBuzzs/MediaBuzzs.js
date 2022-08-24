import React from "react";
import { Box, Button, Container, Grid, Paper, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import ButtonBase from "@mui/material/ButtonBase";
import { Link } from "react-router-dom";

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  height: 200,
  [theme.breakpoints.down("sm")]: {
    width: "100% !important", // Overrides inline-style
    height: 100,
  },
  "&:hover, &.Mui-focusVisible": {
    zIndex: 1,
    "& .MuiImageBackdrop-root": {
      opacity: 0.15,
    },
    "& .MuiImageMarked-root": {
      opacity: 0,
    },
    "& .MuiTypography-root": {
      border: "4px solid currentColor",
    },
  },
}));

const Image = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create("opacity"),
}));

const ImageMarked = styled("span")(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: "absolute",
  bottom: -2,
  left: "calc(50% - 9px)",
  transition: theme.transitions.create("opacity"),
}));

const MediaBuzzs = () => {
  return (
    <div>
      <Container sx={{ my: 12 }}>
        <Typography variant="h2" gutterBottom component="div">
          Welcome To Media Buzz
        </Typography>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            sx={{ m: 4 }}
          >
            <Grid item xs={6}>
              <Box sx={{ my: 2 }}>
                <ImageButton focusRipple>
                  <img
                    src="https://educator.qodeinteractive.com/wp-content/uploads/2017/07/h3-img.jpg"
                    alt=""
                    width="100%"
                    height="100%"
                  />
                  <ImageBackdrop className="MuiImageBackdrop-root" />
                  <Image>
                    <Typography
                      component="span"
                      variant="subtitle1"
                      color="inherit"
                      sx={{
                        position: "relative",
                        p: 4,
                        pt: 2,
                        pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                      }}
                    >
                      <Link
                        style={{ color: "white", textDecoration: "none" }}
                        to="/fallDetails"
                      >
                        Fall 2022
                      </Link>
                      <ImageMarked className="MuiImageMarked-root" />
                    </Typography>
                  </Image>
                </ImageButton>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box sx={{ my: 2 }}>
                <ImageButton focusRipple>
                  <img
                    src="https://educator.qodeinteractive.com/wp-content/uploads/2017/07/h3-img.jpg"
                    alt=""
                    width="100%"
                    height="100%"
                  />
                  <ImageBackdrop className="MuiImageBackdrop-root" />
                  <Image>
                    <Typography
                      component="span"
                      variant="subtitle1"
                      color="inherit"
                      sx={{
                        position: "relative",
                        p: 4,
                        pt: 2,
                        pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                      }}
                    >
                      <Link
                        style={{ color: "white", textDecoration: "none" }}
                        to="/home"
                      >
                        Summer 2022
                      </Link>
                      <ImageMarked className="MuiImageMarked-root" />
                    </Typography>
                  </Image>
                </ImageButton>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box sx={{ my: 2 }}>
                <ImageButton focusRipple>
                  <img
                    src="https://educator.qodeinteractive.com/wp-content/uploads/2017/07/h3-img.jpg"
                    alt=""
                    width="100%"
                    height="100%"
                  />
                  <ImageBackdrop className="MuiImageBackdrop-root" />
                  <Image>
                    <Typography
                      component="span"
                      variant="subtitle1"
                      color="inherit"
                      sx={{
                        position: "relative",
                        p: 4,
                        pt: 2,
                        pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                      }}
                    >
                      Spring 2022
                      <ImageMarked className="MuiImageMarked-root" />
                    </Typography>
                  </Image>
                </ImageButton>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box sx={{ my: 2 }}>
                <ImageButton focusRipple>
                  <img
                    src="https://educator.qodeinteractive.com/wp-content/uploads/2017/07/h3-img.jpg"
                    alt=""
                    width="100%"
                    height="100%"
                  />
                  <ImageBackdrop className="MuiImageBackdrop-root" />
                  <Image>
                    <Typography
                      component="span"
                      variant="subtitle1"
                      color="inherit"
                      sx={{
                        position: "relative",
                        p: 4,
                        pt: 2,
                        pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                      }}
                    >
                      Fall 2021
                      <ImageMarked className="MuiImageMarked-root" />
                    </Typography>
                  </Image>
                </ImageButton>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default MediaBuzzs;
