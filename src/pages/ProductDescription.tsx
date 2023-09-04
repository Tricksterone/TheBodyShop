import { Button, Grid, styled } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { products } from "../../data/index";
import { useCart } from "../context/CartContext";

export default function ProductDescription() {
  const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity } =
    useCart();
  const { id } = useParams();
  const location = useLocation();

  const product = products.find((p) => p.id === id);

  const ResponsiveGridItem = styled(Grid)(({ theme }) => ({
    display: "flex",
    justifyContent: "flex-end", // Center on mobile screens
    alignItems: "center", // Center vertically on all screens
    [theme.breakpoints.down("md")]: {
      justifyContent: "flex-start",
    },
    [theme.breakpoints.down("sm")]: {
      justifyContent: "flex-start",
    },
  }));

  const ResponsiveImage = styled("img")(({ theme }) => ({
    display: "flex",
    maxWidth: "100%",
    height: "auto",
    [theme.breakpoints.down("md")]: {
      objectFit: "auto",
    },
    [theme.breakpoints.down("sm")]: {
      objectFit: "auto",
      maxWidth: "auto",
      maxHeight: "450px",
    },
  }));

  if (!product) {
    return <div>Product not found.</div>;
  }

  const [showSnackbar, setShowSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const handleButtonClick = (index: string) => {
    increaseCartQuantity(index);
    setSnackbarMessage("Product has been added to cart!");
    setShowSnackbar(true);

    setTimeout(() => {
      setShowSnackbar(false);
    }, 2000);
  };

  return (
    <Grid container spacing={2}>
      {/* Image */}
      <ResponsiveGridItem item xs={12} sm={6}>
        <ResponsiveImage src={product.image} alt={product.image} />
      </ResponsiveGridItem>

      {/* Content */}
      <Grid item xs={12} sm={6} marginTop={7}>
        <Typography variant="h4">{product.title.toUpperCase()}</Typography>
        <Typography variant="body1" sx={{ maxWidth: "400px" }}>
          {product.description}
        </Typography>
        <Typography variant="h6">{product.price}</Typography>
        <Button
          style={{ marginBottom: 6 }}
          variant="contained"
          onClick={() => handleButtonClick(product.id)}
        >
          Add To Cart
        </Button>
      </Grid>
    </Grid>
  );
}
