import React from 'react';
import { Link } from 'react-router-dom'; // Make sure to import Link if you are using react-router-dom
import { AppBar, Button, Card, CardContent, CardMedia, Grid, ThemeProvider, Toolbar, Typography, createTheme } from '@mui/material';
import './Offers.css';

const cards = [
  {
    id: 1,
    image: "https://images.pexels.com/photos/163037/london-street-phone-cabin-163037.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Discover amazing offers on bus tickets!Plan your journey with us.",
    content: "Exclusive Discounts",

  },
  {
    id: 2,
    image: "https://images.pexels.com/photos/45923/pexels-photo-45923.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Explore the comfort of our buses and enjoy a hassle-free travel experience.",
    content: "Comfortable Rides",
  },
  {
    id: 3,
    image: "https://images.pexels.com/photos/1210622/pexels-photo-1210622.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Effortlessly book bus tickets online and track your journey with real-time updates.",
    content: "Easy Booking Process",

  },
  {
    id: 4,
    image: "https://images.pexels.com/photos/12641828/pexels-photo-12641828.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Enjoy the convenience of flexible schedules and choose the bus that fits your plan.",
    content: "Flexible Timings",
  },
  {
    id: 5,
    image: "https://images.pexels.com/photos/19438347/pexels-photo-19438347/free-photo-of-bus-on-a-road-in-autumn.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Earn rewards and discounts with our loyalty program every time you travel with us.",
    content: "Loyalty Rewards",

  },
  {
    id: 6,
    image: "https://images.pexels.com/photos/16832284/pexels-photo-16832284/free-photo-of-a-city-street-with-a-yellow-bus-and-cars.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Travel with confidence knowing that our buses are equipped with top-notch safety features.",
    content: "Safe and Secure",
  },
];
const theme = createTheme({
  palette: {
    primary: {
      main: "#9c27b0", 
    },
    secondary:{
      main: "#546e7a",
    },
  },
});

const Offers = () => {
  return (
    <ThemeProvider theme={theme}>
    <div>
      <AppBar position="static" className="appBar">
        <Toolbar>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }} style={{alignItems:"initial"}}>
            Trippy
          </Typography>
          <Button
        color="inherit"
        component={Link}
        to="/"
        style={{ height: '56px', fontSize: '0.9rem' }}
      >
        Home
      </Button>
      <Button
        color="inherit"
        component={Link}
        to="/offers"
        style={{ height: '56px', fontSize: '0.9rem' }}
      >
        Offers
      </Button>
      <Button
        color="inherit"
        component={Link}
        to="/contact"
        style={{ height: '56px', fontSize: '0.9rem' }}
      >
        Contact
      </Button>

      <Button
        color="inherit"
        component={Link}
        to="/Login"
        style={{ height: '56px', fontSize: '0.9rem' }}
      >
        Account
      </Button>
        </Toolbar>
      </AppBar>
      <div class="d">
      <Grid container spacing={2} class="gridclass">
      {cards.map((card) => (
        <Grid key={card.id} item xs={4}>
          <Card class="gridclass">
            <CardMedia
              component="img"
              alt={`Card ${card.id}`}
              height="140"
              image={card.image}
              class="customCardMedia"
            />
            <CardContent>
            <Typography variant="h6" component="div">
                {card.content}
                </Typography>
              <Typography variant="body2" color="text.secondary">
                {card.description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
      </div>
      </div>
      </ThemeProvider>
  );
};

export default Offers;
