import React from "react"
import { Link } from "react-router-dom";
import { Card, CardImg, CardText, CardTitle,CardBody } from "reactstrap";
import Reviews from "../Reviews/Reviews";
import Maps from "../Maps/Maps";
import './Brewery.css'


export default function Brewery({selectedBrewery}){
   

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
            case 'nano':  return 'to-do'  
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
      
    return(
        <>
        <div className="selected--brewery">
        <Link to='/breweries/' style={{color: 'black'}}>
        <Card className="selected--image">
             <CardImg top className='brew--image' src={setBreweryImage(selectedBrewery.breweryType)} alt = {selectedBrewery.name} />
        </Card>
        </Link>
        <Card>
        <CardBody className="selected--nameDesc">
                <CardTitle className = 'selected--name'>{selectedBrewery.name}</CardTitle>
                <CardText className = 'selected--desc'>{selectedBrewery.street +", "+ selectedBrewery.city +", " + selectedBrewery.state}</CardText>
        </CardBody>
        </Card>
        <Card>
        <CardBody>
            {(selectedBrewery.websiteUrl !== undefined || selectedBrewery.phone !== undefined) && <CardText className = 'brew--card--desc'> Contact {selectedBrewery.name} at:</CardText>}
            {selectedBrewery.websiteUrl !== undefined && <CardText className = 'brew--card--desc'>Website:  <span>{selectedBrewery.websiteUrl}</span></CardText>}
            {selectedBrewery.phone !== undefined  && <CardText className = 'brew--card--desc'> Contact Phone: {formatPhoneNumber(selectedBrewery.phone)}</CardText>}
        </CardBody>
        </Card>
        <Card>
        <CardBody>
                <CardTitle className = 'selected--review'>
                    {/* TO DO - Move to Store - it's messing up sometimes with 400*/}
                    <Reviews type={"brewery"} id={selectedBrewery.id}/>
                </CardTitle>
        </CardBody>
        </Card>
        <Maps lat={selectedBrewery.latitude} lng ={selectedBrewery.longitude}/>
        </div>
        </>    
    )
}