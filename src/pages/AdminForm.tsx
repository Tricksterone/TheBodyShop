import { zodResolver } from "@hookform/resolvers/zod";
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { z } from "zod";
import { products } from "../../data/index";

const ItemSchema = z.object({
  title: z.string(),
  image: z.string(),
  description: z.string(),
  price: z.coerce.number(),
});

type Item = z.infer<typeof ItemSchema>;

interface Props {
  item?: Item;
}

export default function AdminForm(props: Props) {
  const { register, handleSubmit, formState, setValue } = useForm<Item>({
    defaultValues: props.item || {},
    resolver: zodResolver(ItemSchema),
  });

  const { id } = useParams();

  const product = products.find((p) => p.id === id);

  React.useEffect(() => {
    if (product) {
      setValue("title", product.title);
      setValue("image", product.image);
      setValue("description", product.description);
      setValue("price", product.price); //number...
    }
  }, [product, setValue]);

  const saveItem = (item: Item) => {
    if (props.item) {
      // uppdatera(PUT)
    } else {
      //lägg till (POST)
    }
  };
  return (
    <Container>
      <Container>
        <Typography variant="h6" gutterBottom marginTop={2}>
          Item Details Form
        </Typography>
        <form>
          <Grid container spacing={3}>
            <Grid item xs={6} sm={6}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <TextField
                    id="title"
                    label="title"
                    fullWidth
                    {...register("title")}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="image"
                    label="Image Url"
                    fullWidth
                    {...register("image")}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="description"
                    label="description"
                    multiline
                    rows={4}
                    fullWidth
                    {...register("description")}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="price"
                    label="price"
                    fullWidth
                    {...register("price")}
                  />
                </Grid>
              </Grid>
              <Box mt={4}>
                <Button
                  style={{ marginBottom: "10px" }}
                  variant="contained"
                  color="primary"
                  type="submit"
                >
                  Submit
                </Button>
              </Box>
            </Grid>
          </Grid>
        </form>
      </Container>
    </Container>
  );
}
