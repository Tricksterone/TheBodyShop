import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Box, Hidden, IconButton, styled } from "@mui/material";
import { Product } from "../../../data";
import { useProducts } from "../../context/ProductsContext";

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
    backgroundColor: "brown",
  },
}));
const ItemId = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "blue",
  minWidth: 50,
});
const ImgContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  height: "3rem",
  width: "3rem",
  padding: "0.5rem",
  objectFit: "contain",
  backgroundColor: "purple",
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
  backgroundColor: "yellow",
  [theme.breakpoints.between("xs", "md")]: {
    width: "90%",
    height: "8rem",
  },
}));
const Item2 = styled(Box)(({ theme }) => ({
  display: "flex",
  [theme.breakpoints.between("xs", "md")]: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    height: "auto",
    width: "100%",
    backgroundColor: "brown",
  },
}));
const TitleBox = styled(Box)({
  minWidth: 100,
  backgroundColor: "red",
});
const DescriptionBox = styled(Box)({
  display: "flex",
  flex: "flex-1",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  backgroundColor: "cyan",
});
const PriceBox = styled(Box)({
  display: "flex",
  backgroundColor: "green",
  minWidth: 80,
});
const ButtonContainer = styled(Box)({
  display: "flex",
  flexDirection: "row",
  gap: "1rem",
  backgroundColor: "gray",
});

export default function ProductItem({ product, toggleEditing }: ProductProps) {
  const { deleteProduct } = useProducts();

  const handleDeleteClick = () => {
    if (product) {
      deleteProduct(product.id);
    }
  };

  return (
    <ItemContainer boxShadow={3}>
      <Item1>
        <ItemId>{product.id}</ItemId>
        <ImgContainer>
          <Image src={product.image} alt={product.title} />
        </ImgContainer>
      </Item1>
      <TitleBox>{product.title}</TitleBox>
      <Hidden mdDown>
        <PriceBox>{product.price}</PriceBox>
        <DescriptionBox>{product.description}</DescriptionBox>
      </Hidden>
      <ButtonContainer>
        <IconButton onClick={toggleEditing}>
          <EditOutlinedIcon fontSize="large" style={{ color: "#3e8ec1" }} />
        </IconButton>
        <IconButton onClick={handleDeleteClick}>
          <DeleteOutlineIcon fontSize="large" style={{ color: "#3e8ec1" }} />
        </IconButton>
      </ButtonContainer>
    </ItemContainer>
  );
}
