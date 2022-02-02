import {
  AppBar,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";
import EmailIcon from "@mui/icons-material/Email";
import BrushIcon from "@mui/icons-material/Brush";
import HomeIcon from "@mui/icons-material/Home";
import LinkedCameraIcon from "@mui/icons-material/LinkedCamera";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";

const drawerWidth = 240;

const menuItems = [
  { text: "Home", icon: <HomeIcon />, path: "/" },
  { text: "Photography", icon: <LinkedCameraIcon />, path: "/photography" },
  { text: "Graphic", icon: <BrushIcon />, path: "/graphic" },
  { text: "Products", icon: <ShoppingCartIcon />, path: "/shop" },

  { text: "Contact Me", icon: <EmailIcon />, path: "/contact" },
];

const useStyles = makeStyles({
  page: {
    background: "#f9f9f9",
    with: "100%",
  },
  drawer: {
    width: drawerWidth,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  root: {
    display: "flex",
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "center",
}));

const Layout = ({ children }) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <div>
        <AppBar>
          <Toolbar>
            <IconButton onClick={handleDrawerOpen} edge="start">
              <MenuIcon />
            </IconButton>
            <Typography variant="h5">Menu</Typography>
          </Toolbar>
        </AppBar>
      </div>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        open={open}
        anchor="left"
        classes={{ paper: classes.drawerPaper }}
      >
        <DrawerHeader>
          <Typography>Header</Typography>
          <IconButton onClick={handleDrawerClose}>
            <CloseIcon />
          </IconButton>
        </DrawerHeader>
        <List>
          {menuItems.map((item) => (
            <ListItem
              button
              key={item.text}
              onClick={() => {
                navigate(item.path);
              }}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <div className={classes.page}>{children}</div>
    </div>
  );
};

export default Layout;
