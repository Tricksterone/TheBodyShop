import styled from "@emotion/styled";
import { zodResolver } from "@hookform/resolvers/zod";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { Box, Button, Grid, IconButton, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Product } from "../../../data";
import React from "react";
import { useProducts } from "../../context/ProductsContext";

interface ProductProps {
  product: Product;
  toggleEditing: () => void;
  isEditing: boolean;
}
const ItemSchema = z.object({
  title: z.string(),
  image: z.string(),
  description: z.string(),
  price: z.coerce.number(),
});

const ItemContainer = styled(Box)({
  height: "100%",
  borderRadius: "0.375rem",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  padding: "0.5rem",
});
const ButtonContainer = styled(Box)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-end",
  gap: "1.25rem",
});
const StyledButton = styled(Button)({
  width: "25%",
  color: "white",
  background: "linear-gradient(to right bottom, #3e8ec1, #22ddc4)",
});

export default function EditProductItem({
  product,
  toggleEditing,
}: ProductProps) {
  const { register, handleSubmit, formState, setValue } = useForm<Product>({
    defaultValues: product || {},
    resolver: zodResolver(ItemSchema),
  });

  React.useEffect(() => {
    if (product) {
      setValue("title", product.title);
      setValue("image", product.image);
      setValue("description", product.description);
      setValue("price", product.price); //number...
    }
  }, [product, setValue]);

  const handleDeleteClick = () => {
    if (product) {
      // productContext.removeProduct(product.id);
    }
  };

  return (
    <ItemContainer boxShadow={3}>
      <ButtonContainer>
        <IconButton onClick={toggleEditing}>
          <EditOutlinedIcon fontSize="large" style={{ color: "#3e8ec1" }} />
        </IconButton>
        <IconButton onClick={handleDeleteClick}>
          <DeleteOutlineIcon fontSize="large" style={{ color: "#3e8ec1" }} />
        </IconButton>
      </ButtonContainer>
      <Box style={{ padding: "1rem" }}>
        <form>
          <Grid>
            <Box
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Grid style={{ flex: "flex-1" }}>
                <TextField
                  id="title"
                  label="title"
                  {...register("title")}
                ></TextField>
              </Grid>
              <Grid>
                <TextField
                  id="price"
                  label="price"
                  fullWidth
                  {...register("price")}
                ></TextField>
              </Grid>
            </Box>
            <Grid>
              <TextField
                id="image"
                label="Image Url"
                fullWidth
                {...register("image")}
              ></TextField>
            </Grid>
            <Grid>
              <TextField
                id="description"
                label="description"
                multiline
                rows={4}
                fullWidth
                {...register("description")}
              ></TextField>
            </Grid>
          </Grid>
          <Box mt={4}>
            <StyledButton
              style={{ marginBottom: "10px" }}
              variant="contained"
              color="primary"
              type="submit"
            >
              Save
            </StyledButton>
          </Box>
        </form>
      </Box>
    </ItemContainer>
  );
}
