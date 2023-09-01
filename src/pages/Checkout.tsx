import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  Box,
} from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useNavigate } from "react-router-dom";

const OrderDetailsSchema = z.object({
  name: z
    .string()
    .min(2, { message: "name too short" })
    .regex(new RegExp(/^[a-zA-Z]+[-'s]?[a-zA-Z ]+$/), {
      message: "Only A-Z allowed",
    }),
  email: z.coerce.string().email({ message: "email" }),
  phone: z
    .string()
    .min(4, { message: "Phone number too short" })
    .refine(
      (val) => /^\d+$/.test(val), //kan man använda .number istället?
      {
        message: "Invalid phone number format",
      }
    ),

  address: z.string().min(4),
  zipcode: z.coerce.number().gte(3),
  city: z.string().min(2),
  totalcost: z.coerce.number().optional(), //kommer sen
  orderNumber: z.coerce.number().optional(), // Anges inte förrän efter zodResolver gjort sin grej
});

type OrderDetails = z.infer<typeof OrderDetailsSchema>;

function CheckoutPage() {
  const { register, handleSubmit, formState } = useForm<OrderDetails>({
    resolver: zodResolver(OrderDetailsSchema),
  });
  const navigate = useNavigate();

  const [orderPlaced, setOrderPlaced] = useState(false);

  const onSubmit = (formData: OrderDetails) => {
    if (orderPlaced) {
      console.log("An order has already been placed."); //Detta behöver också visas på sidan
      return;
    }

    const orderNumber = generateUniqueOrderNumber();
    const updatedOrderDetails = { ...formData, orderNumber };

    setOrderPlaced(true);
    navigate("/confirmation");

    localStorage.setItem("orderDetails", JSON.stringify(updatedOrderDetails));
    console.log("orderDetails:     " + localStorage.getItem("orderDetails"));
  };

  const generateUniqueOrderNumber = () => {
    return Math.floor(Math.random() * 100 + 1);
  };

  return (
    <Container>
      <Container>
        <Typography variant="h6" gutterBottom>
          * Produktsammanfattning här *
        </Typography>
      </Container>

      <Container>
        <Typography variant="h6" gutterBottom>
          Personal Details Form
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <TextField
                    required
                    error={Boolean(formState.errors.name)}
                    helperText={formState.errors.name?.message}
                    label="Full Name"
                    id="name"
                    fullWidth
                    margin="normal"
                    {...register("name")}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    error={Boolean(formState.errors.email)}
                    helperText={formState.errors.email?.message}
                    label="E-mail"
                    // id="email"
                    type="email"
                    fullWidth
                    margin="normal"
                    {...register("email")}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    error={Boolean(formState.errors.phone)}
                    helperText={formState.errors.phone?.message}
                    // id="phone"
                    label="Phone number"
                    type="tel"
                    fullWidth
                    margin="normal"
                    {...register("phone")}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                error={Boolean(formState.errors.address)}
                helperText={formState.errors.address?.message}
                // id="address"
                label="Address"
                fullWidth
                margin="normal"
                {...register("address")}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                error={Boolean(formState.errors.zipcode)}
                helperText={formState.errors.zipcode?.message}
                id="zipcode"
                label="Zip-code"
                type="number"
                fullWidth
                margin="normal"
                {...register("zipcode")}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                error={Boolean(formState.errors.city)}
                helperText={formState.errors.city?.message}
                id="city"
                label="City"
                fullWidth
                margin="normal"
                {...register("city")}
              />
            </Grid>
          </Grid>
          <Box mt={4}>
            <Button variant="contained" color="primary" type="submit">
              Buy
            </Button>
          </Box>
        </form>
      </Container>
    </Container>
  );
}

export default CheckoutPage;
