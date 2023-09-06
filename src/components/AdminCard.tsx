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
// import { useCart } from "../context/CartContext";

interface ProductCardProps {
  product: Product;
}

export default function AdminProductCard({ product }: ProductCardProps) {
  //   const { increaseCartQuantity, getItemQuantity } = useCart();
  //   const quantity = getItemQuantity(product.id);

  const [showSnackbar, setShowSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const handleButtonClick = (index: string) => {
    // increaseCartQuantity(index); //metod för DELETE here
    setSnackbarMessage("Product has been deleted");
    setShowSnackbar(true);

    setTimeout(() => {
      setShowSnackbar(false);
    }, 2000);
  };

  return (
    <>
      <Card data-cy="product-id" key={product.id} sx={{ maxWidth: 345 }}>
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
        <Link to={`/adminform/${product.id}`}>
          <CardMedia
            title={product.title}
            component="img"
            height="400"
            image={product.image}
            alt={product.title}
          />
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
              color="error"
              onClick={() => handleButtonClick(product.id)}
            >
              Delete item
            </Button>
          </Typography>
        </CardContent>
      </Card>

      <Snackbar
        open={showSnackbar}
        autoHideDuration={2000}
        onClose={() => setShowSnackbar(false)}
      >
        <SnackbarContent message={snackbarMessage} />
      </Snackbar>
    </>
  );
}
