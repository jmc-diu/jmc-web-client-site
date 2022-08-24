import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Link } from "react-router-dom";
import { Collapse, Grid, ListItemIcon } from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";

const drawerWidth = 200;
const navItems = ["Home", "About", "Contact"];

function Navigation(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  // For Scrollbar Tabs

  const [value, setValue] = React.useState();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // For Collapsable Tabs

  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              ml: "auto",
              flexGrow: 1,
              display: { pl: "10%", xs: "none", sm: "block", m: "auto" },
            }}
          >
            jmc Web App
          </Typography>

          {/* Scrollbar Tabs */}

          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="secondary"
            sx={{ ml: "auto", display: { xs: "none", sm: "block", m: "auto" } }}
          >
            <Tab
              label="Home"
              component={Link}
              to="/home"
              style={{ color: "white" }}
            />
            <Tab
              label="Media Buzz"
              component={Link}
              to="/media"
              style={{ color: "white" }}
            />
            <Tab
              label="Show Reel"
              component={Link}
              to="/showReel"
              style={{ color: "white" }}
            />
            <Tab
              label="Events"
              component={Link}
              to="/events"
              style={{ color: "white" }}
            />
            <Tab
              label="Talent Hunt"
              component={Link}
              to="/talentHunt"
              style={{ color: "white" }}
            />
          </Tabs>
          <Grid>
            <List
              sx={{
                display: { xs: "none", sm: "block" },
              }}
            >
              <ListItemButton onClick={handleClick}>
                <ListItemIcon />
                <ListItemText primary="More" />
                {open ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>

              <Collapse in={open} timeout="auto" unmountOnExit>
                <ListItemButton>
                  <List component="div" disablePadding>
                    <Tab label="Research" component={Link} to="/research" />
                    <Divider />
                    <Tab
                      label="Reading Materials"
                      component={Link}
                      to="/reading"
                    />
                    <Divider />
                    <Tab label="Alumni" component={Link} to="/alumni" />
                    <Divider />
                    <Tab
                      label="Affiliation"
                      component={Link}
                      to="/affiliation"
                    />
                    <Divider />
                    <Tab label="Contacts" component={Link} to="/contact" />
                  </List>
                </ListItemButton>
              </Collapse>
            </List>
          </Grid>

          <Grid sx={{ ml: "auto" }}>
            <Tabs>
              <Tab label="Dashboard" component={Link} to="/dashboard" />
            </Tabs>
          </Grid>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

Navigation.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Navigation;
