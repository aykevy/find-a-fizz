import React from "react"
import { Link } from "react-router-dom";
import { Card, CardImg, CardTitle,CardBody } from "reactstrap";
import './Beer.css'


function Beers(props){

    function toggleUserFavorite(isFavorite,item,type){
        if(isFavorite){
             props.remFavorite(isFavorite.id,type);
        }else{
             props.addFavorite(item.id,props.userId,type);
        }
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
               let isFavorite = props.favorites.filter(function (favorite){return beer.id === favorite.beerId});
            //    console.log(' is Favorite Array: ' + isFavorite)
            //    console.log(' is beer: ' + beer.id + ' ' + beer.name)
               url = '/beer/' + beer.id
                return(
                //{Setting Link to Route to single beer page I.E. url.com/beer/1 */}
                <> 
                    <div className = 'beer--card--set' key = {beer.id}>  
                        <img className= 'user--favorite--beer' src = {isFavorite[0] ? './assests/Favorites/Favorited.png' :'./assests/Favorites/NoFavorite.png'} alt='favorite thumbs up'
                            onClick={()=> toggleUserFavorite(isFavorite[0],beer,'beer')}/> 
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
