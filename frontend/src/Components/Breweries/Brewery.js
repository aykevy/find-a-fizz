import React from "react"
import { Link } from "react-router-dom";
import { Card, CardImg, CardText, CardTitle, CardBody } from "reactstrap";
import Reviews from "../Reviews/Reviews";
import Maps from "../Maps/Maps";
import NewReview from "../Reviews/NewReview";
import './Brewery.css'
import BeerSlider from "../Carousels/BeerSlider"
import ContactTypes from "../Social/ContactTypes";


export default function Brewery({selectedBrewery, postReview, userId, userLocation, favorites, addFavorite, remFavorite, getBeer}) {
    
    function toggleUserFavorite(item,type) {
        if (isFavorite[0]) {
             remFavorite(isFavorite[0].id,type);
        }
        else {
             addFavorite(item.id,userId,type);
        }
     }

    function setBreweryImage(type) {
        switch(type) {
            case 'closed': return '/assets/breweries/Closed.png'
            case 'taproom': return '/assets/breweries/Taproom.png'
            case 'regional': return '/assets/breweries/Regional.png'
            case 'micro': return '/assets/breweries/Micro.png'
            case 'contract': return '/assets/breweries/Contract.png'
            case 'brewpub': return '/assets/breweries/Brewpub.png'
            case 'proprietor': return '/assets/breweries/Proprietor.png'
            case 'bar': return '/assets/breweries/Bar.png'    
            case 'nano':  return '/assets/breweries/Nano.png'    
            case 'planning': return '/assets/breweries/InPlanning.png'
            case 'large': return '/assets/breweries/Large.png'
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
    
    let isFavorite = favorites.filter(function (favorite) {return selectedBrewery.id === favorite.breweryId});
      
    return (
        <>
            <div className="selected--brewery">
                <img className= 'user--favorite--brewery' src = {isFavorite[0] ? '/assets/favorites/Favorited.png' :'/assets/favorites/NoFavorite.png'} alt='favorite thumbs up'
                onClick={ () => toggleUserFavorite(selectedBrewery,'brewery')}/>

                <div className="brew--main">
                    <Link to='/breweries/' style={{color: 'black'}}>
                        <Card className="selected--image--brew">
                            <CardImg top className='brew--image--main' src={setBreweryImage(selectedBrewery.breweryType)} alt = {selectedBrewery.name} />
                        </Card>
                    </Link>
                </div>

                <div className="brewery--info">
                    <Card className="selected--nameDesc">
                        <CardBody>
                            <CardTitle className = 'selected--name--brew'>{selectedBrewery.name}</CardTitle>
                            <CardText className = 'selected--desc--brew'>{selectedBrewery.street +", "+ selectedBrewery.city +", " + selectedBrewery.state}</CardText>
                        </CardBody>
                    </Card>

                    <ContactTypes className='brew--contacts' phone={formatPhoneNumber(selectedBrewery.phone)} website={selectedBrewery.websiteUrl} name={selectedBrewery.name} location={selectedBrewery.city +', '+ selectedBrewery.state}/>
                    
                    <Card className = 'selected--card--desc--brew'>
                        <h5>Contact Us:</h5>
                        <CardBody>
                            {(selectedBrewery.websiteUrl !== (undefined || '' || null) || selectedBrewery.phone !== undefined) && <CardText > Contact {selectedBrewery.name} at:</CardText>}
                            {selectedBrewery.websiteUrl !== (undefined || '' || null) && <CardText>Website:  <span>{selectedBrewery.websiteUrl}</span></CardText>}
                            {selectedBrewery.phone !== undefined  && <CardText> Contact Phone: {formatPhoneNumber(selectedBrewery.phone)}</CardText>}
                        </CardBody>
                    </Card>
                </div>

                <Maps className='brewery--map' lat={selectedBrewery.latitude} lng ={selectedBrewery.longitude} userLocation={userLocation}/>
            </div>

            <Card className="beer--list--brews">
                <CardBody>
                    <BeerSlider breweryId={selectedBrewery.id} getBeer={getBeer}/>
                </CardBody>
            </Card>

            <div className="brewery--reviews">
                <Card className = 'selected--review--brew'>
                    <CardBody>
                        <CardTitle>
                            <Reviews type={"brewery"} id={selectedBrewery.id}/>
                            <NewReview postReview={postReview} id={selectedBrewery.id} userId={userId} type='brewery'/>
                        </CardTitle>
                    </CardBody>
                </Card>
            </div> 
        </>    
    )
}