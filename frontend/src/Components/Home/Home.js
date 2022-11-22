import React from 'react';
import Beer from '../Beers/Beer';
import HomeSlider from '../Carousels/HomeSlider';
import { Link } from "react-router-dom";
import { Card, CardImg, CardText, CardTitle,CardBody } from "reactstrap";

function Home({todaysBrewery,todaysBeer,getTodaysItems,getBeer,getBrewery}) {
    if(todaysBrewery || todaysBeer === undefined){
        getTodaysItems();
    }

    
    function setBreweryImage(type){
        switch(type){
            case 'closed': return './assests/breweries/Closed.png'
            case 'taproom': return './assests/breweries/Taproom.png'
            case 'regional': return './assests/breweries/Regional.png'
            case 'micro': return './assests/breweries/Micro.png'
            case 'contract': return './assests/breweries/Contract.png'
            case 'brewpub': return './assests/breweries/Brewpub.png'
            case 'proprietor': return './assests/breweries/Proprietor.png'
            case 'bar': return './assests/breweries/Bar.png'    
            case 'nano':  return 'to-do'  
            case 'planning': return './assests/breweries/InPlanning.png'
            case 'large': return './assests/breweries/Large.png'
            default: return ''
        }

    }
    
   
return(
     <>
    <div className='home--featuredBeer'>    
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

      <div className='home--featuredBrewey'>    
        <Link to={'/brewery/'+todaysBrewery.id} style={{color:"black"}}> 
            <Card className="selected--image">
            <CardImg top src = {setBreweryImage(todaysBrewery.breweryType)} alt =" This is where we have the small pictures things" onClick={(e) => getBrewery(todaysBrewery.id)}/>
             </Card>
        </Link>

        <Card>
        <CardBody className="selected--nameDesc">
                <CardTitle className = 'selected--name'>{todaysBrewery.name}</CardTitle>
                <CardText className = 'selected--desc'>{todaysBrewery.street +", "+ todaysBrewery.city +", " + todaysBrewery.state}</CardText>
        </CardBody>
        </Card>

    </div>    
     
     <HomeSlider />
    </>
)
}


export default Home;