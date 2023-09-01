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
    <div>
      <h1>Confirmation page</h1>
      {orderDetails && (
        <div>
          <h2>Your Order Details:</h2>
          <p>Name: {orderDetails.name}</p>
          <p>Email: {orderDetails.email}</p>
          <p>Phone: {orderDetails.phone}</p>
          <p>Ska även visa produktsammanfattning?</p>
        </div>
      )}
    </div>
  );
}
