import {
  AppBar,
  Box,
  Container,
  IconButton,
  Toolbar,
  styled,
} from "@mui/material";
import { Outlet } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

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

const StyledMainContainer = styled(Container)({
  backgroundColor: "#fafaf8",
  display: "flex",
  justifyContent: "space-evenly",
});

const StyledFooterContainer = styled(Container)({
  position: "absolute",
  bottom: "0",
  width: "100%",
  height: "2.5rem",
  backgroundColor: "#fafaf8",
});

const StyledMainBox = styled(Box)({
  display: "flex",
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
        <StyledMainContainer>
          <Outlet />
        </StyledMainContainer>
      </main>
      <footer>
        <StyledFooterContainer>FOOTER</StyledFooterContainer>
      </footer>
    </div>
  );
}
