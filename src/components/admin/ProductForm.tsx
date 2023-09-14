import { zodResolver } from "@hookform/resolvers/zod";
import {
  Box,
  Button,
  FormHelperTextProps,
  Grid,
  TextField,
  styled,
} from "@mui/material";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { Product } from "../../../data";
import { useProducts } from "../../context/ProductsContext";

const FormContainer = styled(Box)({
  display: "flex",
  justifyContent: "center",
});

interface Props {
  product?: Product;
}

const ProductSchema: z.ZodType<Product> = z.object({
  id: z.string(),
  title: z.string().min(1, "Title is required"),
  image: z.string().min(1, "Url is required").url(),
  description: z.string().min(1, "Description is required"),
  price: z.coerce.number().min(1, "Price is required"),
});

export default function ProductForm({ product }: Props) {
  const navigate = useNavigate();
  const productContext = useProducts();
  const products = productContext.products;
  let lastItemId: string | undefined;

  for (let i = products.length - 1; i >= 0; i--) {
    const product = products[i];
    if (product.id) {
      const i = parseInt(product.id) + 1;
      lastItemId = i.toString();
      console.log(lastItemId);
      break;
    }
  }

  const { register, handleSubmit, formState, setValue } = useForm<Product>({
    defaultValues: product || {
      id: lastItemId,
    },
    resolver: zodResolver(ProductSchema),
  });

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
      productContext.editProduct(productToSave);
    } else if (!product) {
      productContext.addProduct(productToSave);
    }
    navigate("/admin");
  };

  const returnBtn = () => {
    navigate("/admin");
  };

  return (
    <>
      <FormContainer>
        <form data-cy="product-form" onSubmit={handleSubmit(saveProduct)}>
          <Grid
            container
            spacing={3}
            display={"flex"}
            justifyContent={"center"}
          >
            <Grid item xs={12} sm={12} md={8} lg={8}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
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
                <Grid item xs={12}>
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
                <Grid item xs={12}>
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
                <Grid item xs={12}>
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
              </Grid>
              <Box
                mt={4}
                style={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <Box style={{ paddingRight: "1rem" }}>
                  <Button
                    style={{
                      marginBottom: "10px",
                      background:
                        "linear-gradient(to right bottom, #aeccda, #4194be)",
                    }}
                    variant="contained"
                    color="primary"
                    type="submit"
                  >
                    Submit
                  </Button>
                </Box>
                <Box style={{ paddingBottom: "3rem" }}>
                  <Button
                    onClick={returnBtn}
                    style={{
                      marginBottom: "10px",
                      background:
                        "linear-gradient(to right bottom, #aeccda, #4194be)",
                    }}
                    variant="contained"
                    color="primary"
                  >
                    Return
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </form>
      </FormContainer>
    </>
  );
}
