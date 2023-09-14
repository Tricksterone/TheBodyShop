import { zodResolver } from "@hookform/resolvers/zod";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import {
  Box,
  Button,
  FormHelperTextProps,
  Hidden,
  IconButton,
  TextField,
  styled,
} from "@mui/material";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { Product } from "../../../data";
import { useProducts } from "../../context/ProductsContext";
import DialogAlert from "./DialogAlert";

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
  borderRadius: "0.5rem",
  width: "100%",
  display: "flex",
  flexDirection: "column",
});
const FormContainer = styled(Box)({
  padding: "1rem",
});
const FormItems1 = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  [theme.breakpoints.between("xs", "md")]: {
    flexDirection: "column",
  },
}));
const Item = styled(Box)({
  display: "flex",
  flexGrow: "1",
  justifyContent: "space-between",
  padding: "1rem",
});
const FormItems2 = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
});
const ButtonContainer = styled(Box)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-end",
  gap: "1.25rem",
});
const StyledButton = styled(Button)(({ theme }) => ({
  width: "25%",
  background: "linear-gradient(to right bottom, #3e8ec1, #22ddc4)",
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));

export default function EditProductItem({
  product,
  toggleEditing,
}: ProductProps) {
  const { register, handleSubmit, formState, setValue } = useForm<Product>({
    defaultValues: product || {},
    resolver: zodResolver(ProductSchema),
  });

  const navigate = useNavigate();
  const { editProduct, addProduct } = useProducts();

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
      editProduct(productToSave);
    } else {
      addProduct(productToSave);
    }
    navigate("/admin");
  };

  const handleEditBtn = () => {
    toggleEditing;
    navigate("/admin");
  };

  return (
    <ItemContainer boxShadow={3}>
      <ButtonContainer>
        <IconButton data-cy="admin-edit-product" onClick={handleEditBtn}>
          <EditOutlinedIcon fontSize="large" style={{ color: "#3e8ec1" }} />
        </IconButton>
        <Hidden smDown>
          <Box style={{ padding: "0.5rem" }}>
            <DialogAlert product={product} />
          </Box>
        </Hidden>
      </ButtonContainer>
      <FormContainer>
        <form data-cy="product-form" onSubmit={handleSubmit(saveProduct)}>
          <FormItems1>
            <Item>
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
            </Item>
            <Item>
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
                {...register("price")}
              />
            </Item>
          </FormItems1>
          <FormItems2>
            <Item>
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
            </Item>
            <Item>
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
            </Item>
          </FormItems2>
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
      </FormContainer>
    </ItemContainer>
  );
}
