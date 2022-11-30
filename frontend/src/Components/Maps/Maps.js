import React, {useState } from "react";
import { Link } from "react-router-dom";
import { Map, Marker, NavigationControl, GeolocateControl, FullscreenControl, Popup } from "react-map-gl";
import './maps.css'
import 'mapbox-gl/dist/mapbox-gl.css'
import ContactTypes from "../Social/ContactTypes";


function Maps(props){
  
  const lng = props.lng;
  const lat = props.lat;
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
  }

  const mapToken = "pk.eyJ1IjoibG9sdmFsaWQiLCJhIjoiY2xhbzd2dGtiMDk1cDN1cGJzMGNtd3BzZiJ9.uxKaXVdPSP38OD7J4TA8XQ"

  if(props.fromHome){

    const allMarkers = props.breweries.map( brewery =>{

      if( closeToUser(brewery) && validateLocationData(brewery)){
       return (
         <Marker key={brewery.id} longitude={brewery.longitude} latitude={brewery.latitude} 
                 onClick= {(event) => handleClick(event,brewery)}/>
       )
      }else{return <></>}
    })


  return (
   <div className="map--set">  
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
              <img className='maps--user' src={'/assests/youMarker.png'} alt ={'user icon'}/>
      </Marker>
      {allMarkers}
      {popUp && 
        <div className="maps--markers">

          <Popup className = 'maps--marker' anchor='top' longitude={popUp.longitude} latitude={popUp.latitude} closeButton={true} onClose={() => setPopup(null)}>

            <Link to={'/brewery/'+popUp.id}>
                 <h5 onClick={() => props.getBrewery(popUp.id)}>{popUp.name}</h5>
            </Link>
            {popUp.phone && <p>Phone: {formatPhoneNumber(popUp.phone)}</p>}
            <p>Brewery type: {popUp.breweryType}</p>
            <ContactTypes className ='maps--popup--social' phone={formatPhoneNumber(popUp.phone)} website={popUp.website} location={popUp.city +', ' + popUp.state} name={popUp.name}/>
          </Popup>
        </div>}
     <FullscreenControl/>
     <NavigationControl position="bottom-left"/>
     <GeolocateControl/>
     </Map>
   </div>

  )} else if( lat && lng !== undefined)
   return (
    <div className="map--unset">
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
              <img className='maps--user' src={'/assests/youMarker.png'} alt ={'user icon'}/>
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
