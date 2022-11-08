import axios from 'axios';
import { actionTypes } from 'react-redux-form'
import {Link} from 'react-router-dom'
import { AXIOS } from '../../Redux/actionTypes';
import React from 'react';


function Home(props) {
    //State of Brews
    let brewList = []
    //Call brew list
    axios.get('breweries/')
        .then( function (response) {
        brewList = response.data;
})  
    let singleBrew = brewList[0];
    return(
        
        <div>
           {singleBrew.map((data)=> <p>test</p>)}
        </div>
    )
}

export default Home;