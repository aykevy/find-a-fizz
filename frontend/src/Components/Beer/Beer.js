import React from "react"

/* This is just a simple test for now using beer with id 2, this is just to show that connection is working. */
const API_BEER = 'http://localhost:8080/beer/2'


function getBeer()
{
    /*This is the javascript way, will change later to react way using states*/
    const beer_name = document.getElementById("beer--name");
    const beer_description = document.getElementById("beer--description");
    var beer_pic = document.getElementById("beer--pic");

    fetch(API_BEER)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            beer_name.innerText = data.name;
            beer_description.innerText = data.description;
            console.log(data.imageUrl);
            beer_pic.src = data.imageUrl;
        });

    /* Will probably do another fetch here for reviews, comments etc. by a user*/
}

export default function Beer()
{
    return(
        <div>
            <h1>TEST BEER OMEGALUL</h1>
            <button onClick={() => getBeer()}>Click to see beer with id 2</button>
            <h1 id="beer--name"></h1>
            <h4 id="beer--description" />
            <img id="beer--pic" />
        </div>
    )
}