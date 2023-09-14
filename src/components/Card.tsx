import { Box, CardHeader } from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Snackbar from "@mui/material/Snackbar";
import SnackbarContent from "@mui/material/SnackbarContent";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Product } from "../../data/index";
import { useCart } from "../context/CartContext";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { increaseCartQuantity } = useCart();

  const [showSnackbar, setShowSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const handleButtonClick = (index: string) => {
    increaseCartQuantity(index);
    setSnackbarMessage("Product has been added");
    setShowSnackbar(true);

    setTimeout(() => {
      setShowSnackbar(false);
    }, 2000);
  };

  return (
    <>
      <Card
        data-cy="product-id"
        key={product.id}
        sx={{ maxWidth: 345, boxShadow: 3 }}
      >
        <CardHeader
          data-cy="product-title"
          title={
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {product.title}
            </Box>
          }
        />
        <Link to={`/product/${product.id}`}>
          <Box sx={{ height: 300 }}>
            <CardMedia
              title={product.title}
              component="img"
              height="300px"
              style={{ objectFit: "contain" }}
              image={product.image}
              alt={product.title}
            />
          </Box>
        </Link>
        <CardContent>
          <br />
          <Typography
            data-cy="product-price"
            display="flex"
            justifyContent="space-around"
            alignItems="center"
          >
            {product.price} $
            <Button
              data-cy="product-buy-button"
              size="medium"
              variant="contained"
              onClick={() => handleButtonClick(product.id)}
            >
              Add to cart
            </Button>
          </Typography>
        </CardContent>
      </Card>

      <Snackbar
        data-cy="added-to-cart-toast"
        open={showSnackbar}
        autoHideDuration={2000}
        onClose={() => setShowSnackbar(false)}
      >
        <SnackbarContent message={snackbarMessage} />
      </Snackbar>
    </>
  );
}
