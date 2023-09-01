import { Box, Container, Grid, styled } from "@mui/material";
import { products } from "../../data/index";
import Card from "../components/Card";

const StyledMainBox = styled(Box)({
  backgroundColor: "#fafaf8",
});

const StyledHeroImageBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignContent: "center",
  width: "100%",
  height: "28rem",
  [theme.breakpoints.down("md")]: {
    height: "20rem",
  },
  [theme.breakpoints.down("sm")]: {
    height: "15rem",
  },
}));

const StyledHeroImage = styled("img")({
  width: "100%",
  height: "100%",
  objectFit: "cover",
});

const StyledSlogan = styled(Box)(({ theme }) => ({
  position: "absolute",
  color: "#377794",
  right: "5%",
  top: "45%",
  fontSize: "3rem",
  fontWeight: "bold",
  textAlign: "right",
  [theme.breakpoints.down("md")]: {
    top: "40%",
    fontSize: "2rem",
    right: "1%",
  },
  [theme.breakpoints.down("sm")]: {
    top: "25%",
    fontSize: "1.5rem",
    transform: "translateY(-150%)",
  },
}));

const StyledProductsContainer = styled(Container)({
  padding: "1rem",
  display: "flex",
  justifyContent: "space-evenly",
  alignContent: "center",
});

export default function Products() {
  return (
    <div>
      <StyledMainBox>
        <StyledHeroImageBox>
          <StyledHeroImage
            src="./images/hero125039.png"
            alt="Two smiling doctors in a hospital environment"
          ></StyledHeroImage>
          <StyledSlogan>All our organs are organic</StyledSlogan>
        </StyledHeroImageBox>
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
                <Card product={product} />
              </Grid>
            ))}
          </Grid>
        </StyledProductsContainer>
      </StyledMainBox>
    </div>
  );
}
