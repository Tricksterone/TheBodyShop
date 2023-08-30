import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function ProductCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="270"
        image="../images/heart.jpg"
        alt="Human Heart"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae quis
          magni veritatis quos corporis natus, debitis enim temporibus unde
          iusto, id aperiam veniam doloremque modi qui numquam laborum magnam.
          Optio?
        </Typography>
        <br />
        <Typography
          display="flex"
          justifyContent="space-around"
          alignItems="center"
        >
          25000 kr
          <Button size="medium" variant="contained">
            Add to cart
          </Button>
        </Typography>
      </CardContent>
      <CardActions disableSpacing></CardActions>
    </Card>
  );
}
