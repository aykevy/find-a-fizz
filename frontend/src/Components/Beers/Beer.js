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
                    <Card className="selected--image">
                        <CardImg top src = {selectedBeer.imageUrl}/>
                    </Card>
                </Link>
  
        <Card>
        <CardBody className="selected--nameDesc">
                <CardTitle className = 'selected--name'>{selectedBeer.name}</CardTitle>
                <CardText className = 'selected--desc'>{selectedBeer.description}</CardText>
        </CardBody>
        </Card>
        <Card>
        <CardBody>
                <CardTitle className = 'selected--abv'>{selectedBeer.abvPercent}</CardTitle>
                <CardText className = 'selected--type'>{selectedBeer.type}</CardText>
        </CardBody>
        </Card>
        <Card>
        <CardBody>
                <CardTitle className = 'selected--review'>
                    <Reviews type={"beer"} id={selectedBeer.id}/>
                    <NewReview postReview={postReview} id={selectedBeer.id} userId={userId} type='beer'/>
                </CardTitle>
        </CardBody>
        </Card>
        </div>
        <Card>
        <CardBody>
                <BrewerySlider beerId={selectedBeer.id}/>
        </CardBody>
        </Card>
        </>    
    )
}