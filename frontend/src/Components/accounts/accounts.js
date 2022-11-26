import userEvent from '@testing-library/user-event';
import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { Card, CardImg, CardText, CardTitle,CardBody } from "reactstrap";
import './accounts.css'





export default function Accounts(props){

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


    return(
        <>
        <h1>
        Welcome back {props.user.username} please review your account details:
        </h1>

        <h4>My Beer Reviews</h4>
        {props.userReviews.beerReviews.map( review =>{
            // const result = props.breweries.filter( (beer) => {beer.id === review.beerId})
            let currentBeer = getItem(review.beerId,'beer');
            return(
            <Card className='user--reviews'>
                <CardTitle>
                    <h4> 
                  {currentBeer.name}
                    </h4> 
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
                </Card>
        )})
            }
        <h4>My Brewery Reviews</h4>

        {props.userReviews.breweryReviews.map( review =>{
                  let currentBrewery = getItem(review.breweryId,'brewery');
            return(
            <Card className='user--reviews'>
                <CardTitle>
                    <h4> 
                     {currentBrewery.name}
                    </h4> 
                </CardTitle>
        
                <div>
                    <h5>Post ID: {review.id} </h5>
                    <p>Your Review: {review.review}</p>
                    <p>Your Rating: {review.rating}</p>
                    <p>Posted at: {review.createdAt}</p>
                
                </div>
                <Link to={'/brewery/'+ currentBrewery.id}>
                <Card className='accounts--beer--image' onClick={() => props.getBrewery(currentBrewery.id)}>
                    <CardImg top src = {setBreweryImage(currentBrewery.breweryType)} alt = {currentBrewery.name} />
                </Card>
                </Link>
                </Card>
        )})
            }

        <Card>
            <CardTitle>
            My Favorite Items
            </CardTitle>
            <CardBody>
            review list here with clicks maybe?
            </CardBody>
        </Card>
        <Card>
            <CardTitle>
            My Favorite Places
            </CardTitle>
            <CardBody>
            review list here with clicks maybe?
            </CardBody>
        </Card>
        </>
    )
}