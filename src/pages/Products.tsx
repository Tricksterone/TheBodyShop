import { Box, Container, Grid, styled } from "@mui/material";

const mockedData = [
  {
    id: "1",
    image:
      "https://github.com/plugga-tech/react-webshop-ts-dankmemes2-0/assets/112871777/b7e931d5-ea47-40ed-9fff-371fba401a1b",
    title: "heart",
    description:
      "Embark on a heart-pounding adventure with our top-notch artificial heart! Crafted for precision and performance, this remarkable organ will keep you moving to the rhythm of life.",
    price: 69292,
  },
  {
    id: "2",
    image:
      "https://github.com/plugga-tech/react-webshop-ts-dankmemes2-0/assets/112871777/c3c2e737-b8d9-4130-b96d-6104aa662203",
    title: "kidney",
    description:
      "Seeking a kidney-shaped marvel for transplantation enthusiasts? Look no further! This playful kidney replica is bound to be a conversation starter in your medical curiosities collection.",
    price: 137644,
  },
  {
    id: "3",
    image:
      "https://github.com/plugga-tech/react-webshop-ts-dankmemes2-0/assets/112871777/c8f5bcb3-bf20-4a65-a2fb-d28ad8a18c59",
    title: "liver",
    description:
      "Introducing our stunning liver replica, a tribute to the body's extraordinary resilience. Showcase the inner workings of this vital organ with pride, and toast to medical marvels!",
    price: 91773,
  },
  {
    id: "4",
    image:
      "https://github.com/plugga-tech/react-webshop-ts-dankmemes2-0/assets/112871777/b7e931d5-ea47-40ed-9fff-371fba401a1b",
    title: "heart",
    description:
      "Embark on a heart-pounding adventure with our top-notch artificial heart! Crafted for precision and performance, this remarkable organ will keep you moving to the rhythm of life.",
    price: 69292,
  },
  {
    id: "5",
    image:
      "https://github.com/plugga-tech/react-webshop-ts-dankmemes2-0/assets/112871777/c3c2e737-b8d9-4130-b96d-6104aa662203",
    title: "kidney",
    description:
      "Seeking a kidney-shaped marvel for transplantation enthusiasts? Look no further! This playful kidney replica is bound to be a conversation starter in your medical curiosities collection.",
    price: 137644,
  },
  {
    id: "6",
    image:
      "https://github.com/plugga-tech/react-webshop-ts-dankmemes2-0/assets/112871777/c8f5bcb3-bf20-4a65-a2fb-d28ad8a18c59",
    title: "liver",
    description:
      "Introducing our stunning liver replica, a tribute to the body's extraordinary resilience. Showcase the inner workings of this vital organ with pride, and toast to medical marvels!",
    price: 91773,
  },
];

const StyledMainBox = styled(Box)({
  backgroundColor: "#fafaf8",
});

const StyledHeroImageBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignContent: "center",
  width: "100%",
  height: "28rem",
  [theme.breakpoints.down("md")]: {
    height: "20rem",
  },
  [theme.breakpoints.down("sm")]: {
    height: "15rem",
  },
}));

const StyledHeroImage = styled("img")({
  width: "100%",
  height: "100%",
  objectFit: "cover",
});

const StyledSlogan = styled(Box)(({ theme }) => ({
  position: "absolute",
  color: "#377794",
  right: "5%",
  top: "45%",
  fontSize: "3rem",
  fontWeight: "bold",
  textAlign: "right",
  [theme.breakpoints.down("md")]: {
    top: "40%",
    fontSize: "2rem",
    right: "1%",
  },
  [theme.breakpoints.down("sm")]: {
    top: "25%",
    fontSize: "1.5rem",
    transform: "translateY(-150%)",
  },
}));

const StyledProductsContainer = styled(Container)({
  display: "flex",
  justifyContent: "space-evenly",
  alignContent: "center",
});

export default function Products() {
  return (
    <div>
      <StyledMainBox>
        <StyledHeroImageBox>
          <StyledHeroImage
            src="../../public/images/hero125039.png"
            alt="Two smiling doctors in a hospital environment"
          ></StyledHeroImage>
          <StyledSlogan>All our organs are organic</StyledSlogan>
        </StyledHeroImageBox>
        <StyledProductsContainer>
          <Grid container spacing={2}>
            {mockedData.map((product) => (
              <Grid
                key={product.id}
                display={"flex"}
                justifyContent={"space-evenly"}
                alignContent={"center"}
                item
                xs={12}
                sm={6}
                md={4}
                lg={4}
              >
                {product.title}
              </Grid>
            ))}
          </Grid>
        </StyledProductsContainer>
      </StyledMainBox>
    </div>
  );
}
