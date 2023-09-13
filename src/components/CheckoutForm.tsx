import { zodResolver } from "@hookform/resolvers/zod";
import {
  Box,
  Button,
  FormHelperTextProps,
  Grid,
  TextField,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { useCart } from "../context/CartContext";

type OrderDetails = z.infer<typeof OrderDetailsSchema>;

const OrderDetailsSchema = z.object({
  name: z
    .string()
    .min(2, { message: "name too short" })
    .regex(new RegExp(/^[a-zA-ZåäöÅÄÖ]+[-'s]?[a-zA-ZåäöÅÄÖ ]+$/), {
      message: "Only A-Z allowed",
    }),
  email: z.coerce.string().email({ message: "email must contain @" }),
  phone: z
    .string()
    .min(4, { message: "Phone number too short" })
    .refine((val) => /^\d+$/.test(val), {
      message: "Invalid phone number format",
    }),

  address: z.string().min(4),
  zipcode: z.coerce.number().gte(10000).lte(99999),
  city: z
    .string()
    .min(2, { message: "name too short" })
    .regex(new RegExp(/^[a-zA-ZåäöÅÄÖ]+[-'s]?[a-zA-ZåäöÅÄÖ ]+$/), {
      message: "Only A-Z allowed",
    }),

  orderNumber: z.coerce.number().optional(),
  orderPlaced: z.boolean().default(false),
});

export default function CheckoutForm() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState } = useForm<OrderDetails>({
    resolver: zodResolver(OrderDetailsSchema),
  });
  const { removeAllFromCart, confirmationCart } = useCart();

  const onSubmit = (formData: OrderDetails) => {
    if (formData.orderPlaced) {
      console.log("An order has already been placed.");
      return;
    }

    const orderNumber = generateUniqueOrderNumber();
    const updatedOrderDetails = {
      ...formData,
      orderNumber,
      orderPlaced: true,
    };

    confirmationCart();
    removeAllFromCart();

    localStorage.setItem("orderDetails", JSON.stringify(updatedOrderDetails));

    navigate("/confirmation");
  };

  const generateUniqueOrderNumber = () => {
    return Math.floor(Math.random() * 10000 + 1);
  };

  return (
    <form data-cy="customer-form" onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                error={Boolean(formState.errors.name)}
                helperText={formState.errors.name?.message}
                FormHelperTextProps={
                  {
                    "data-cy": "customer-name-error",
                  } as FormHelperTextProps
                }
                label="Full Name"
                id="name"
                autoComplete="name"
                fullWidth
                margin="normal"
                inputProps={{ "data-cy": "customer-name" }}
                {...register("name")}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                error={Boolean(formState.errors.email)}
                helperText={formState.errors.email?.message}
                FormHelperTextProps={
                  {
                    "data-cy": "customer-email-error",
                  } as FormHelperTextProps
                }
                label="E-mail"
                id="email"
                autoComplete="email"
                type="email"
                fullWidth
                margin="normal"
                inputProps={{ "data-cy": "customer-email" }}
                {...register("email")}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                error={Boolean(formState.errors.phone)}
                helperText={formState.errors.phone?.message}
                FormHelperTextProps={
                  {
                    "data-cy": "customer-phone-error",
                  } as FormHelperTextProps
                }
                id="phone"
                autoComplete="tel"
                label="Phone number"
                type="tel"
                fullWidth
                margin="normal"
                inputProps={{ "data-cy": "customer-phone" }}
                {...register("phone")}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <TextField
            error={Boolean(formState.errors.address)}
            helperText={formState.errors.address?.message}
            FormHelperTextProps={
              {
                "data-cy": "customer-address-error",
              } as FormHelperTextProps
            }
            id="address"
            autoComplete="street-address"
            label="Address"
            fullWidth
            margin="normal"
            inputProps={{ "data-cy": "customer-address" }}
            {...register("address")}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            error={Boolean(formState.errors.zipcode)}
            helperText={formState.errors.zipcode?.message}
            FormHelperTextProps={
              {
                "data-cy": "customer-zipcode-error",
              } as FormHelperTextProps
            }
            id="zipcode"
            autoComplete="postal-code"
            label="Zip-code"
            type="number"
            fullWidth
            margin="normal"
            inputProps={{ "data-cy": "customer-zipcode" }}
            {...register("zipcode")}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            error={Boolean(formState.errors.city)}
            helperText={formState.errors.city?.message}
            FormHelperTextProps={
              {
                "data-cy": "customer-city-error",
              } as FormHelperTextProps
            }
            id="city"
            autoComplete="address-level2"
            label="City"
            fullWidth
            margin="normal"
            inputProps={{ "data-cy": "customer-city" }}
            {...register("city")}
          />
        </Grid>
      </Grid>
      <Box mt={4}>
        <Button
          data-cy="product-buy-button"
          style={{ marginBottom: "10px" }}
          variant="contained"
          color="primary"
          type="submit"
        >
          Buy
        </Button>
      </Box>
    </form>
  );
}
