import { Container, Hidden, Typography, styled } from "@mui/material";
import { useParams } from "react-router-dom";
import ProductForm from "../../components/admin/ProductForm";
import { useProducts } from "../../context/ProductsContext";

const Typo = styled(Typography)({
  display: "flex",
  fontWeight: "bold",
  fontSize: "4rem",
  background: "linear-gradient(to right bottom, #3e8ec1, #22ddc4)",
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
        <Hidden xsDown mdUp>
          <Typo
            display={"flex"}
            justifyContent={"center"}
            variant="h6"
            gutterBottom
            marginTop={2}
          >
            {id ? "Edit" : "Create"}
          </Typo>
        </Hidden>
        <Hidden mdDown>
          <Typo
            display={"flex"}
            justifyContent={"center"}
            variant="h6"
            gutterBottom
            marginTop={2}
          >
            {id ? "Edit Product" : "Create Product"}
          </Typo>
        </Hidden>
        <ProductForm product={product} />
      </Container>
    </Container>
  );
}
