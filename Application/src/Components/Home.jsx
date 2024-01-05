import React, { useState } from "react";
import {createTheme,ThemeProvider,AppBar,Toolbar,Typography,Button,Container,TextField,Grid,Card,CardContent,IconButton, CardMedia} from "@mui/material";
import Autocomplete from '@mui/material/Autocomplete';
import "./Home.css";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import AppIcon from "@mui/icons-material/Android";
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



const topPlacesInIndia = ['Mumbai','Delhi', 'Bangalore', 'Hyderabad', 'Chennai', 'Coimbatore','Kolkata', 'Jaipur', 'Ahmedabad','Pune','Lucknow','Chandigarh','Bhopal','Indore','Goa','Amritsar','Shimla','Agra','Varanasi','Mysuru','Kochi',
];
const settings = {
  dots: false, arrows: false, infinite: true, speed: 500, slidesToShow: 1, slidesToScroll: 1,
};
  const images = [
    "https://images.pexels.com/photos/1878359/pexels-photo-1878359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/981588/pexels-photo-981588.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/4062545/pexels-photo-4062545.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  ];
  const cards = [
    {
      id: 1,
      image: "https://images.pexels.com/photos/3095621/pexels-photo-3095621.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Discover incredible offers on bus tickets! Plan your journey with us and seize amazing deals.",
      content: "Exclusive Discounts",

    },
    {
      id: 2,
      image: "https://images.pexels.com/photos/6161473/pexels-photo-6161473.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Experience the unparalleled comfort of our buses and indulge in a stress-free travel adventure.",
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

  const HomePage = () =>{
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');
  const handleSourceChange = (event, newValue) => {
    setSource(newValue);
  };
  
  const handleDestinationChange = (event, newValue) => {
    setDestination(newValue);
  };
  
  const handleDateChange = (event) => {
    setDate(event.target.value);
  };
  
  const handleSearch = () => {
    // Perform search using source, destination, and date
    console.log('Source:', source);
    console.log('Destination:', destination);
    console.log('Date:', date);
  };
  return (
    <ThemeProvider theme={theme}>
      <div class="className">
        <AppBar position="static" className="appBar">
          <Toolbar>
            <Typography variant="h4" component="div" sx={{ flexGrow: 1}}>
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
        <Container className="contentContainer" maxWidth="md">
          <div className="searchContainer">


          <Grid container spacing={3} alignItems="center">
      <Grid item xs={12} sm={3}>
        <Autocomplete
          id="places-in-india"
          options={topPlacesInIndia}
          getOptionLabel={(option) => option}
          onChange={handleSourceChange}
          renderInput={(params) => <TextField {...params} label="From" variant="outlined" />}
        />
      </Grid>
      <Grid item xs={12} sm={3}>
        <Autocomplete
          id="places-in-india"
          options={topPlacesInIndia}
          getOptionLabel={(option) => option}
          onChange={handleDestinationChange}
          renderInput={(params) => <TextField {...params} label="To" variant="outlined" />}
        />
      </Grid>
      <Grid item xs={12} sm={3}>
        <TextField
          type="date"
          label="Date"
          fullWidth
          variant="outlined"
          InputLabelProps={{ shrink: true }}
          onChange={handleDateChange}
        />
      </Grid>
      <Grid item xs={12} sm={3} className="searchButton">
        <Button
          variant="contained"
          color="primary"
          fullWidth
          style={{ height: "56px", fontSize: "1.2rem" }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Grid>
    </Grid>

      <div className="carousel-container">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="carousel-slide">
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>

      </div>
      <div>
      <Grid container spacing={3}>
      {cards.map((card) => (
        <Grid key={card.id} item xs={4}>
          <Card>
            <CardMedia
              component="img"
              alt={`Card ${card.id}`}
              height="140"
              image={card.image}
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

    <div style={{ textAlign: "center", padding: "20px", backgroundColor: "#e1bee7" }}>
      <Typography variant="h6" color="black">
        Trippy
      </Typography>
      <Grid container justifyContent="center" alignItems="center" spacing={2} mt={2}>
        <Grid item>
          <IconButton color="inherit" href="https://www.facebook.com/">
            <FacebookIcon />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton color="inherit" href="https://www.instagram.com/">
            <InstagramIcon />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton color="inherit" href="mailto:info@trippy.com">
            <EmailIcon />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton color="inherit" href="#your-other-app-link">
            <AppIcon />
          </IconButton>
        </Grid>
      </Grid>
    </div>
      </div>
        </Container>
      </div>
    </ThemeProvider>
  );
};

export default HomePage;
