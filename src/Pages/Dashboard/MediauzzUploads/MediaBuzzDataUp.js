import {
  Button,
  Container,
  Grid,
  IconButton,
  Input,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const MediaBuzzDataUp = () => {
  const [data, setdata] = useState();

  return (
    <div>
      <Container>
        <Typography variant="h4" gutterBottom>
          This is <span style={{ color: "#16a085" }}>Media Buzz Data</span>{" "}
          uploads area...
        </Typography>

        <Grid
          container
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
        >
          <Grid xs={12}>
            <form>
              <TextField
                sx={{ width: "50%" }}
                id="standard-basic"
                label="Guest Video"
                variant="standard"
              />
              <br />
              <TextField
                sx={{ width: "50%" }}
                id="standard-basic"
                label="Guest Title"
                variant="standard"
              />
              <br />
              <TextField
                sx={{ width: "50%" }}
                id="standard-basic"
                label="Guest Lecture Video"
                variant="standard"
              />
              <br />
              <TextField
                sx={{ width: "50%" }}
                id="standard-basic"
                label="Vlog Video"
                variant="standard"
              />
              <br />
              <TextField
                sx={{ width: "50%" }}
                id="standard-basic"
                label="Vlog Title"
                variant="standard"
              />
              <br />
              <TextField
                sx={{ width: "50%" }}
                id="standard-basic"
                label="Photo Exhibition"
                variant="standard"
              />
              <br />
              <p>------------Or----------</p>
              <Input hidden accept="image/*" multiple type="file" />
              <br />
              <Button
                variant="contained"
                component="label"
                type="submit"
                sx={{ my: 2, width: "50%" }}
              >
                Submit
              </Button>
            </form>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default MediaBuzzDataUp;
