import styled from "@emotion/styled";
import { zodResolver } from "@hookform/resolvers/zod";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import {
  Box,
  Button,
  FormHelperTextProps,
  Grid,
  IconButton,
  TextField,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Product } from "../../../data";
import React, { useEffect, useState } from "react";
import { useProducts } from "../../context/ProductsContext";
import { useNavigate } from "react-router-dom";
import DialogAlert from "../DialogAlert";

interface ProductProps {
  product: Product;
  toggleEditing: () => void;
  isEditing: boolean;
}

const ProductSchema: z.ZodType<Product> = z.object({
  id: z.string(),
  title: z.string().min(1, "Title is required"),
  image: z.string().min(1, "Url is required").url(),
  description: z.string().min(1, "Description is required"),
  price: z.coerce.number().min(1, "Price is required"),
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
    resolver: zodResolver(ProductSchema),
  });

  const navigate = useNavigate();
  const { deleteProduct, editProduct, addProduct } = useProducts();

  useEffect(() => {
    if (product) {
      setValue("title", product.title);
      setValue("image", product.image);
      setValue("description", product.description);
      setValue("price", product.price);
    }
  }, [product, setValue]);

  const saveProduct = (productToSave: Product) => {
    if (product) {
      console.log("EDIT");
      editProduct(productToSave);
    } else {
      console.log("ADD");
      addProduct(productToSave);
    }
    navigate("/admin");
  };

  return (
    <ItemContainer boxShadow={3}>
      <ButtonContainer>
        <IconButton onClick={toggleEditing}>
          <EditOutlinedIcon fontSize="large" style={{ color: "#3e8ec1" }} />
        </IconButton>
        <Box style={{ padding: "0.5rem" }}>
          <DialogAlert product={product} />
        </Box>
      </ButtonContainer>
      <Box style={{ padding: "1rem" }}>
        <form data-cy="product-form" onSubmit={handleSubmit(saveProduct)}>
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
                  error={Boolean(formState.errors.title)}
                  helperText={formState.errors.title?.message}
                  FormHelperTextProps={
                    {
                      "data-cy": "product-title-error",
                    } as FormHelperTextProps
                  }
                  id="title"
                  label="title"
                  type="text"
                  fullWidth
                  inputProps={{ "data-cy": "product-title" }}
                  {...register("title")}
                />
              </Grid>
              <Grid>
                <TextField
                  error={Boolean(formState.errors.price)}
                  helperText={formState.errors.price?.message}
                  FormHelperTextProps={
                    {
                      "data-cy": "product-price-error",
                    } as FormHelperTextProps
                  }
                  id="price"
                  label="price"
                  type="number"
                  fullWidth
                  inputProps={{ "data-cy": "product-price" }}
                  {...register("price", { valueAsNumber: true })}
                />
              </Grid>
            </Box>
            <Grid>
              <TextField
                error={Boolean(formState.errors.image)}
                helperText={formState.errors.image?.message}
                FormHelperTextProps={
                  {
                    "data-cy": "product-image-error",
                  } as FormHelperTextProps
                }
                id="image"
                label="Image Url"
                type="text"
                fullWidth
                inputProps={{ "data-cy": "product-image" }}
                {...register("image")}
              />
            </Grid>
            <Grid>
              <TextField
                error={Boolean(formState.errors.description)}
                helperText={formState.errors.description?.message}
                FormHelperTextProps={
                  {
                    "data-cy": "product-description-error",
                  } as FormHelperTextProps
                }
                id="description"
                label="description"
                type="text"
                fullWidth
                inputProps={{ "data-cy": "product-description" }}
                {...register("description")}
              />
            </Grid>
          </Grid>
          <Box mt={4}>
            <StyledButton
              style={{ marginBottom: "10px" }}
              variant="contained"
              color="primary"
              type="submit"
            >
              Submit
            </StyledButton>
          </Box>
        </form>
      </Box>
    </ItemContainer>
  );
}
