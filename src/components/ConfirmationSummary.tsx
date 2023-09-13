import { Grid, Typography } from "@mui/material";
import { useCart } from "../context/CartContext";
import ConfirmationItem from "./ConfirmationItem";

const orderedProductsList = JSON.parse(
  localStorage.getItem("orderDetails") || "[]"
);
export default function ConfirmationSummary() {
  const { confirmationCartItems } = useCart();
  // const { cartItems } = useCart();

  return (
    <Grid>
      {confirmationCartItems.map((product) => (
        <ConfirmationItem key={product.id} {...product} />
      ))}
      <Typography variant="h6" fontWeight="bold" data-cy="total-price">
        Total Price payed: $
        {confirmationCartItems.reduce(
          (acc, item) => acc + item.price * item.quantity,
          0
        )}
      </Typography>
    </Grid>
  );
}
