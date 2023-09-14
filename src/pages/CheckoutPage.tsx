import { Container, Typography } from "@mui/material";
import CartSummary from "../components/CartSummary";
import CheckoutForm from "../components/CheckoutForm";

export default function CheckoutPage() {

  return (
    <Container>
      <Container>
        <CartSummary />
      </Container>
      <Container>
        <Typography variant="h6" gutterBottom marginTop={2}>
          Personal Details Form
        </Typography>
        <CheckoutForm />
      </Container>
    </Container>
  );
}
