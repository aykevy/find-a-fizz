import { baseUrl } from '../../Shared/baseUrl'
import {useEffect} from 'react'
import axios from 'axios'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import './BeerSlider.css'

export default function BeerSlider(props) 
{
  
    /* All beers on website */
    const [beers, setBeers] = React.useState([]);

    /* All beer relations with the given brewery id */
    const [breweryBeerRelations, setBreweryBeerRelations] = React.useState([])

    useEffect( () => {
        let fetchBreweryBeerRelationUrl =  baseUrl + "/breweryProduct/breweryId?breweryId=" + props.breweryId;
        async function fetchBreweryBeerRelations() 
        {
            const request = await axios.get(fetchBreweryBeerRelationUrl);
            setBreweryBeerRelations(request.data);
            return request;
        }

        let fetchBeersUrl = baseUrl + "/beers"
        async function fetchBeers()
        {
            const request = await axios.get(fetchBeersUrl);
            setBeers(request.data);
            return request;
        }

        fetchBreweryBeerRelations()
        fetchBeers()
    }, [props.breweryId]);
    
    /*Get beer objects by filtering from the universal*/
    function getFilteredBeers () {
        let beerIds = breweryBeerRelations.map(
            function(relation)
            {
                return relation.beerId;
            }
        );
    
        const newFilter = beers.filter((beer) => {
            return beerIds.includes(beer.id);
        });

        return newFilter
    }
   
    /*Carousel Settings */
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000
    };

    /*Rendering*/
    if (breweryBeerRelations.length > 0) {
        
        const beers = getFilteredBeers();
        return (  
            <div className="beer-slider">
                <Slider {...settings}>
                {
                    beers.map((item, index) => {
                        return (
                            <div>
                                <img src={item.imageUrl}  width="200px" height="200px"alt='beer-carousel' />
                            </div>
                        )
                    }
                )}
                </Slider>
            </div>
        )
    }

    else {
        return (
            <div>
                No beer info found. Owner of this place? Add a beer!
            </div>
        )
    }
}