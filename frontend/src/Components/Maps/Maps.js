import React, { Component, useState } from "react";
import { Map, Marker, NavigationControl, GeolocateControl, FullscreenControl, Popup } from "react-map-gl";
import 'mapbox-gl/dist/mapbox-gl.css'
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { getBrewery } from "../../Redux/actionCreators";


function Maps(props){
  
  const [lng,setLng] = useState(props.lng);
  const [lat,setLat] = useState(props.lat);

  function validateLocationData(brewery){
    const valid = (brewery.latitude > -90) && (brewery.latitude < 90) && (brewery.longitude < 180) && (brewery.longitude > -180) && (brewery.latitude !== null) && (brewery.longitude !== null)
    return valid
  }

  function closeToUser(brewery){
    const closeLat = Math.abs(Math.abs(brewery.latitude) - Math.abs(props.userLocation.latitude)) <1
    const closeLong = Math.abs(Math.abs(brewery.longitude) - Math.abs(props.userLocation.longitude)) <1
    return (closeLat && closeLong)
  }


  const mapToken = "pk.eyJ1IjoibG9sdmFsaWQiLCJhIjoiY2xhbzd2dGtiMDk1cDN1cGJzMGNtd3BzZiJ9.uxKaXVdPSP38OD7J4TA8XQ"

  if(props.fromHome){

    const allMarkers = props.breweries.map( brewery =>{
      if( closeToUser(brewery) && validateLocationData(brewery)){
       return (
       <Marker key={brewery.id} longitude={brewery.longitude} latitude={brewery.latitude}/>
       )
      }})


  return (
   <div>  
     <Map
     mapboxAccessToken= {mapToken}
     style={{
       width: '90vw',
       height: '280px',
       borderRadius: '15px',
       border: '2px solid black'
       
     }}

     initialViewState={{
       longitude: props.userLocation.longitude,
       latitude: props.userLocation.latitude,
       zoom:6
  
     }}
     mapStyle='mapbox://styles/mapbox/streets-v12'
     >
 
      {allMarkers}
     <FullscreenControl/>
     <NavigationControl position="bottom-left"/>
     <GeolocateControl/>
     </Map>
   </div>

  )} else if( lat && lng !== undefined)
   return (
    <div>
      <Map 
      mapboxAccessToken= {mapToken}

      style={{
        width: '280px',
        height: '280px',
        borderRadius: '15px',
        border: '2px solid black'
        
      }}

      initialViewState={{
        longitude: props.userLocation.longitude,
        latitude: props.userLocation.latitude,
        zoom:5
      }}
      mapStyle='mapbox://styles/mapbox/streets-v12'
      >
      <Marker longitude={lng} latitude={lat}/>
      <FullscreenControl/>
      <NavigationControl position="bottom-left"/>
      <GeolocateControl/>
      </Map>
    </div>
  );

   else {
    return <></>
  }

} 



export default Maps;
