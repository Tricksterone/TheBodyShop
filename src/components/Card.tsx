import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Snackbar from "@mui/material/Snackbar";
import SnackbarContent from "@mui/material/SnackbarContent";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { Product } from "../../data/index";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const handleButtonClick = (index: string) => {
    setSnackbarMessage("Product added to cart!");
    setShowSnackbar(true);

    console.log(index);

    setTimeout(() => {
      setShowSnackbar(false);
    }, 2000);
  };

  return (
    <>
      <Card key={product.id} sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="400"
          image={product.image}
          alt={product.title}
        />
        <CardContent>
          <br />
          <Typography
            display="flex"
            justifyContent="space-around"
            alignItems="center"
          >
            {product.price} $
            <Button
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
        open={showSnackbar}
        autoHideDuration={2000}
        onClose={() => setShowSnackbar(false)}
      >
        <SnackbarContent message={snackbarMessage} />
      </Snackbar>
    </>
  );
}
