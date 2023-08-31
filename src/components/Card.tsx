import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import { useState } from "react";
import { products } from "../../data/index";

export default function ProductCard() {
  const [showAlert, setShowAlert] = useState(false);

  const handleButtonClick = () => {
    setShowAlert(true);
  };

  return (
    <>
      {products.map((product) => (
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
              {product.price} kr
              <Button
                size="medium"
                variant="contained"
                onClick={handleButtonClick}
              >
                Add to cart
              </Button>
            </Typography>
            <br />
            {/* alert to show when clicking add to cart */}
            {showAlert && (
              <Alert
                data-cy="added-to-cart-toast"
                severity="success"
                color="info"
              >
                Product added to cart!
              </Alert>
            )}
          </CardContent>
          <CardActions disableSpacing></CardActions>
        </Card>
      ))}
    </>
  );
}
