import {
  Box,
  Button,
  Hidden,
  List,
  ListItem,
  Typography,
  styled,
} from "@mui/material";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EditProductItem from "../../components/admin/EditProductItem";
import ProductItem from "../../components/admin/ProductItem";
import { useProducts } from "../../context/ProductsContext";

const ElemenetBox = styled(Box)({
  paddingBottom: "2.5rem",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
});

const TypoBox = styled(Box)({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
});

const Typo = styled(Typography)({
  display: "flex",
  justifyContent: "center",
  fontWeight: "bold",
  fontSize: "4rem",
  background: "linear-gradient(to right bottom, #aeccda, #4194be)",
  backgroundClip: "text",
  color: "transparent",
});

const ListContainer = styled(Box)({
  display: "flex",
  justifyContent: "center",
  margin: "0.5rem",
});

const ListBox = styled(Box)({
  width: "75%",
  display: "flex",
  flexDirection: "column",
});

const ButtonBox = styled(Box)({
  display: "flex",
  justifyContent: "flex-end",
  paddingRight: "1rem",
  paddingLeft: "1rem",
});

const StyledButton = styled(Button)(({ theme }) => ({
  width: "25%",
  color: "white",
  background: "linear-gradient(to right bottom, #aeccda, #4194be)",
  [theme.breakpoints.between("xs", "md")]: {
    width: "100%",
  },
}));

export default function AdminProductsPage() {
  const navigate = useNavigate();
  const { products } = useProducts();
  // Förklaring!
  // isEditing är state-variabeln och setIsEditing är funktionen för att sätta värdet på isEditing
  const [isEditing, setIsEditing] = useState(Array(products.length).fill(true));
  const { id } = useParams();

  const isEditingMode = id ? true : false;

  const toggleEditing = (index: number, productId: string) => {
    // kopierar arrayen till en tillfällig variabel
    const updatedEditing = [...isEditing];
    // ändrar värdet för en specifik produkt. Är statet false blir det true och tvärtom
    updatedEditing[index] = !updatedEditing[index];
    // ändrar värdet i state-variabeln
    setIsEditing(updatedEditing);

    // beroende på id ska den enskilda produkten visas i edit-mode
    // detta lyckas inte
    if (productId) {
      navigate(`/admin/product/${productId}`);
    } else {
      navigate("/admin");
    }
  };

  const handleAddItemClick = () => {
    navigate("product/new/");
  };

  return (
    <>
      <ElemenetBox>
        <TypoBox>
          <Hidden mdUp>
            <Typo>Admin</Typo>
          </Hidden>
          <Hidden mdDown>
            <Typo>Admin Page</Typo>
          </Hidden>
        </TypoBox>
        <ListContainer>
          <ListBox>
            <ButtonBox data-cy="admin-add-product" onClick={handleAddItemClick}>
              <StyledButton>New Product</StyledButton>
            </ButtonBox>
            <List>
              {products.map((product, index) => (
                <ListItem data-cy="product" key={product.id}>
                  {isEditingMode ? (
                    <EditProductItem
                      product={product}
                      toggleEditing={() => toggleEditing(index, product.id)}
                      isEditing={isEditing[index]}
                    />
                  ) : (
                    <ProductItem
                      product={product}
                      toggleEditing={() => toggleEditing(index, product.id)}
                    />
                  )}
                </ListItem>
              ))}
            </List>
          </ListBox>
        </ListContainer>
      </ElemenetBox>
    </>
  );
}
