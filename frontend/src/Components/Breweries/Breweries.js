import React from "react"
import { Link } from "react-router-dom";
import { Card, CardImg, CardText, CardTitle,CardBody } from "reactstrap";
import './Brewery.css'

function Breweries(props) {
    //Setting the selected page number for brewery list
    const [pageNumber, setPageNumber] = React.useState(1);

    //50 entries
    const ENTRIES_PER_PAGE = 50;

    //Max pages available, rounded up, current entries at 50
    const totalPages = Math.ceil(props.breweries.length/ENTRIES_PER_PAGE);

    /**
     * 
     * @param {INT} id - Brewery ID
     * grabs single brewery and sends to Main to route to single page
     */
    function onSelect(id) {
        props.getBrewery(id)
    }

    function toggleUserFavorite(isFavorite, item, type) {
        if (isFavorite) {
             props.remFavorite(isFavorite.id, type);
        }
        else {
             props.addFavorite(item.id, props.userId, type);
        }
     }

    /**
     * 
     * @param {STRING} action - recieved on call, dictates switch case
     * @returns action to set the current page based on information recieved
     */
    function navSearchResulst(action){
        switch(action) {
            case 'next':
                if (pageNumber < totalPages) {
                    return setPageNumber(pageNumber + 1);
                }
                break
            case 'back':
                if (pageNumber - 1 > 0) {
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

    function setBreweryImage(type) {
        switch(type){
            case 'closed': return '/assets/breweries/Closed.png'
            case 'taproom': return '/assets/breweries/Taproom.png'
            case 'regional': return '/assets/breweries/Regional.png'
            case 'micro': return '/assets/breweries/Micro.png'
            case 'contract': return '/assets/breweries/Contract.png'
            case 'brewpub': return '/assets/breweries/Brewpub.png'
            case 'proprietor': return '/assets/breweries/Proprietor.png'
            case 'bar': return '/assets/breweries/Bar.png'    
            case 'nano':  return '/assets/breweries/Nano.png'   
            case 'planning': return '/assets/breweries/InPlanning.png'
            case 'large': return '/assets/breweries/Large.png'
            default: return ''
        }
    }

    /**
     * 
     * @returns creates link + li elements for page numbers and sends back to pagebar
     *  PageNumber -/+ 5 is used to generate an array 10 long total, and so current page is in the middle of those #'s
     *  to allow back/forward nav
     */
    function pageNumberLinks() {
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
    function PageBar() {
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
   
        if (breweries) {
        return(
        <>

        {/*Renders a list of brewereis in card form, some conditional renderings based on if breweriees have information avaiable*/}
        <div className="brew--list">
            {breweries.map( (brewery) => { 
                let isFavorite = props.favorites.filter(function (favorite){return brewery.id === favorite.breweryId});
                url = '/brewery/' + brewery.id

                return(
                    <div className="thumbs--up--divider" key = {brewery.id}>
                      <div className="container">
                        <img className= 'user--favorite--breweries' src = {isFavorite[0] ? './assets/favorites/Favorited.png' :'./assets/favorites/NoFavorite.png'} alt='favorite thumbs up'
                              onClick ={() => toggleUserFavorite(isFavorite[0],brewery,'brewery')}      />
                
                            {/*//{Setting Link to Route to single brewery page I.E. url.com/brewery/1 */} 
                            <Link to={url} style={{color:"black"}}> 
                                <div className = 'brew--card--set'>              
                                    <Card className="brew--card" key = {brewery.id} onClick ={ (e) => onSelect(brewery.id)}>
                                        <CardImg top className='brew--image'src={setBreweryImage(brewery.breweryType)} alt = {brewery.name} />
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
                        </div>
                    </div>
               
                )})    
            }
        
              
        </div>
        <div className="brew--results">
        <p>Showing Results {pageNumber * 50} through {(pageNumber + 1) * 50}</p>
        </div>

        <div className="brew--buttons">
            <button onClick = {(e) => navSearchResulst('first')} className = 'brew--navButton'> <i class="fa fa-angle-double-left" aria-hidden="true"></i> First Page</button>
            <button onClick = {(e) => navSearchResulst('back')} className = 'brew--navButton'> <i class="fa fa-angle-left" aria-hidden="true"></i>  Back Page </button>
            <button onClick = {(e) => navSearchResulst('next')} className = 'brew--navButton'> Next Page <i class="fa fa-angle-right" aria-hidden="true"></i></button>
            <button onClick = {(e) => navSearchResulst('last')} className = 'brew--navButton'> Last Page <i class="fa fa-angle-double-right" aria-hidden="true"></i></button>
        </div>
        <PageBar/>
        </>
        )
    }
    else {
        return(
            <></>
        )
    }
}

 export default Breweries;