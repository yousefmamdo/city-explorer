import axios from 'axios';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      latitude:'',
      longitude:'',
      display_name:'',
      mapFlag:false,
      displayErr:false
    }
  }
  
  getLocationData = async (event) => {
    event.preventDefault();
    const cityName = event.target.cityName.value;
    const myKey = 'pk.a47d4213dbce9a84687e69e822dfacad';
    const URL = `https://eu1.locationiq.com/v1/search.php?key=${myKey}&q=${cityName}&format=json`;
    try 
    {
      let resResult = await axios.get(URL);
      this.setState({
        latitude:resResult.data[0].lat,
        longitude:resResult.data[0].lon,
        display_name:resResult.data[0].display_name,
        mapFlag:true
      })
    }
    catch 
    {
      console.log('Eror not fond');
      this.setState({
        displayErr:true
      })
    }

  }
  
  render(){
    return(
      <div class="p-3 mb-2 bg-light text-dark">
      <h1>Location App</h1>
      <form onSubmit={this.getLocationData}  class="form-inline">
   
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Enter city name</label >
    <input type="text" name="cityName" class="form-control" id="exampleInputEmail1" placeholder="Enter city name"/>
   
  </div>
 
  <button type="submit" class="btn btn-primary">Exploler</button>
</form>
      {/* render the data */}
      {this.state.mapFlag &&  <p>Display name : {this.state.display_name}</p>}
      {this.state.mapFlag &&  <p>latitude : {this.state.latitude}</p>}
      {this.state.mapFlag &&  <p>longitude : {this.state.longitude}</p>}

      {this.state.mapFlag && 
      
      <img src={`https://maps.locationiq.com/v3/staticmap?key=pk.43fed3791d35ddb76aa14f749c6d3080&center=${this.state.latitude},${this.state.longitude}`} class="img-thumbnail" alt='map' />}

      {this.state.displayErr && <p>Sorry Error</p>}
      

      </div>
    )
  }
}

export default App;