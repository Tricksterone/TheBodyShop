import { Grid, Typography } from "@mui/material";
import { useCart } from "../context/CartContext";
import ConfirmationItem from "./ConfirmationItem";

export default function ConfirmationSummary() {
  const { cartItems } = useCart();
  return (
    <Grid>
      {cartItems.map((item) => (
        <ConfirmationItem key={item.id} {...item} />
      ))}
      <Typography variant="h6" fontWeight="bold" data-cy="total-price">
        Total Price payed: $
        {cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)}
      </Typography>
    </Grid>
  );
}
