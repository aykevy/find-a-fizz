import React from "react";
import './ContactTypes.css'

export default function ContactTypes(props){

return(
<div className="brewery--social--list">
    {/** Social Buttons - Website/Facebook */}
    {props.website && 
    <a href={props.website}>
    <img className = 'brewery--social--buttons'  src='/assests/social/socialButton1.png' alt='facebook-logo'/>
    </a>}
    {/** Social Buttons - Phone */}
    {props.phone && 
    <a href={`tel:+1-${props.phone}`}>
    <img className = 'brewery--social--buttons' src='/assests/social/socialButton2.png' alt='phone-logo' />
    </a>}
    
    {/** Social Buttons - Twitter */}
    <a href={`https://www.twitter.com/intent/tweet?text={Going out to ${props.name} in ${props.location},who wants to meet up? #find-a-fizz}`}>
    <img className = 'brewery--social--buttons' src='/assests/social/socialButton4.png' alt='twitter-logo'/>
    </a>
</div>

)}