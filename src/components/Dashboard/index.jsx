import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Button,
  Toolbar,
  IconButton,
  Typography,
  Box,
} from "@mui/material";
import styles from "./styles";
/**
 * This function used for the Dashboard UI which contains the global header, menu, and log out button
 */
function Dashboard() {
  return (
    <Box>
      <AppBar position="absolute">
        <Toolbar>
          {/* Menu Button*/}
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ ...styles.menuBtn }}
          >
            <MenuIcon />
          </IconButton>
          {/* Company Title*/}
          <Typography variant="h6" sx={{ ...styles.title }}>
            E-Mart
          </Typography>
          {/*Logout Button*/}
          <Button color="inherit">Log Out</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default Dashboard;
