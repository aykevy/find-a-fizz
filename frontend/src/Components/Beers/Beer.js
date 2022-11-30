import React from "react"
import { Link } from "react-router-dom";
import { Card, CardImg, CardText, CardTitle,CardBody } from "reactstrap";
import NewReview from "../Reviews/NewReview";
import Reviews from "../Reviews/Reviews";
import './Beer.css'
import BrewerySlider from "../Carousels/BrewerySlider";


export default function Beer({selectedBeer,postReview,userId,favorites,addFavorite,remFavorite}){
    let isFavorite = favorites.filter(function (favorite){return selectedBeer.id === favorite.beerId});
    
    function toggleUserFavorite(item,type){
       if(isFavorite[0]){
            remFavorite(isFavorite[0].id,type);
       }else{
            addFavorite(item.id,userId,type);
       }
    }

    
    return(
        <>
        <div className="selected--beer">
        <img className= 'user--favorite--brewery' src = {isFavorite[0] ? '/assests/favorites/Favorited.png' :'/assests/favorites/NoFavorite.png'} alt='favorite thumbs up'
                onClick ={() => toggleUserFavorite(selectedBeer,'beer')}                />
                <Link to='/beers/' style={{color: 'black'}}>
                    <Card className="selected--image--beer">
                        <CardImg top src = {selectedBeer.imageUrl}/>
                    </Card>
                </Link>
        <div className="selected--info">
        <Card>
        <CardBody className="selected--nameDesc">
                <CardTitle className = 'selected--name--beer'>{selectedBeer.name}</CardTitle>
                <CardText className = 'selected--desc--beer'>{selectedBeer.description}</CardText>
        </CardBody>
        </Card>
        <Card>
        <CardBody className="selected--abvType">
                <h5>Additional Information:</h5>
                <CardTitle className = 'selected--abv'>{selectedBeer.abvPercent}% ABV</CardTitle>
                <CardText className = 'selected--type'>{selectedBeer.type}</CardText>
        </CardBody>
        </Card>
        </div>
        <div className="selected--reviewTable">
        <Card>
        <CardBody>
                <CardTitle className = 'selected--review'>
                    <Reviews type={"beer"} id={selectedBeer.id}/>
                    <NewReview postReview={postReview} id={selectedBeer.id} userId={userId} type='beer'/>
                </CardTitle>
        </CardBody>
        </Card>
        </div>
        </div>
        <div className="breweries--found">
        <Card>
        <CardBody className="found--brews">
                <BrewerySlider beerId={selectedBeer.id}/>
        </CardBody>
        </Card>
        </div>
        </>  
    )
}