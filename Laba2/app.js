const express = require('express')
const hbs = require("hbs")
let app = express()
const port = 3000

app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/views/partials');

app.get("/", (req, res) => {
  res.render("main.hbs")
});

app.get("/weather/city",(req,res)=> {
   res.render(`weather`); 
});

app.get('/weather(/:city?)', async (req, res) => {

  let city = req.params.city;

  if (!city) {
    city = req.query.city;
  }
  if (!city) {
    res.render("400")
    return
  }

  let key = "384371504bdbef3bead1cf542d360c17";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;
  let response = await fetch(url);
  let weather = await response.json();

  res.render(`weather`, {city: CityName(city), weather})
});

function CityName(city) {
  switch (city) {
    case 'Zhytomyr':
      return 'Житомир';
    case 'Kyiv':
      return 'Київ';
    case 'Poltava':
      return 'Полтава';
    case 'Sumy':
      return 'Суми';
    default:
      return city;
  }
}


app.listen(port, () => {
  console.log(`Listing on ${port} port`)
});