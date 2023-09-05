import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";

export default function AdminForm() {
  return (
    <Container>
      <Container>
        <Typography variant="h6" gutterBottom marginTop={2}>
          Item Details Form
        </Typography>
        <form>
          <Grid container spacing={3}>
            <Grid item xs={6} sm={6}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <TextField id="title" label="title" fullWidth />
                </Grid>
                <Grid item xs={12}>
                  <TextField id="image" label="Image Url" fullWidth />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="description"
                    label="description"
                    multiline
                    rows={4}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField id="price" label="price" fullWidth />
                </Grid>
              </Grid>
              <Box mt={4}>
                <Button
                  style={{ marginBottom: "10px" }}
                  variant="contained"
                  color="primary"
                  type="submit"
                >
                  Submit
                </Button>
              </Box>
            </Grid>
          </Grid>
        </form>
      </Container>
    </Container>
  );
}
