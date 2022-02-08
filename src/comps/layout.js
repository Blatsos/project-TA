import {
  AppBar,
  Avatar,
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
import PersonIcon from "@mui/icons-material/Person";
import layoutCss from "../styles/layout.module.css";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const menuItems = [
  { text: "Home", icon: <HomeIcon />, path: "/" },
  { text: "Photography", icon: <LinkedCameraIcon />, path: "/photography" },
  { text: "Graphic", icon: <BrushIcon />, path: "/graphic" },
  { text: "Products", icon: <ShoppingCartIcon />, path: "/shop" },

  { text: "Contact Me", icon: <EmailIcon />, path: "/contact" },
  { text: "About Me", icon: <PersonIcon />, path: "/about" },
];

const useStyles = makeStyles((theme) => {
  return {
    page: {
      // background: "#0d0d0d",
      with: "100%",
    },
    drawer: {
      width: 30,
    },
    drawerPaper: {
      width: "100%",
    },
    root: {
      display: "flex",
    },
    appbar: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
    toolbar: theme.mixins.toolbar,
    menu: {
      flexGrow: 1,
    },
    avatar: {
      marginLeft: theme.spacing(2),
    },
  };
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 2),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "left",
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
      <AppBar className={classes.appbar}>
        <Toolbar>
          <IconButton onClick={handleDrawerOpen} edge="start">
            <MenuIcon color="secondary" />
          </IconButton>
          <Typography className={classes.menu} variant="h5">
            Menu
          </Typography>
          <Avatar variant="square" src="/logo.png" className={classes.avatar} />
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        open={open}
        anchor="left"
        classes={{ paper: classes.drawerPaper }}
      >
        <DrawerHeader className={layoutCss.drawer_header}>
          <IconButton onClick={handleDrawerClose}>
            <CloseIcon />
          </IconButton>
        </DrawerHeader>
        <List className={layoutCss.list}>
          {menuItems.map((item) => (
            <ListItem
              className={layoutCss.one}
              button
              key={item.text}
              onClick={() => {
                navigate(item.path);
                handleDrawerClose();
              }}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <div className={classes.page}>
        <div className={classes.toolbar}></div>
        {children}
      </div>
    </div>
  );
};

export default Layout;
