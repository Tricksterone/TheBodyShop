import { Container, Typography, styled } from "@mui/material";
import { Product } from "../../data";
import ProductForm from "../components/ProductForm";
import { useParams } from "react-router-dom";
import { useProducts } from "../context/ProductsContext";

interface Props {
  product?: Product;
}

const Typo = styled(Typography)({
  display: "flex",
  fontWeight: "bold",
  fontSize: "4rem",
  background: "linear-gradient(to right bottom, #3e8ec1, #22ddc4)",
  backgroundClip: "text",
  color: "transparent",
});
export default function CreateProductPage(props: Props) {
  const { id } = useParams();

  const { products } = useProducts();

  const product = products.find((p) => p.id === id);

  return (
    <Container>
      <Container
        style={{
          display: "flex",
          alignContent: "center",
          flexDirection: "column",
        }}
      >
        <Typo variant="h6" gutterBottom marginTop={2}>
          {id ? "Edit Product" : "Create Product"}
        </Typo>
        <ProductForm product={product} />
      </Container>
    </Container>
  );
}
