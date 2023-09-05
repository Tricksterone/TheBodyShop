import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PestControlIcon from "@mui/icons-material/PestControl";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {
  AppBar,
  Badge,
  Box,
  IconButton,
  Toolbar,
  Typography,
  styled,
  useTheme,
} from "@mui/material";
import { Outlet, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const StyledAppBar = styled(AppBar)({
  position: "static",
  backgroundColor: "#A3D4DB",
  color: "white",
  padding: "1rem",
});

const StyledAppbarBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  width: "50%",
  cursor: "pointer",
});

const StyledLogoImage = styled("img")({
  width: "50px",
  height: "auto",
});

const StyledFooterBox = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  padding: "1rem",
  bottom: "0",
  width: "100%",
  height: "2.5rem",
  backgroundColor: "#A3D4DB",
  color: "white",
});

export default function RootLayout() {
  const theme = useTheme();
  const { removeAllFromCart } = useCart();
  const { cartQuantity } = useCart();
  const navigate = useNavigate();

  const handleCartClick = () => {
    // Navigerar till checkout-page
    navigate("/checkout");
  };

  const handleAdminClick = () => {
    // Navigerar till checkout-page
    navigate("/admin");
  };

  const handleLogoClick = () => {
    // Navigerar till homepage
    navigate("/");
  };
  return (
    <div>
      <header>
        <StyledAppBar>
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <StyledAppbarBox onClick={handleLogoClick}>
              <StyledLogoImage src={"/images/logo.png"} alt="Logo" />
              <Typography
                style={{
                  marginLeft: "2rem",
                  fontSize: theme.breakpoints.down("sm") ? "large" : "xx-large",
                }}
              >
                Tha BodyShop
              </Typography>
            </StyledAppbarBox>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <IconButton
                size="large"
                sx={{ color: "red" }}
                onClick={removeAllFromCart}
              >
                <PestControlIcon />
              </IconButton>
              <IconButton
                color="inherit"
                aria-label="profile"
                onClick={handleAdminClick}
              >
                <AccountCircleIcon />
              </IconButton>
              <IconButton
                color="inherit"
                aria-label="profile"
                size="large"
                onClick={handleCartClick}
                data-cy="cart-link"
              >
                <Badge
                  data-cy="cart-items-count-badge"
                  badgeContent={cartQuantity}
                  color="error"
                >
                  <ShoppingCartIcon />
                </Badge>
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
