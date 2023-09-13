import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { useProducts } from "../context/ProductsContext";
import QuantityButton from "./QuantityButton";

interface CartItemProps {
  id: string;
  quantity: number;
}

export default function CartItem({ id, quantity }: CartItemProps) {
  const { products } = useProducts();
  const item = products.find((i) => i.id === id);
  if (item == null) return null;

  return (
    <Stack data-cy="cart-item">
      <Typography data-cy="product-title">
        <img
          src={item.image}
          alt="gore"
          style={{ width: "125px", height: "75px", objectFit: "cover" }}
        />
        {item.title}
      </Typography>
      <Typography data-cy="product-quantity">Amount: {quantity}x</Typography>

      <Typography data-cy="product-price">
        Total price for {item.title}: ${item.price * quantity}
      </Typography>
      <QuantityButton product={item} />
    </Stack>
  );
}
