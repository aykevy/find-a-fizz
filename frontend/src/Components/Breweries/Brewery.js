import React from "react"
import { Link } from "react-router-dom";
import { Card, CardImg, CardText, CardTitle,CardBody } from "reactstrap";
import Reviews from "../Reviews/Reviews";
import Maps from "../Maps/Maps";
import NewReview from "../Reviews/NewReview";
import './Brewery.css'
import BeerSlider from "../Carousels/BeerSlider"


export default function Brewery({selectedBrewery,postReview,userId,userLocation}){
   

    function setBreweryImage(type){
        switch(type){
            case 'closed': return '/assests/breweries/Closed.png'
            case 'taproom': return '/assests/breweries/Taproom.png'
            case 'regional': return '/assests/breweries/Regional.png'
            case 'micro': return '/assests/breweries/Micro.png'
            case 'contract': return '/assests/breweries/Contract.png'
            case 'brewpub': return '/assests/breweries/Brewpub.png'
            case 'proprietor': return '/assests/breweries/Proprietor.png'
            case 'bar': return '/assests/breweries/Bar.png'    
            case 'nano':  return '/assests/breweries/Nano.png'    
            case 'planning': return '/assests/breweries/InPlanning.png'
            case 'large': return '/assests/breweries/Large.png'
            default: return ''
        }

    }

    /**
     * 
     * @param {INT/STRING} phoneNumberString 
     * @returns Formated String based on REGeX to split and make a correct phone string display
     */
    function formatPhoneNumber(phoneNumberString) {
        var cleaned = ('' + phoneNumberString).replace(/\D/g, '');
        var match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);
        if (match) {
          var intlCode = (match[1] ? '+1 ' : '');
          return [intlCode, '(', match[2], ') ', match[3], '-', match[4]].join('');
        }
        return '';
    }
      console.log(selectedBrewery.websiteUrl)
    return(
        <>
        <div className="selected--brewery">
        <Link to='/breweries/' style={{color: 'black'}}>
        <Card className="selected--image">
             <CardImg top className='brew--image' src={setBreweryImage(selectedBrewery.breweryType)} alt = {selectedBrewery.name} />
        </Card>
        </Link>
        <Card className="selected--nameDesc">
        <CardBody>
                <CardTitle className = 'selected--name'>{selectedBrewery.name}</CardTitle>
                <CardText className = 'selected--desc'>{selectedBrewery.street +", "+ selectedBrewery.city +", " + selectedBrewery.state}</CardText>
        </CardBody>
        </Card>
        <Card className = 'selected--card--desc'>
        <CardBody>
            {(selectedBrewery.websiteUrl !== (undefined || '' || null) || selectedBrewery.phone !== undefined) && <CardText > Contact {selectedBrewery.name} at:</CardText>}
            {selectedBrewery.websiteUrl !== (undefined || '' || null) && <CardText>Website:  <span>{selectedBrewery.websiteUrl}</span></CardText>}
            {selectedBrewery.phone !== undefined  && <CardText> Contact Phone: {formatPhoneNumber(selectedBrewery.phone)}</CardText>}
        </CardBody>
        </Card>

        <Card>
        <CardBody>
                <BeerSlider breweryId={selectedBrewery.id}/>
        </CardBody>
        </Card>
        
        <div class="break"></div> 
        <Card className = 'selected--review'>
        <CardBody>
                <CardTitle>
                    {/* TO DO - Move to Store - it's messing up sometimes with 400*/}
                    <Reviews type={"brewery"} id={selectedBrewery.id}/>
                    <NewReview postReview={postReview} id={selectedBrewery.id} userId={userId} type='brewery'/>
                </CardTitle>
        </CardBody>
        </Card>
        <Maps className='brewery--map' lat={selectedBrewery.latitude} lng ={selectedBrewery.longitude} userLocation={userLocation}/>
        </div>
        </>    
    )
}