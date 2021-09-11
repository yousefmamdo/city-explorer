import axios from 'axios';
import React from 'react';
import Weather from './components/Weather';
import Movie from './components/Movie';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      latitude:'',
      longitude:'',
      display_name:'',
      weatherData: [],
      movieData: [],
      mapFlag:false,
      displayErr:false
    }
  }
  
  getLocationData = async (event) => {
    event.preventDefault();
    const cityName = event.target.cityName.value;
    const myKey = 'pk.8897249cb61dcbb12b8e61d28cf54442';
    const URL = `https://eu1.locationiq.com/v1/search.php?key=${myKey}&q=${cityName}&format=json`;
    const weatherURL = `https://yousef-catiy-exploer.herokuapp.com/weather/?city=${cityName}`;
    const moviesURL = `https://yousef-catiy-exploer.herokuapp.com/movies?query=${cityName}`;

    try 
    {
      let resResult = await axios.get(URL);
      let newWeather = await axios.get(weatherURL);
      let newMovie = await axios.get(moviesURL);
      this.setState({
        latitude:resResult.data[0].lat,
        longitude:resResult.data[0].lon,
        display_name:resResult.data[0].display_name,
        weatherData: newWeather.data,
        movieData: newMovie.data,
        mapFlag:true
      })
      console.log(this.movieData);
    }
    catch 
    {
      console.log('Eror not fond');
      this.setState({
        displayErr:true
      })
    }

  }

  // getMovieData = async () => {

  //   const url = `https://yousef-catiy-exploer.herokuapp.com/movies?query=${this.state.cityName}`;
  //   axios
  //     .get(url)
  //     .then(result => {
  //       this.setState({
  //         movieData: result.data,
  //       })
  //       console.log(this.state.movieData);
  //     })
  //     .catch(err => console.log(err))

  // }
  // getWeatherData = async () => {

  //   const url = `https://yousef-catiy-exploer.herokuapp.com//weather/?city=${this.state.cityName}`;
  //   axios
  //     .get(url)
  //     .then(result => {
  //       this.setState({
  //         weatherData: result.data,
  //       })
  //            })
  //     .catch(err => console.log(err))

  // }
  render(){
    return(
      <>
      <h1>Location App</h1>
      <form onSubmit={this.getLocationData}  class="form-inline">
   
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Enter city name</label >
    <input type="text" name="cityName" class="form-control" id="exampleInputEmail1" placeholder="Enter city name"/>
   
  </div>
 
  <button type="submit" class="btn btn-primary">Exploler</button>
</form>
   
      {this.state.mapFlag &&  <p>Display name : {this.state.display_name}</p>}
      {this.state.mapFlag &&  <p>latitude : {this.state.latitude}</p>}
      {this.state.mapFlag &&  <p>longitude : {this.state.longitude}</p>}

      {this.state.mapFlag && 
      
      <img src={`https://maps.locationiq.com/v3/staticmap?key=pk.43fed3791d35ddb76aa14f749c6d3080&center=${this.state.latitude},${this.state.longitude}`} class="img-thumbnail" alt='map' />}

      {this.state.displayErr && <p>Sorry Error</p>}
      
      <Weather
            weatherData={this.state.weatherData}
          

          />
      
            
              <Movie
               movieData={this.state.movieData}
              />

        

      </>
    )
  }
}

export default App;