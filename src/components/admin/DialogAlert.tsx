import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import * as React from "react";
import { Product } from "../../../data";
import { useCart } from "../../context/CartContext";
import { useProducts } from "../../context/ProductsContext";

interface ProductCardProps {
  product: Product;
}

export default function DialogAlert({ product }: ProductCardProps) {
  const [open, setOpen] = React.useState(false);
  const { removeAllProductsById } = useCart();
  const { deleteProduct } = useProducts();
  const [userChoice, setUserChoice] = React.useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAgreeClick = () => {
    setUserChoice("agree");
    handleClose();
  };

  const handleDisagreeClick = () => {
    setUserChoice("disagree");
    handleClose();
  };

  React.useEffect(() => {
    if (userChoice === "agree") {
      removeAllProductsById(product.id);
      deleteProduct(product.id);
    }
  }, [userChoice, product.id, deleteProduct, removeAllProductsById]);

  return (
    <>
      <Button
        data-cy="admin-remove-product"
        variant="outlined"
        onClick={handleClickOpen}
      >
        Delete
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this product?!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDisagreeClick}>Disagree</Button>
          <Button data-cy="confirm-delete-button" onClick={handleAgreeClick}>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
