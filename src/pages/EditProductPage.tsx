import { Container, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { z } from "zod";
import { Product } from "../../data";
import { useProducts } from "../context/ProductsContext";
import CreateProductPage from "./CreateProductPage";
import ProductForm from "../components/ProductForm";

interface Props {
  product?: Product;
}

export default function EditProductPage(props: Props) {
  const { id } = useParams();
  const { products } = useProducts();

  const product = products.find((p) => p.id === id);
  // TODO Hantera om produkten inte finns..

  return (
    <Container>
      <Container>
        <Typography variant="h6" gutterBottom marginTop={2}>
          Edit Product
        </Typography>
        <ProductForm product={product} />
      </Container>
    </Container>
  );
}
