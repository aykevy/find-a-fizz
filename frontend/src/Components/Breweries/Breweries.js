import React from "react"
import { Link } from "react-router-dom";
import { Card, CardImg, CardText, CardTitle,CardBody } from "reactstrap";



function Breweries(props){

    const [pageNumber,setPageNumber] = React.useState(0);

    function onSelect(id){
        props.getBrewery(id)
    }

    function navSearchResulst(action){
        {console.log(pageNumber)}
        switch(action){
            case 'next':
                return setPageNumber(pageNumber + 1);
            case 'back':
                return  setPageNumber(pageNumber - 1);
            case 'first': 
                return  setPageNumber(0)
            case 'last':
                return  setPageNumber(Math.floor(props.breweries.length/50))    
        }
        {console.log(pageNumber)}
    }

    let url = '';
    let breweries = props.breweries.slice(pageNumber * 50, ((pageNumber + 1) * 50));

        if(breweries){
        return(
        <>
        <p>Showing Results {pageNumber * 50} through {(pageNumber + 1) * 50}</p>
        <button onClick = {(e) => navSearchResulst('next')}> Next - Work please</button>
        <button onClick = {(e) => navSearchResulst('back')}> Back - Work please</button>
        <button onClick = {(e) => navSearchResulst('first')}> First - Work please</button>
        <button onClick = {(e) => navSearchResulst('last')}> Last - Work please</button>
        <div className="brew--list">
            {breweries.map( (brewery) => { 
                {url = '/brewery/' + brewery.id}
                return(
                    <Link to={url} style={{color:"black"}}> 
                        <div className = 'brew--card--set'>              
                            <Card className="brew--card" key = {brewery.id} onClick ={ (e) => onSelect(brewery.id)}>
                                <CardImg top src = {brewery.imageUrl} alt = {brewery.name} />
                                <CardBody>
                                    <CardTitle className = 'brew--card--name'>{brewery.name}</CardTitle>
                                    <CardText className = 'brew--card--desc'>{brewery.breweryType}</CardText>
                                    <CardText className = 'brew--card--desc'>{brewery.websiteUrl}</CardText>
                                    <CardText className = 'brew--card--desc'>{brewery.phone}</CardText>
                                    <CardText className = 'brew--card--desc'>{brewery.street + brewery.city + brewery.state}</CardText>
                                    <CardText className = 'brew--card--desc'>{brewery.countyProvince + brewery.country}</CardText>
                                </CardBody>
                            </Card>
                        </div>   
                    </Link>
               
                )})    
            }  
        </div>
        </>
        )
    }
    else{
        return(
            <></>
        )
    }
}

 export default Breweries;