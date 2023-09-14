import { Container, Hidden, Typography, styled } from "@mui/material";
import { useParams } from "react-router-dom";
import ProductForm from "../../components/admin/ProductForm";
import { useProducts } from "../../context/ProductsContext";

const Typo = styled(Typography)({
  display: "flex",
  fontWeight: "bold",
  fontSize: "4rem",
  background: "linear-gradient(to right bottom, #aeccda, #4194be)",
  backgroundClip: "text",
  color: "transparent",
});
export default function ProductFormPage() {
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
          justifyContent: "center",
        }}
      >
        <Typo
          display={"flex"}
          justifyContent={"center"}
          variant="h6"
          gutterBottom
          marginTop={2}
        >
          {id ? "Edit" : "Create"} <Hidden mdDown>Product</Hidden>
        </Typo>
        <ProductForm product={product} />
      </Container>
    </Container>
  );
}
