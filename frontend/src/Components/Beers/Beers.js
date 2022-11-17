import React from "react"
import { Component } from "react";
import { Card, CardImg, CardText, CardTitle,CardBody } from "reactstrap";


function Beers(props){
    let beers = props.beers;
        if(beers){
        return(
        <div className="beer--list">
            {beers.map( (beer) => {
                console.log(beer)
                return(
                <div className = 'beer--card--set'>
                    <Card className="beer--card" key = {beer.id}>
                        <CardImg top src = {beer.imageUrl} alt = {beer.name} />
                        <CardBody>
                            <CardTitle className = 'beer--card--name'>{beer.name}</CardTitle>
                            <CardText className = 'beer--card--desc'>{beer.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
                )})    
            }  
        </div>
        )
    }
    else{
        return(
            <>
            </>
        )
    }
}

 export default Beers;
