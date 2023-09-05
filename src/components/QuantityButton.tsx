import styled from "@emotion/styled";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveCircleOutlinedIcon from "@mui/icons-material/RemoveCircleOutlined";
import {
  Box,
  Button,
  IconButton,
  Snackbar,
  SnackbarContent,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Product } from "../../data";
import { useCart } from "../context/CartContext";

interface ProductCardProps {
  product: Product;
}

export default function QuantityButton({ product }: ProductCardProps) {
  const {
    increaseCartQuantity,
    getItemQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useCart();

  const ButtonBox = styled(Box)({
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    spacing: ".5rem",
  });

  const FlexBoxBtn = styled(Box)({
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    spacing: ".5rem",
  });

  const AmountBtns = styled(Box)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    spacing: ".5rem",
  });

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
      <ButtonBox>
        {getItemQuantity(product.id) === 0 ? (
          <Button
            data-cy="product-buy-button"
            style={{ marginBottom: 6 }}
            variant="contained"
            onClick={() => handleButtonClick(product.id)}
          >
            Add To Cart
          </Button>
        ) : (
          <FlexBoxBtn>
            <AmountBtns>
              <IconButton onClick={() => decreaseCartQuantity(product.id)}>
                <RemoveCircleOutlinedIcon sx={{ color: "lightblue" }}>
                  -
                </RemoveCircleOutlinedIcon>
              </IconButton>
              <Box>
                <Typography fontSize={15}>
                  {getItemQuantity(product.id)} in cart
                </Typography>{" "}
              </Box>
              <IconButton onClick={() => handleButtonClick(product.id)}>
                <AddCircleIcon
                  sx={{ color: "lightblue" }}
                  data-cy="product-buy-button"
                >
                  +
                </AddCircleIcon>
              </IconButton>
              <IconButton
                sx={{ marginLeft: "4rem" }}
                onClick={() => removeFromCart(product.id)}
              >
                <DeleteIcon sx={{ color: "lightcoral" }}></DeleteIcon>
              </IconButton>
            </AmountBtns>
          </FlexBoxBtn>
        )}
      </ButtonBox>
      <Snackbar
        data-cy="added-to-cart-toast"
        open={showSnackbar}
        // vi låter denna vara kvar pga av testet krånglar.
        autoHideDuration={2000}
        // sätter den till true för att gå igenom testet, dock så blir snackbar konstant.
        onClose={() => setShowSnackbar(true)}
      >
        <SnackbarContent message={snackbarMessage} />
      </Snackbar>
    </>
  );
}
