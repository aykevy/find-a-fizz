import React from "react"
import { Link } from "react-router-dom";
import { Card, CardImg, CardTitle,CardBody } from "reactstrap";
import './Beer.css'


function Beers(props){

    function toggleIsFavorite(){
        
    }

    /**
     * 
     * @param {INT} id - Beer ID
     * grabs single beer and sends to Main to route to single page
    */
    function onBeerSelect(id){
        props.getBeer(id)
    }
    /*Renders a list of beers in card form*/
    let url = ''
    let beers = props.beers;
        if(beers){
        return(
        <div className="beer--list">
            {beers.map( (beer) => { 
               let isFavorite = props.favorites.beerFavorites.filter(function (favorite){return beer.id === favorite.beerId});
               url = '/beer/' + beer.id
                return(
                //{Setting Link to Route to single beer page I.E. url.com/beer/1 */}
                <> 
                    <div className = 'beer--card--set' key = {beer.id}>  
                        <img className= 'user--favorite--beer' src = {isFavorite[0] ? './assests/favorites/Favorited.png' :'./assests/favorites/NoFavorite.png'} alt='favorite thumbs up'/> 
                        <Link to={url} style={{color:"black"}}>          
                            <Card className="beer--card" onClick ={ (e) => onBeerSelect(beer.id)}>
                                <CardImg top src = {beer.imageUrl} alt = {beer.name} />
                                <CardBody>
                                    <CardTitle className = 'beer--card--name'>{beer.name}</CardTitle>
                                </CardBody>
                            </Card>
                    </Link>
                    </div>
                </>
                )})    
            }  
        </div>
        )
    }
    else{
        return(
            <></>
        )
    }
}

 export default Beers;
