import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import { Map, Marker, NavigationControl, GeolocateControl, FullscreenControl, Popup } from "react-map-gl";
import './maps.css'
import 'mapbox-gl/dist/mapbox-gl.css'


function Maps(props){
  
  const [lng,setLng] = useState(props.lng);
  const [lat,setLat] = useState(props.lat);
  const [popUp,setPopup] = useState(null)

  function formatPhoneNumber(phoneNumberString) {
    var cleaned = ('' + phoneNumberString).replace(/\D/g, '');
    var match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      var intlCode = (match[1] ? '+1 ' : '');
      return [intlCode, '(', match[2], ') ', match[3], '-', match[4]].join('');
    }
    return '';
}

  function validateLocationData(brewery){
    const valid = (brewery.latitude > -90) && (brewery.latitude < 90) && (brewery.longitude < 180) && (brewery.longitude > -180) && (brewery.latitude !== null) && (brewery.longitude !== null)
    return valid
  }

  function closeToUser(brewery){
    const closeLat = Math.abs(Math.abs(brewery.latitude) - Math.abs(props.userLocation.latitude)) <1
    const closeLong = Math.abs(Math.abs(brewery.longitude) - Math.abs(props.userLocation.longitude)) <1
    return (closeLat && closeLong)
  }


  function handleClick(event,brewery){
    event.originalEvent.stopPropagation();
    setPopup(brewery);
    console.log(brewery)
  }

  const mapToken = "pk.eyJ1IjoibG9sdmFsaWQiLCJhIjoiY2xhbzd2dGtiMDk1cDN1cGJzMGNtd3BzZiJ9.uxKaXVdPSP38OD7J4TA8XQ"

  if(props.fromHome){

    const allMarkers = props.breweries.map( brewery =>{

      if( closeToUser(brewery) && validateLocationData(brewery)){
       return (
         <Marker key={brewery.id} longitude={brewery.longitude} latitude={brewery.latitude} 
                 onClick= {(event) => handleClick(event,brewery)}/>
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
      <Marker longitude={props.userLocation.longitude} latitude={props.userLocation.latitude}>
              <img className='maps--user' src={'/assests/youMarker.png'}/>
      </Marker>
      {allMarkers}
      {popUp && 
        <Popup anchor='top' longitude={popUp.longitude} latitude={popUp.latitude} closeButton={true} onOpen={console.log('tried to open?')} onClose={() => setPopup(null)}>
        <Link to={'/brewery/'+popUp.id}>
        <h5 onClick={() => props.getBrewery(popUp.id)}>{popUp.name}</h5>
        </Link>
        {popUp.phone && <p>Phone: {formatPhoneNumber(popUp.phone)}</p>}
        <p>Brewery type: {popUp.breweryType}</p>
        </Popup>}
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
      <Marker longitude={props.userLocation.longitude} latitude={props.userLocation.latitude}>
              <img className='maps--user' src={'/assests/youMarker.png'}/>
      </Marker>
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
