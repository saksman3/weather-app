import React from 'react';
import Titles from './components/Titles';
import SearchForm from './components/search-form';
import WeatherDetails from './components/Weather-details';

const API_KEY = 'e4bffc6aa697aadd9c2877e342c9acf6';      
class App extends React.Component{
  state = {
    weatherData:{
           temp:undefined,
           humidity:undefined,
           pressure:undefined
    },
    city:undefined,
    country:undefined,
    description:undefined,
    

  }
  getWeather = async (e)=>{
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    if(city && country){
      console.log("works");
      const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
      const data = await api_call.json();
      console.log(data);
      this.setState(()=>{
       return {
        weatherData:data.main,
        city:data.name,
        country:data.sys.country,
        description:data.weather[0].description,
        error:"",
        
       }
      });
    }else{
      this.setState(()=>{
        return {
          error:"Please enter both City and Country."
        }
      });
    }
   
  }
  render(){
    return (
        <div>
            <div className="wrapper">
               <div className="main">
                  <div className="container">
                     <div className="row">
                        <div className="col-xs-5 title-container">
                            <Titles/>
                        </div>
                        <div className="col-xs-7 form-container box">
                          <SearchForm search={this.getWeather}/>
                          <WeatherDetails data = {this.state.weatherData}
                                city={this.state.city}
                                country={this.state.country}
                                description={this.state.description}
                                error={this.state.error}
                          />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
        </div>



     );
  }
}
export default App;