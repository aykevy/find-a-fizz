import React from "react"
import { Link } from "react-router-dom";
import { Card, CardImg, CardText, CardTitle,CardBody } from "reactstrap";


function Beers(props){


    /**
     * 
     * @param {INT} id - Beer ID
     * grabs single beer and sends to Main to route to single page
    */
    function onBeerSelect(id){
        props.getBeer(id)
    }
    {/*Renders a list of beers in card form*/}
    let url = ''
    let beers = props.beers;
        if(beers){
        return(
        <div className="beer--list">
            {beers.map( (beer) => { 
                {url = '/beer/' + beer.id}
                return(
                //{Setting Link to Route to single beer page I.E. url.com/beer/1 */} 
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
