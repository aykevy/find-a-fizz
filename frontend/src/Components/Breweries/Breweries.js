import React from "react"
import { Link } from "react-router-dom";
import { Card, CardImg, CardText, CardTitle,CardBody } from "reactstrap";



function Breweries(props){
    //setting the selected page number for brewry list.
    const [pageNumber,setPageNumber] = React.useState(1);
    //TO_DO - make input field to allow user to select entries per page for like 20/50/100?
    const ENTRIES_PER_PAGE = 50;
    //max pages available, rouned up, currernt entries at 50;
    const totalPages = Math.ceil(props.breweries.length/ENTRIES_PER_PAGE);


    /**
     * 
     * @param {INT} id - Brewery ID
     * grabs single brewery and sends to Main to route to single page
     */
    function onSelect(id){
        props.getBrewery(id)
    }

    /**
     * 
     * @param {STRING} action - recieved on call, dictates switch case
     * @returns action to set the current page based on information recieved
     */
    function navSearchResulst(action){
        switch(action){
            case 'next':
                if (pageNumber < totalPages){
                return setPageNumber(pageNumber + 1);
                }
                break
            case 'back':
                if(pageNumber - 1 > 0){
                return  setPageNumber(pageNumber - 1);
                }
                break
            case 'first': 
                return  setPageNumber(1);
                
            case 'last':
                return  setPageNumber(totalPages)
                
            default:
                return  setPageNumber(pageNumber)
        }

    }

    /**
     * 
     * @returns creates link + li elements for page numbers and sends back to pagebar
     *  PageNumber -/+ 5 is used to generate an array 10 long total, and so current page is in the middle of those #'s
     *  to allow back/forward nav
     */
    function pageNumberLinks(){
        let linkNumbers = []
        let active= ''
       
        for (let index = (pageNumber -5); index < (pageNumber+5) ; index++) {
            (index === pageNumber) ? active = "brew--link--active" : active = 'brew--link'
            if( index > 0 && index <= totalPages)
                linkNumbers.push(<li onClick={((e) => setPageNumber(index))} key={index} className ={active}>{index}</li>)        
        }
        return(linkNumbers)
    }

    /**
     * 
     * @returns the PageBar UL which holds a map of pagelinks 
     */
    function PageBar(){
        return(        
        <>
            <ul className="brew--navlinks">
                {pageNumber !== 0 ? <li>...</li>: null}
                {pageNumberLinks().map((link) =>{return link})}
                {pageNumber !== totalPages ? <li>...</li>: null}
            </ul>
        </>)
    }

    let url = '';
    // Slices the array into a section that just holds the selected entries per page based on what page we are on.
    let breweries = props.breweries.slice((pageNumber -1 ) * ENTRIES_PER_PAGE, ((pageNumber) * ENTRIES_PER_PAGE));

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
        {/*Renders a list of brewereis in card form, some conditional renderings based on if breweriees have information avaiable*/}
        <div className="brew--list">
            {breweries.map( (brewery) => { 
                url = '/brewery/' + brewery.id
                return(
                    //{Setting Link to Route to single brewery page I.E. url.com/brewery/1 */} 
                    <Link to={url} style={{color:"black"}}> 
                        <div className = 'brew--card--set'>              
                            <Card className="brew--card" key = {brewery.id} onClick ={ (e) => onSelect(brewery.id)}>
                                {/* TO-DO Set brewery image URL based on type of brewery*/}
                                <CardImg top src = {brewery.imageUrl} alt = {brewery.name} />
                                <CardBody>
                                    <CardTitle className = 'brew--card--name'>{brewery.name}</CardTitle>
                                    {brewery.breweryType !== undefined && <CardText className = 'brew--card--desc'>Type of brewery: {brewery.breweryType}</CardText>}
                                    <CardText className = 'brew--card--desc'>{brewery.city +", " + brewery.state}</CardText>
                                    {brewery.countyProvince !== null &&  <CardText className = 'brew--card--desc'>{brewery.countyProvince}</CardText>}
                                    {brewery.country !== null && <CardText className = 'brew--card--desc'> {brewery.country}</CardText>}
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