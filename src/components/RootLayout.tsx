import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { AppBar, Box, IconButton, Toolbar, styled } from "@mui/material";
import { Outlet } from "react-router-dom";

const StyledAppBar = styled(AppBar)({
  position: "static",
  backgroundColor: "#A3D4DB",
  color: "white",
  padding: "1rem",
});

const StyledLogoImage = styled("img")({
  width: "50px",
  height: "auto",
});

const StyledFooterBox = styled(Box)({
  position: "relative",
  padding: "1rem",
  bottom: "0",
  width: "100%",
  height: "2.5rem",
  backgroundColor: "#fafaf8",
});

export default function RootLayout() {
  return (
    <div>
      <header>
        <StyledAppBar>
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <StyledLogoImage src={"../../public/images/logo.png"} alt="Logo" />
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
      </main>
      <footer style={{ display: "flex" }}>
        <StyledFooterBox>FOOTER</StyledFooterBox>
      </footer>
    </div>
  );
}
