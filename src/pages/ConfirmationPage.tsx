import { Paper } from "@mui/material";
import { Container } from "@mui/system";

export default function Confirmation() {
  const storedOrderDetails = localStorage.getItem("orderDetails");
  let orderDetails;
  if (storedOrderDetails) {
    orderDetails = JSON.parse(storedOrderDetails);
  } else {
    console.log("No order details found in local storage.");
    return (
      <div>
        <h1>Confirmation page</h1>
        <h2>No order details found</h2>
      </div>
    );
  }
  return (
    <Container>
      <Container>
        <div>
          <h1>Confirmation page</h1>
          <Paper
            elevation={6}
            sx={{ padding: "4px", marginBottom: "10px", maxWidth: "500px" }}
          >
            {orderDetails && (
              <Container style={{ margin: "16px 0px" }}>
                <h2>Your Order Details:</h2>
                <p>Name: {orderDetails.name}</p>
                <p>Address: {orderDetails.address}</p>
                <p>ZipCode: {orderDetails.zipcode}</p>
                <p>City: {orderDetails.city}</p>
                <p>Email: {orderDetails.email}</p>
                <p>Phone: {orderDetails.phone}</p>
                <p>Ska även visa produktsammanfattning?</p>
              </Container>
            )}
          </Paper>
        </div>
      </Container>
    </Container>
  );
}