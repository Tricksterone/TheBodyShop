// import { Grid, Snackbar, SnackbarContent, styled } from "@mui/material";
// import Typography from "@mui/material/Typography";
// import { useState } from "react";
// import { useParams } from "react-router-dom";
// import { products } from "../../data/index";
// import QuantityButton from "../components/QuantityButton";
// import { useCart } from "../context/CartContext";

// export default function ProductDescription() {
//   const {
//     getItemQuantity,
//     increaseCartQuantity,
//     decreaseCartQuantity,
//     removeFromCart,
//   } = useCart();
//   const { id } = useParams();

//   let product = products.find((p) => p.id === id);

//   const ResponsiveGridItem = styled(Grid)(({ theme }) => ({
//     display: "flex",
//     justifyContent: "flex-end", // Center on mobile screens
//     alignItems: "center", // Center vertically on all screens
//     [theme.breakpoints.down("md")]: {
//       justifyContent: "flex-start",
//     },
//     [theme.breakpoints.down("sm")]: {
//       justifyContent: "flex-start",
//     },
//   }));

//   const ResponsiveImage = styled("img")(({ theme }) => ({
//     display: "flex",
//     maxWidth: "100%",
//     height: "auto",
//     [theme.breakpoints.down("md")]: {
//       objectFit: "auto",
//     },
//     [theme.breakpoints.down("sm")]: {
//       objectFit: "auto",
//       maxWidth: "auto",
//       maxHeight: "450px",
//     },
//   }));

//   if (!product) {
//     return <div>Product not found.</div>;
//   }

//   return (
//     <>
//       <Grid container spacing={2}>
//         {/* Image */}
//         <ResponsiveGridItem item xs={12} sm={6}>
//           <ResponsiveImage src={product.image} alt={product.image} />
//         </ResponsiveGridItem>

//         {/* Content */}
//         <Grid item xs={12} sm={6} marginTop={7}>
//           <Typography data-cy="product-title" variant="h4">
//             {product.title}
//           </Typography>
//           <Typography
//             data-cy="product-description"
//             variant="body1"
//             sx={{ maxWidth: "400px" }}
//           >
//             {product.description}
//           </Typography>
//           <Typography data-cy="product-price" variant="h6">
//             {product.price}$
//           </Typography>
//           <QuantityButton product={product} />
//         </Grid>
//       </Grid>
//     </>
//   );
// }

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
const Item1 = styled(Box)({
  display: "flex",
  justifyContent: "center",
  // backgroundColor: "cyan",
  padding: "1rem",
  height: "full",
  width: "100%",
});
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
export default function Test() {
  const {} = useCart();
  const { id } = useParams();
  const { products } = useProducts();

  const product = products.find((p) => p.id === id);

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
                <Typography sx={{ fontSize: "h4.fontSize" }}>
                  {product?.title}
                </Typography>
              </StyledTitle>
              <StyledDescription>
                <Typography>{product?.description}</Typography>
              </StyledDescription>
            </TextBox>
            <PriceBox>
              <Typography sx={{ fontWeight: "bold", fontSize: "18px" }}>
                $ {product?.price}
              </Typography>
            </PriceBox>
            <ButtonBox1>
              <QuantityButton product={product} />
            </ButtonBox1>
          </Item2>
        </SecondBox>
      </FirstBox>
    </>
  );
}
