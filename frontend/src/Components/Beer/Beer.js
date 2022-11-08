import React from "react"
import axios from "axios";
import { Card, CardImg, CardText, CardTitle,CardBody } from "reactstrap";
import { Component } from "react";
import useGenerateRandomColor from "../../Redux/useRandomColors";
/* This is just a simple test for now using beer with id 2, this is just to show that connection is working. */
const API_BEER = 'http://localhost:8080/beer/2'


export default class Beer extends Component{
    //constructor for Beer Comp State.
    constructor(props){
        super(props)

        //state props match object in DB
        this.state ={
            id: "",
            name: "",
            description: "",
            imageUrl: "",
            backgroundColor: "",
        }
        //binding this to mean this object in state
        this.handleCLick = this.handleCLick.bind(this);
    }

    handleCLick(){
        //call Axios to get beer API, then take response and set the state of the object to this( obj on  line 23)
        // then bind those two objects to each other as this.
        axios.get(API_BEER).then(function (response){
            this.setState(response.data);}.bind(this))
        }
    

    render(){
        //Since we are using states we need a class comp, and since it's a class comp not funct comp we must render and return.
    return(
        <div className = 'beer--card--set'>
            <h1>TEST BEER OMEGALUL</h1>
            <button onClick={() => this.handleCLick()}>Click to see beer with id 2</button>
            <Card className = 'beer--card--ind' style={{backgroundColor:'lightblue'}}>
                <CardImg top src = {this.state.imageUrl} alt = {this.state.name} className = 'beer--image'/>
                <CardBody>
                    <CardTitle className = 'beer--name'>{this.state.name}</CardTitle>
                    <CardText className = 'beer--desc'>{this.state.description}</CardText>
                </CardBody>

            </Card>
        </div>
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



