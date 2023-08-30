import { AppBar, Box, IconButton, Toolbar, styled } from "@mui/material";
import { Outlet } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Card from "./Card";

const StyledAppBar = styled(AppBar)({
  position: "static",
  backgroundColor: "#A3D4DB",
  color: "white",
  padding: "1rem",
});

const LogoImage = styled("img")({
  width: "50px",
  height: "auto",
});

export default function RootLayout() {
  return (
    <div>
      <header>
        <StyledAppBar>
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <LogoImage src={"../../public/images/logo.png"} alt="Logo" />
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <IconButton color="inherit" aria-label="profile">
                <AccountCircleIcon />
              </IconButton>
              <IconButton color="inherit" aria-label="cart">
                <ShoppingCartIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </StyledAppBar>
      </header>
      <main>
        <Outlet />
        <Card />
      </main>
      <footer>
        <h2>Footer</h2>
      </footer>
    </div>
  );
}
