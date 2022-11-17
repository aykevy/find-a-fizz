import React from "react"
import { Link } from "react-router-dom";
import { Card, CardImg, CardText, CardTitle,CardBody } from "reactstrap";



function Beers(props){

    function onBeerSelect(id){
        props.getBeer(id)
    }

    let url = ''
    let beers = props.beers;
        if(beers){
        return(
        <div className="beer--list">
            {beers.map( (beer) => { 
                {url = '/beer/' + beer.id}
                return(
                    <Link to={url} style={{color:"black"}}> 
                        <div className = 'beer--card--set'>              
                            <Card className="beer--card" key = {beer.id} onClick ={ (e) => onBeerSelect(beer.id)}>
                                <CardImg top src = {beer.imageUrl} alt = {beer.name} />
                                <CardBody>
                                    <CardTitle className = 'beer--card--name'>{beer.name}</CardTitle>
                                    <CardText className = 'beer--card--desc'>{beer.description}</CardText>
                                </CardBody>
                            </Card>
                        </div>   
                    </Link>
               
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
