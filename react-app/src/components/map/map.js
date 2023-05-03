import React, { useState } from "react";
import GoogleMapReact from 'google-map-react'
import './map.css'

//api-key
// AIzaSyCueuRnq4kS5iAVacaE-rBkpL8eVqw37Tg
const LocationPin = ({ text }) => (
    <div className="pin">
      <p className="pin-text">{text}</p>
    </div>
  )
  

const Map = ({ location, zoomLevel }) => (
    <div className="map">
      <h2 className="map-h2">Airport</h2>

      <div className="google-map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCueuRnq4kS5iAVacaE-rBkpL8eVqw37Tg' }}
          center={location}
          defaultZoom={zoomLevel}
        >
          <LocationPin

          />
        </GoogleMapReact>
      </div>
    </div>
  )
  export default Map
