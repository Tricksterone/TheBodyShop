import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { products } from "../../data";

interface ConfirmationItemProps {
  id: string;
  quantity: number;
}

export default function ConfirmationItem({
  id,
  quantity,
}: ConfirmationItemProps) {
  const item = products.find((i) => i.id === id);
  if (item == null) return null;

  return (
    <Stack>
      <Typography>{item.title}</Typography>
      <Typography>Amount: {quantity}x</Typography>
      <Typography>
        Total price for {item.title}: ${item.price * quantity}
      </Typography>
    </Stack>
  );
}
