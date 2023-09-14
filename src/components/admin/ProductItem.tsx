import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { Box, Hidden, IconButton, styled } from "@mui/material";
import { Product } from "../../../data";
import DialogAlert from "./DialogAlert";

interface ProductProps {
  product: Product;
  toggleEditing: () => void;
}

const ItemContainer = styled(Box)(({ theme }) => ({
  alignItems: "center",
  height: "4rem",
  borderRadius: "0.375rem",
  width: "100%",
  display: "flex",
  [theme.breakpoints.between("xs", "md")]: {
    flexDirection: "column",
    height: "auto",
  },
}));
const Item1 = styled(Box)(({ theme }) => ({
  display: "flex",
  [theme.breakpoints.between("xs", "md")]: {
    flexDirection: "column",
    justifyContent: "center",
    height: "auto",
    width: "100%",
    backgroundColor: "#f2f9fa",
  },
}));
const ItemId = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minWidth: 50,
  [theme.breakpoints.between("xs", "md")]: {
    justifyContent: "flex-start",
    paddingLeft: "1rem",
    paddingTop: "1rem",
    alignItems: "flex-start",
    backgroundColor: "#f2f9fa",
  },
}));
const ImgContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  height: "3rem",
  width: "3rem",
  padding: "0.5rem",
  objectFit: "contain",
  [theme.breakpoints.between("xs", "md")]: {
    width: "95%",
    height: "95%",
    display: "flex",
    justifyContent: "center",
  },
}));
const Image = styled("img")(({ theme }) => ({
  objectFit: "contain",
  width: "3rem",
  height: "3rem",
  [theme.breakpoints.between("xs", "md")]: {
    width: "90%",
    height: "8rem",
    paddingBottom: "2rem",
  },
}));
const TitleBox = styled(Box)(({ theme }) => ({
  minWidth: 100,
  [theme.breakpoints.between("xs", "md")]: {
    minWidth: 0,
  },
}));
const DescriptionBox = styled(Box)({
  display: "flex",
  flex: "flex-1",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
});
const PriceBox = styled(Box)(({ theme }) => ({
  display: "flex",
  minWidth: 80,
  [theme.breakpoints.between("xs", "md")]: {
    minWidth: 0,
  },
}));
const ButtonContainer = styled(Box)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-end",
  gap: "1rem",
});

export default function ProductItem({ product, toggleEditing }: ProductProps) {
  return (
    <ItemContainer boxShadow={3}>
      <Item1>
        <ItemId data-cy="product-id">{product.id}</ItemId>
        <ImgContainer data-cy="product-image">
          <Image src={product.image} alt={product.title} />
        </ImgContainer>
      </Item1>
      <TitleBox data-cy="product-title">{product.title}</TitleBox>
      <PriceBox data-cy="product-price">${product.price}</PriceBox>
      <Hidden mdDown>
        <DescriptionBox>{product.description}</DescriptionBox>
      </Hidden>
      <ButtonContainer>
        <IconButton data-cy="admin-edit-product" onClick={toggleEditing}>
          <EditOutlinedIcon fontSize="large" style={{ color: "#3e8ec1" }} />
        </IconButton>
        <Box style={{ padding: "0.5rem" }}>
          <DialogAlert product={product} />
        </Box>
      </ButtonContainer>
    </ItemContainer>
  );
}
