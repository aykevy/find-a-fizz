import { Link } from "react-router-dom";
import { Card, CardImg, CardTitle, Button } from "reactstrap";

export default function UserData(props){

    function getItem(itemId,type){
    
        let filter = [];
        if (type === 'beer')   
           filter = props.beers.filter(function (beer){return beer.id === itemId});
        if (type === 'brewery')
           filter = props.breweries.filter(function (brewery){return brewery.id === itemId});
       if (filter[0] !== undefined)
           return filter[0]
       }
   
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
    
function renderSelection(){    
    switch(props.type){

    case 'BEER_FAVORITES':
        return(
        props.favorites.beerFavorites.map(( favorite ) => {
  
            let currentBeer = getItem(favorite.beerId,'beer');
          
            return( 
                <div className="accounts--selected--beerFav">
                <Card className='accounts--selected--image' onClick={() => props.getBeer(currentBeer.id)}>
                    <CardTitle className="accounts--selected--titles">
                    {currentBeer.name}
                    </CardTitle>
            
                    <Link to={'/beer/'+currentBeer.id}>
                        <CardImg top src = {currentBeer.imageUrl} alt = {currentBeer.name} />
                    </Link>
                </Card>
                </div>
            )}))

    case 'BREWERY_REVIEWS':
        return(
        props.userReviews.breweryReviews.map( review =>{
            let currentBrewery = getItem(review.breweryId,'brewery');
            return(
                <Card key={review.id}className='account--user--reviews'>
                    <CardTitle>
                        <h5> 
                        {currentBrewery.name}
                        </h5> 
                    </CardTitle>
        
                    <div>
                        <p>Post ID: {review.id} </p>
                        <p>Your Review: {review.review}</p>
                        <p>Your Rating: {review.rating}</p>
                        <p>Posted at: {review.createdAt}</p>
                    
                    </div>
                
                    <Card className='accounts--selected--image' onClick={() => props.getBrewery(currentBrewery.id)}>
                        <Link to={'/brewery/'+ currentBrewery.id}>
                        <CardImg top src = {setBreweryImage(currentBrewery.breweryType)} alt = {currentBrewery.name} />
                        </Link>
                    </Card>
            
                    <Button className="accounts--selected--delete" onClick={()=>props.deleteUserReview(review,'brewery')}> Delete Post </Button>
                </Card>
                )}))

    case 'BEER_REVIEWS':
        return(
        props.userReviews.beerReviews.map( review =>{
            let currentBeer = getItem(review.beerId,'beer');
            return(
            <Card key ={review.id} className='account--user--reviews'>
                <CardTitle>
                    <h5> 
                  {currentBeer.name}
                    </h5> 
                </CardTitle>
        
                <div>
                    <h5>Post ID: {review.id} </h5>
                    <p>Your Review: {review.review}</p>
                    <p>Your Rating: {review.rating}</p>
                    <p>Posted at: {review.createdAt}</p> 
                </div>
                
                <Card className='accounts--selected--image' onClick={() => props.getBeer(currentBeer.id)}>
                     <Link to={'/beer/'+currentBeer.id}>
                    <CardImg top src = {currentBeer.imageUrl} alt = {currentBeer.name} />
                    </Link>
                </Card>
               
                <Button className ='accounts--selected--delete'onClick={()=>props.deleteUserReview(review,'beer')}> Delete Post </Button>
            </Card>
        )}))

    case 'BREWERY_FAVORITES':  
        return(<>
                {props.favorites.breweryFavorites.map(( favorite ) => {
                let currentBrewery = getItem(favorite.breweryId,'brewery');
                    return(        
                    <div>
                        <Card className="account--user--breweryFavs">
                        <CardTitle>
                        {currentBrewery.name}
                        </CardTitle>
                        <Card className='accounts--selected--image' onClick={() => props.getBrewery(currentBrewery.id)}>
                            <Link to={'/brewery/'+ currentBrewery.id}>
                                <CardImg top src = {setBreweryImage(currentBrewery.breweryType)} alt = {currentBrewery.name} />
                            </Link>
                        </Card>
                        </Card>
                    </div>
                   
        )})}</>)

    default:
        return <></>    
}}

return (
    renderSelection()
)

}