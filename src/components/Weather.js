import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

class Weather extends React.Component {
    render() {
        return (
            <>
                {this.props.weatherData.map( (item,i) => {
                    return (
                      <>
                                <p>{item.date}</p>    
                       <p>{item.description}</p>
                        </>
                    )
                })}

              
            </>
        )
    }
}

export default Weather;