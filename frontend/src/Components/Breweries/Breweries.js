import React from "react"
import { Link } from "react-router-dom";
import { Card, CardImg, CardText, CardTitle,CardBody } from "reactstrap";



function Breweries(props){

    const [pageNumber,setPageNumber] = React.useState(1);
    const totalPages = Math.ceil(props.breweries.length/50);

    function onSelect(id){
        
        props.getBrewery(id)
    }

    function navSearchResulst(action){
        switch(action){
            case 'next':
                if (pageNumber < totalPages)
                return setPageNumber(pageNumber + 1);
            case 'back':
                if(pageNumber - 1 > 0)
                return  setPageNumber(pageNumber - 1);
            case 'first': 
                return  setPageNumber(1)
            case 'last':
                return  setPageNumber(totalPages)
            default:
                return  setPageNumber(pageNumber)
        }

    }

    function pageNumberLinks(){
        let linkNumbers = []
        let active= ''
       
        for (let index = (pageNumber -5); index < (pageNumber+5) ; index++) {
            (index == pageNumber) ? active = "brew--link--active" : active = 'brew--link'
            if( index > 0 && index <= totalPages)
                linkNumbers.push(<li onClick={((e) => setPageNumber(index))} className ={active}>{index}</li>)        
        }
        return(linkNumbers)
    }


    function PageBar(){

        return(        
        <>
            <ul className="brew--navlinks">
                {pageNumber != 0 ? <li>...</li>: null}
                {pageNumberLinks().map((link) =>{return link})}
                {pageNumber != totalPages ? <li>...</li>: null}
            </ul>
        </>)
    }

    let url = '';
    let breweries = props.breweries.slice((pageNumber -1 ) * 50, ((pageNumber) * 50));

        if(breweries){
        return(
        <>
        <div className="brew--results">
        <p>Showing Results {pageNumber * 50} through {(pageNumber + 1) * 50}</p>
        </div>
      
        <PageBar/>
        <div className="brew--buttons">
            <button onClick = {(e) => navSearchResulst('next')} className = 'brew--navButton'> Next Page </button>
            <button onClick = {(e) => navSearchResulst('back')} className = 'brew--navButton'> Back Page </button>
            <button onClick = {(e) => navSearchResulst('first')} className = 'brew--navButton'> First Page</button>
            <button onClick = {(e) => navSearchResulst('last')} className = 'brew--navButton'> Last Page</button>
        </div>
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
                                    {brewery.breweryType != undefined && <CardText className = 'brew--card--desc'>Type of brewery: {brewery.breweryType}</CardText>}
                                    <CardText className = 'brew--card--desc'>{brewery.city +", " + brewery.state}</CardText>
                                    {brewery.countyProvince != null &&  <CardText className = 'brew--card--desc'>{brewery.countyProvince}</CardText>}
                                    {brewery.country != null && <CardText className = 'brew--card--desc'> {brewery.country}</CardText>}
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