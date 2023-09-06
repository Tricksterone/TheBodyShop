import { Grid, Snackbar, SnackbarContent, styled } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../data/index";
import QuantityButton from "../components/QuantityButton";
import { useCart } from "../context/CartContext";

export default function ProductDescription() {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useCart();
  const { id } = useParams();

  let product = products.find((p) => p.id === id);

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

  return (
    <>
      <Grid container spacing={2}>
        {/* Image */}
        <ResponsiveGridItem item xs={12} sm={6}>
          <ResponsiveImage src={product.image} alt={product.image} />
        </ResponsiveGridItem>

        {/* Content */}
        <Grid item xs={12} sm={6} marginTop={7}>
          <Typography data-cy="product-title" variant="h4">
            {product.title}
          </Typography>
          <Typography
            data-cy="product-description"
            variant="body1"
            sx={{ maxWidth: "400px" }}
          >
            {product.description}
          </Typography>
          <Typography data-cy="product-price" variant="h6">
            {product.price}$
          </Typography>
          <QuantityButton product={product} />
        </Grid>
      </Grid>
    </>
  );
}
