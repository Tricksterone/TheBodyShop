import { Box, Button, List, ListItem, Typography, styled } from "@mui/material";
import ProductItem from "../../components/admin/ProductItem";
import EditProductItem from "../../components/admin/EditProductItem";
import { useState } from "react";
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
  background: "linear-gradient(to right bottom, #3e8ec1, #22ddc4)",
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
  backgroundColor: "green",
  paddingRight: "1rem",
  paddingLeft: "1rem",
});

const StyledButton = styled(Button)({
  width: "25%",
  color: "white",
  background: "linear-gradient(to right bottom, #3e8ec1, #22ddc4)",
});

export default function AdminTest() {
  const context = useProducts();
  const [isEditing, setIsEditing] = useState(
    Array(context.products.length).fill(true)
  );

  console.log(context.products);

  const toggleEditing = (index: number) => {
    const updatedEditing = [...isEditing];
    updatedEditing[index] = !updatedEditing[index];
    setIsEditing(updatedEditing);
  };

  return (
    <>
      <ElemenetBox>
        <TypoBox>
          <Typo>Products</Typo>
        </TypoBox>
        <ListContainer>
          <ListBox>
            <ButtonBox>
              <StyledButton>New Product</StyledButton>
            </ButtonBox>
            <List>
              {context.products.map((product, index) => (
                <ListItem key={product.id}>
                  {isEditing[index] ? (
                    <ProductItem
                      product={product}
                      toggleEditing={() => toggleEditing(index)}
                    />
                  ) : (
                    <EditProductItem
                      product={product}
                      toggleEditing={() => toggleEditing(index)}
                      isEditing={isEditing[index]}
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
