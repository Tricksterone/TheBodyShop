import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  styled,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { products } from "../../data/index";
import AdminCard from "../components/AdminCard";

const StyledMainBox = styled(Box)({
  backgroundColor: "#fafaf8",
});

const StyledProductsContainer = styled(Container)({
  padding: "1rem",
  display: "flex",
  justifyContent: "space-evenly",
  alignContent: "center",
});

export default function Admin() {
  const navigate = useNavigate();

  const handleAddItemClick = () => {
    navigate("/AdminForm");
  };
  return (
    <div>
      <StyledMainBox>
        <Grid container spacing={2} justifyContent="space-evenly">
          <Grid item xs={4}>
            <Typography variant="h5" textAlign={"center"}>
              Admin Page
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Button
              size="medium"
              variant="contained"
              onClick={handleAddItemClick}
            >
              Add Item
            </Button>
          </Grid>
        </Grid>
        <StyledProductsContainer>
          <Grid container spacing={2}>
            {products.map((product) => (
              <Grid
                data-cy="product"
                key={product.id}
                item
                xs={12}
                sm={6}
                md={4}
                lg={4}
              >
                <AdminCard product={product} />
              </Grid>
            ))}
          </Grid>
        </StyledProductsContainer>
      </StyledMainBox>
    </div>
  );
}
