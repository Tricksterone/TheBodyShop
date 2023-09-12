import { Container, Typography } from "@mui/material";
import { Product } from "../../data";
import ProductForm from "../components/ProductForm";

interface Props {
  product?: Product;
}

export default function CreateProductPage(props: Props) {
  return (
    <Container>
      <Container>
        <Typography variant="h6" gutterBottom marginTop={2}>
          Create Product
        </Typography>
        <ProductForm />
      </Container>
    </Container>
  );
}
