import { Typography } from "@mui/material";
import { Container, Stack } from "@mui/system";
import { useCart } from "../context/CartContext";
import CartItem from "./CartItem";

export default function CartSummary() {
    const { cartItems } = useCart();
    return (
        <Container>
            <Stack spacing={2}>
            {cartItems.map(item => (
            <CartItem key={item.id} {...item}/>
            ))}
            <div style={{ marginRight: 'auto' }}>
            <Typography variant="h5" fontWeight="bold" data-cy="total-price">
                Total Price in cart: ${cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)}
            </Typography>
            </div>
        </Stack>
      </Container>
    )
}