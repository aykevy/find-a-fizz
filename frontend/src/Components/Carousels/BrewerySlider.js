import { baseUrl } from '../../Shared/baseUrl'
import {useEffect} from 'react'
import axios from 'axios'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import './BrewerySlider.css'

export default function BrewerySlider(props) 
{
  
    /* All breweries on website, change later to use store */
    const [breweries, setBreweries] = React.useState([]);

    /* All brewery relations with the given beer id */
    const [beerBreweryRelations, setBeerBreweryRelations] = React.useState([])

    useEffect( () => {
        let fetchBeerBreweryRelationUrl =  baseUrl + "/breweryProduct/beerId?beerId=" + props.beerId;
        async function fetchBeerBreweryRelations() 
        {
            const request = await axios.get(fetchBeerBreweryRelationUrl);
            setBeerBreweryRelations(request.data);
            return request;
        }

        let fetchBreweriesUrl = baseUrl + "/breweries"
        async function fetchBreweries()
        {
            const request = await axios.get(fetchBreweriesUrl);
            setBreweries(request.data);
            return request;
        }

        fetchBeerBreweryRelations()
        fetchBreweries()
        
    }, [props.beerId]);
    
    /*Get beer objects by filtering from the universal list.*/
    function getFilteredBreweries () {
        let breweryIds = beerBreweryRelations.map(
            function(relation)
            {
                return relation.breweryId;
            }
        );

        const newFilter = breweries.filter((brewery) => {
            return breweryIds.includes(brewery.id);
        });

        console.log(newFilter);
        return newFilter;
        
    }

    /*Jacob's Code*/
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
   
    /*Carousel Settings */
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000
    };

    /*Rendering*/
    if (beerBreweryRelations.length > 0) {
    
        const breweries = getFilteredBreweries();
        return (  
            <div>
                <Slider {...settings}>
                {
                    breweries.map((item, index) => {
                        return (
             
                            <div>
                                <p>{item.name}</p>
                                <img src={setBreweryImage(item.breweryType)} width="200px" height="200px" alt="brewery-carousel"/>
                        
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
                No breweries found. Be the first to add this to your brewery!
            </div>
        )
    }
}