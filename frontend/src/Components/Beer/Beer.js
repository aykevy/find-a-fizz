import React from "react"
import { Card, CardImg, CardText, CardTitle,CardBody } from "reactstrap";
import { Component } from "react";


export default class Beer extends Component{
    
    //constructor for Beer Comp State.
    constructor(props){
        super(props)
        console.log(props)
    }
    
    render(){
        //Deconstruction of Props
        const {
            beer: {
                    description,
                    id,
                    name,
                    imageUrl
                    },
                  
          } = this.props;
          
    return(
        <div className = 'beer--card--set'>
            <Card className="beer--card" key = {id}>
                <CardImg top src = {imageUrl} alt = {name} />
                <CardBody>
                    <CardTitle className = 'beer--card--name'>{name}</CardTitle>
                    <CardText className = 'beer--card--desc'>{description}</CardText>
                </CardBody>

            </Card>
            
        </div>
    //    </div>
    )
  }
}


    /*This is the javascript way, will change later to react way using states*/
    // const beer_name = document.getElementById("beer--name");
    // const beer_description = document.getElementById("beer--description");
    // var beer_pic = document.getElementById("beer--pic");

    // fetch(API_BEER)
    //     .then((response) => {
    //         return response.json();
    //     })
    //     .then((data) => {
    //         beer_name.innerText = data.name;
    //         beer_description.innerText = data.description;
    //         console.log(data.imageUrl);
    //         beer_pic.src = data.imageUrl;
    //     });

    /* Will probably do another fetch here for reviews, comments etc. by a user*/

    //Call brew list



