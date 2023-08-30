import {
  Container,
  Grid,
  Paper,
  Typography,
  TextField,
  Button,
} from "@mui/material";

function CheckoutPage() {
  return (
    <Container>
      <Container>
        <Typography variant="h6" gutterBottom>
          * Produktsammanfattning här *
        </Typography>
      </Container>

      <Container>
        <Typography variant="h6" gutterBottom>
          Personal Details Form
        </Typography>
        <form>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="name"
                name="name"
                label="Full Name"
                fullWidth
                margin="normal"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="email"
                name="email"
                label="E-mail"
                fullWidth
                margin="normal"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="phone"
                name="phone"
                label="Phone number"
                fullWidth
                margin="normal"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="address"
                name="address"
                label="Address"
                fullWidth
                margin="normal"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="zipcode"
                name="zipcode"
                label="Zip-code"
                fullWidth
                margin="normal"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="city"
                name="city"
                label="City"
                fullWidth
                margin="normal"
              />
            </Grid>
            {/* Lägg till fler fält här för leveransuppgifter kanske? */}
          </Grid>
          <div style={{ marginTop: 10 }}>
            <Button m-20 variant="contained" color="primary" type="submit">
              Buy
            </Button>
          </div>
        </form>
      </Container>
    </Container>
  );
}

export default CheckoutPage;
