import { Box, Typography, styled } from "@mui/material";
import { useParams } from "react-router-dom";
import QuantityButton from "../components/QuantityButton";
import { useCart } from "../context/CartContext";
import { useProducts } from "../context/ProductsContext";

const FirstBox = styled(Box)(({ theme }) => ({
  display: "flex",
  // backgroundColor: "green",
  padding: "1rem",
  height: "full",
  [theme.breakpoints.between("md", "xl")]: {
    height: "530px",
  },
}));
const SecondBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  // backgroundColor: "blue",
  padding: "1rem",
  height: "full",
  [theme.breakpoints.between("xs", "sm")]: {
    flexDirection: "column",
  },
  [theme.breakpoints.between("sm", "md")]: {
    flexDirection: "column",
  },
}));
const Item1 = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  // backgroundColor: "cyan",
  padding: "1rem",
  width: "100%",
  objectFit: "contain",
  [theme.breakpoints.between("xs", "md")]: {
    width: "95%",
    height: "200px",
  },
}));
const Image = styled("img")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  backgroundColor: "#f2f9fa",
  padding: "1rem",
  width: "400px",
  height: "400px",
  objectFit: "contain",
  [theme.breakpoints.between("xs", "md")]: {
    width: "100%",
    height: "200px",
  },
}));
const Item2 = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  // backgroundColor: "cyan",
  padding: "1rem",
  height: "full",
  width: "100%",
});
const TextBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  // backgroundColor: "yellow",
  padding: "1rem",
  height: "full",
});
const StyledTitle = styled(Box)({
  display: "flex",
  textAlign: "left",
  fontWeight: "bold",
  fontSize: "h2.fontSize",
  // backgroundColor: "blue",
  padding: "1rem",
  height: "full",
});
const StyledDescription = styled(Box)({
  display: "flex",
  textAlign: "left",
  // backgroundColor: "blue",
  padding: "1rem",
  height: "full",
});

const PriceBox = styled(Box)({
  display: "flex",
  // backgroundColor: "purple",

  padding: "0rem",
  paddingTop: "1rem",
  paddingLeft: "2rem",
});

const ButtonBox1 = styled(Box)({
  display: "flex",
  flexDirection: "column",
  // backgroundColor: "yellow",
  padding: "2rem",
  height: "full",
});
export default function ProductDescriptionPage() {
  const {} = useCart();
  const { id } = useParams();
  const { products } = useProducts();

  let product = products.find((p) => p.id === id);

  return (
    <>
      <FirstBox>
        <SecondBox>
          <Item1>
            <Image src={product?.image} alt={product?.title} />
          </Item1>
          <Item2>
            <TextBox>
              <StyledTitle>
                <Typography
                  data-cy="product-title"
                  sx={{ fontSize: "h4.fontSize" }}
                >
                  {product?.title}
                </Typography>
              </StyledTitle>
              <StyledDescription>
                <Typography data-cy="product-description">
                  {product?.description}
                </Typography>
              </StyledDescription>
            </TextBox>
            <PriceBox>
              <Typography
                data-cy="product-price"
                sx={{ fontWeight: "bold", fontSize: "18px" }}
              >
                $ {product?.price}
              </Typography>
            </PriceBox>
            <ButtonBox1>
              {product ? <QuantityButton product={product} /> : null}
            </ButtonBox1>
          </Item2>
        </SecondBox>
      </FirstBox>
    </>
  );
}
