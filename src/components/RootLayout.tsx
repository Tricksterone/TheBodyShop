import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {
  AppBar,
  Badge,
  Box,
  Hidden,
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
  background: "linear-gradient(to right bottom, #aeccda, #4194be)",
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
  height: "1rem",
  background: "linear-gradient(to right bottom, #aeccda, #4194be)",
  color: "white",
});

export default function RootLayout() {
  const theme = useTheme();
  const { cartQuantity } = useCart();
  const navigate = useNavigate();

  const handleCartClick = () => {
    navigate("/checkout");
  };

  const handleAdminClick = () => {
    // Navigerar till admin-page
    navigate("/admin");
  };

  const handleLogoClick = () => {
    navigate("/");
  };
  return (
    <>
      <header>
        <StyledAppBar>
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <StyledAppbarBox onClick={handleLogoClick}>
              <StyledLogoImage src={"/images/logo.png"} alt="Logo" />
              <Hidden mdDown>
                <Typography
                  style={{
                    marginLeft: "2rem",
                    fontSize: "35px",
                    fontWeight: "bold",
                  }}
                >
                  Tha BodyShop
                </Typography>
              </Hidden>
              <Hidden mdUp smDown>
                <Typography
                  style={{
                    marginLeft: "2rem",
                    fontSize: "20px",
                    fontWeight: "bold",
                  }}
                >
                  Tha BodyShop
                </Typography>
              </Hidden>
            </StyledAppbarBox>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "2rem",
              }}
            >
              <IconButton
                color="inherit"
                aria-label="profile"
                size="large"
                onClick={handleAdminClick}
                data-cy="admin-link"
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
      <main style={{ minHeight: "78.5vh" }}>
        <Outlet />
      </main>
      <footer style={{ display: "flex" }}>
        <StyledFooterBox>
          <Hidden mdDown>
            <Typography style={{ fontWeight: "bold" }}>
              Discover the heartbeat of our store – where every organ tells a
              unique story.
            </Typography>
          </Hidden>
          <Hidden smDown>
            <Typography style={{ fontWeight: "bold" }}>
              Discover the heartbeat of our store.
            </Typography>
          </Hidden>
        </StyledFooterBox>
      </footer>
    </>
  );
}
