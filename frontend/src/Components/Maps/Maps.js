import React, { useState } from "react";
import { Map, Marker, NavigationControl, GeolocateControl, FullscreenControl } from "react-map-gl";
import 'mapbox-gl/dist/mapbox-gl.css'

function Maps(props){
  console.log(props)
  const [lng,setLng] = useState(props.lng);
  const [lat,setLat] = useState(props.lat);
  const mapToken = "pk.eyJ1IjoibG9sdmFsaWQiLCJhIjoiY2xhbzd2dGtiMDk1cDN1cGJzMGNtd3BzZiJ9.uxKaXVdPSP38OD7J4TA8XQ"

  if( lat && lng !== undefined)
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
        longitude:lng,
        latitude:lat,
        zoom:1
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
