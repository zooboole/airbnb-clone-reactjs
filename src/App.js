import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Flat from './components/flat'

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      flats: []
    };
  }

  componentDidMount() {
    const data = [
      {
        "name": "Chamber and hall",
        "imageUrl": "http://webdevelopmentstarterkit.dev/images/chapter1/internet.png",
        "price": 50,
        "priceCurrency":"GHS",
        "lat":48.254548,
        "lng":-2.245220,
      },
      {
        "name": "Chamberand hall self-contain",
        "imageUrl": "http://webdevelopmentstarterkit.dev/images/chapter1/internet.png",
        "price": 200,
        "priceCurrency":"GHS",
        "lat":48.254548,
        "lng":-2.245220,
      },
      {
        "name": "house available at Ablekuma",
        "imageUrl": "http://webdevelopmentstarterkit.dev/images/chapter1/internet.png",
        "price": 150,
        "priceCurrency":"GHS",
        "lat":48.254548,
        "lng":-2.245220,
      },
      {
        "name": "Container for sale",
        "imageUrl": "http://webdevelopmentstarterkit.dev/images/chapter1/internet.png",
        "price": 210,
        "priceCurrency":"GHS",
        "lat":48.254548,
        "lng":-2.245220,
      },
      {
        "name": "Cool house available at Ablekuma",
        "imageUrl": "http://webdevelopmentstarterkit.dev/images/chapter1/internet.png",
        "price": 200,
        "priceCurrency":"EUR",
        "lat":48.254548,
        "lng":-2.245220,
      }
    ]
    this.setState({
      flats:data
    })
  }
  render() {
    return (
      <div className="app">
        <div className="main">
          <div className="search"></div>
          <div className="flats">
          {this.state.flats.map(flat => {
            return <Flat key={flat.name} flat={flat}/>
          })}
          </div>
        </div>
        <div className="map"></div>
      </div>
    );
  }
}

export default App;
