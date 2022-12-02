import React from 'react';
import Beer from '../Beers/Beer';
import HomeSlider from '../Carousels/HomeSlider';
import Maps from '../Maps/Maps';
import { Link } from "react-router-dom";
import { Card, CardImg, CardText, CardTitle,CardBody } from "reactstrap";
import './Home.css'

function Home({todaysBrewery,todaysBeer,getTodaysItems,getBeer,getBrewery,userLocation,breweries}) {
    if (todaysBrewery || todaysBeer === undefined)
    {
        getTodaysItems();
    }

    function setBreweryImage(type) {
        switch(type){
            case 'closed': return './assests/breweries/Closed.png'
            case 'taproom': return './assests/breweries/Taproom.png'
            case 'regional': return './assests/breweries/Regional.png'
            case 'micro': return './assests/breweries/Micro.png'
            case 'contract': return './assests/breweries/Contract.png'
            case 'brewpub': return './assests/breweries/Brewpub.png'
            case 'proprietor': return './assests/breweries/Proprietor.png'
            case 'bar': return './assests/breweries/Bar.png'    
            case 'nano':  return '/assests/breweries/Nano.png'   
            case 'planning': return './assests/breweries/InPlanning.png'
            case 'large': return './assests/breweries/Large.png'
            default: return ''
        }
    }
    
    return (
        <>
        <div className='home--dailyFeatures'>

            <div className='home--featuredBeer'> 
                <h2 className='featuredBeer'>Beer of the Day:</h2>   
                    <Link to={'/beer/'+todaysBeer.id} style={{color:"black"} } component={<Beer selectedBeer={todaysBeer}/>}> 
                        <div className = 'beer--card--set'>             
                            <Card className="beer--card" key = {todaysBeer.id}>
                                <CardImg top src = {todaysBeer.imageUrl} alt = {todaysBeer.name} onClick={(e)=> getBeer(todaysBeer.id)}/>
                                <CardBody>
                                    <CardTitle className = 'beer--card--name'>{todaysBeer.name}</CardTitle>
                                </CardBody>
                            </Card>
                        </div>   
                    </Link>
            </div>

            <HomeSlider />

            <div className='home--featuredBrewery'>
                <h2 className='featuredBrewery'>Featured Brewery:</h2>   
                    <Link to={'/brewery/'+todaysBrewery.id} style={{color:"black"}}> 
                        <Card className="brew--card--daily">
                            <CardImg top src = {setBreweryImage(todaysBrewery.breweryType)} alt ="Image of Brewery Type" onClick={(e) => getBrewery(todaysBrewery.id)}/>
                        </Card>
                    </Link>

                <Card>
                    <CardBody className="brew--card--home">
                        <CardTitle className = 'selected--name--home'>{todaysBrewery.name}</CardTitle>
                        <CardText className = 'selected--desc--home'>{todaysBrewery.street +", "+ todaysBrewery.city +", " + todaysBrewery.state}</CardText>
                    </CardBody>
                </Card>
            </div>

        </div>

        <div className= 'home--map'>
            <Maps userLocation={userLocation} fromHome={true} breweries={breweries} getBrewery={getBrewery}/>
        </div>
    </>
    )
}

export default Home;