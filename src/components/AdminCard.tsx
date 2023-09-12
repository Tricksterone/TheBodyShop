import { Box, CardHeader } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { Product } from "../../data/index";
import DialogAlert from "./DialogAlert";

interface ProductCardProps {
  product: Product;
}

export default function AdminProductCard({ product }: ProductCardProps) {
  return (
    <>
      <Card key={product.id} sx={{ maxWidth: 345 }}>
        <div data-cy="product-id">{product.id}</div>
        <CardHeader
          data-cy="product-title"
          title={
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {product.title}
            </Box>
          }
        />
        <Link to={`product/${product.id}`}>
          <CardMedia
            data-cy="admin-edit-product"
            title={product.title}
            component="img"
            height="400"
            image={product.image}
            alt={product.title}
          />
        </Link>
        <CardContent>
          <br />
          <Typography
            data-cy="product-price"
            display="flex"
            justifyContent="space-around"
            alignItems="center"
          >
            {product.price} $
            <DialogAlert product={product} />
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}
