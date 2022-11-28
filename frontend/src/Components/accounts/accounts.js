
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Card, CardImg, CardTitle, Button } from "reactstrap";
import './Accounts.css'

import ExistingBreweryEmailRequest from '../Owner/ExistingBreweryEmailRequest'
import BreweryModal from '../Owner/BreweryModal'
import OwnershipTable from '../Owner/OwnershipTable'



export default function Accounts(props){
    const [showBeerReviews,setShowBeerReviews] = useState({show:false})
    const [showBreweryReviews,setShowBreweryReviews] = useState({show:false})
    const [showFavoriteBeers,setShowFavBeers] = useState({show:false})
    const [showFavoriteBreweries,setShowFavBrewerys] = useState({show:false})

    console.log(props.favorites)
    function toggleWindows(state){

        switch(state){
            case 'BEER_REVIEWS':
                setShowBeerReviews({show:!showBeerReviews.show});
                break
            case 'BEER_FAVORITES':
                setShowFavBeers({show:!showFavoriteBeers.show})
                break
            case 'BREWERY_REVIEWS':
                setShowBreweryReviews({show:!showBreweryReviews.show})
                break
            case 'BREWERY_FAVORITES':
                setShowFavBrewerys({show:!showFavoriteBreweries.show})
                break
            default:
                break    
        }
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


    function getItem(itemId,type){
    
     let filter = [];
     if (type === 'beer')   
        filter = props.beers.filter(function (beer){return beer.id === itemId});
     if (type === 'brewery')
        filter = props.breweries.filter(function (brewery){return brewery.id === itemId});
    if (filter[0] !== undefined)
        return filter[0]
    }

    if(props){
    return(
        <>
        <h1>
        Welcome back {props.user.username} please review your account details:
        </h1>
        {console.log(props.user)}
        {props.user.authorities[0].name === 'ROLE_BREWER' && <div className='account--brewery--tables'>
            <OwnershipTable userId={props.user.id}/>
        </div>}

        <h4 onClick = {() => toggleWindows('BEER_REVIEWS')}>
        <i class="fa fa-comment" aria-hidden="true"/> My Beer Reviews</h4>
        
        {showBeerReviews.show && props.userReviews.beerReviews.map( review =>{
            let currentBeer = getItem(review.beerId,'beer');
            return(
            <Card key ={review.id} className='user--reviews'>
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
                <Link to={'/beer/'+currentBeer.id}>
                <Card className='accounts--beer--image' onClick={() => props.getBeer(currentBeer.id)}>
                    <CardImg top src = {currentBeer.imageUrl} alt = {currentBeer.name} />
                </Card>
                </Link>
                <Button onClick={()=>props.deleteUserReview(review,'beer')}> Delete Post </Button>
                </Card>
        )})
            }
        <h4 onClick = {() => toggleWindows('BREWERY_REVIEWS')}>
        <i class="fa fa-comments" aria-hidden="true"/> My Brewery Reviews</h4>
        <div className=''>  
        {showBreweryReviews.show && props.userReviews.breweryReviews.map( review =>{
                  let currentBrewery = getItem(review.breweryId,'brewery');
            return(
            <Card key={review.id}className='user--reviews'>
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
               
                <Card className='accounts--beer--image' onClick={() => props.getBrewery(currentBrewery.id)}>
                   <Link to={'/brewery/'+ currentBrewery.id}>
                    <CardImg top src = {setBreweryImage(currentBrewery.breweryType)} alt = {currentBrewery.name} />
                    </Link>
                </Card>
           
                <Button onClick={()=>props.deleteUserReview(review,'brewery')}> Delete Post </Button>
                </Card>
        )})
            }
        </div>
        
        <h4 onClick = {() => toggleWindows("BEER_FAVORITES")}>  
        <i class="fa fa-diamond" aria-hidden="true"/> My Favorited Items</h4>
        {showFavoriteBeers.show && props.favorites.beerFavorites.map(( favorite ) => {
  
            let currentBeer = getItem(favorite.beerId,'beer');
          
        return( 
            <div>
            <Card>
                <CardTitle>
                {currentBeer.name}
                </CardTitle>
                <Link to={'/beer/'+currentBeer.id}>
                    <Card className='accounts--beer--image' onClick={() => props.getBeer(currentBeer.id)}>
                        <CardImg top src = {currentBeer.imageUrl} alt = {currentBeer.name} />
                    </Card>
                </Link>
            </Card>
            </div>
        )})}
    
        <h4 onClick = {() => {toggleWindows("BREWERY_FAVORITES");}}>
        <i class="fa fa-map-o" aria-hidden="true"/> My Favorited Places</h4>
        {showFavoriteBreweries.show && props.favorites.breweryFavorites.map(( favorite ) => {
                 let currentBrewery = getItem(favorite.breweryId,'brewery');
        return(        
            <div>
            <Card>
                <CardTitle>
                {currentBrewery.name}
                </CardTitle>
                <Card className='accounts--beer--image' onClick={() => props.getBrewery(currentBrewery.id)}>
                    <Link to={'/brewery/'+ currentBrewery.id}>
                        <CardImg top src = {setBreweryImage(currentBrewery.breweryType)} alt = {currentBrewery.name} />
                    </Link>
                </Card>
            </Card>
            </div>
        )})
        }
        </>
    )
    } else {
        return <></>
    }}