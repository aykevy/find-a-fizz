import React from 'react';
import Beer from '../Beers/Beer';
import HomeSlider from '../Carousels/HomeSlider';
import { Link } from "react-router-dom";
import { Card, CardImg, CardText, CardTitle,CardBody } from "reactstrap";

function Home({todaysBrewery,todaysBeer,getTodaysItems,getBeer,getBrewery}) {
    if(todaysBrewery || todaysBeer === undefined){
        getTodaysItems();
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
            <CardImg top src = {todaysBrewery.imageUrl} alt =" This is where we have the small pictures things" onClick={(e) => getBrewery(todaysBrewery.id)}/>
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