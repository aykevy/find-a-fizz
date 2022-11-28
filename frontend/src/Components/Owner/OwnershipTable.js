import React from "react"
import { baseUrl } from '../../Shared/baseUrl'
import {useEffect} from 'react'
import axios from 'axios'

import DeleteEntryModal from "./DeleteEntryModal"
import BeerModal from "./BeerModal"
import BreweryModal from "./BreweryModal"
import { fetchBeers } from "../../Redux/actionCreators"

export default function OwnershipTable(props) 
{
  
    /* All beers on website, change later to use store */
    const [beers, setBeers] = React.useState([]);

    /* All breweries on website, change later to use store */
    const [breweries, setBreweries] = React.useState([]);

    /* All brewery_product relations on website */
    const [breweryProductRelations, setBeweryProductRelations] = React.useState([])

    /* All ownership relations with the given user id */
    const [ownershipRelations, setOwnershipRelations] = React.useState([])

   
    useEffect( () => {
        let fetchBeersURL = baseUrl + "/beers"
        async function fetchBeers()
        {
            const request = await axios.get(fetchBeersURL);
            setBeers(request.data);
            return request;
        }

        let fetchBreweriesURL = baseUrl + "/breweries"
        async function fetchBreweries()
        {
            const request = await axios.get(fetchBreweriesURL);
            setBreweries(request.data);
            return request;
        }

        let fetchBreweryProductsURL = baseUrl + "/breweryProducts"
        async function fetchBreweryProducts()
        {
            const request = await axios.get(fetchBreweryProductsURL);
            setBeweryProductRelations(request.data);
            return request;
        }

        let fetchOwnershipURL =  baseUrl + "/ownership/userId?userId=" + props.userId;
        async function fetchOwnerships() 
        {
            const request = await axios.get(fetchOwnershipURL);
            setOwnershipRelations(request.data);
            return request;
        }

        fetchBeers()
        fetchBreweries()
        fetchBreweryProducts()
        fetchOwnerships()
      
   
    }, [props.userId]);
    
    /*Get brewery objects by filtering from the universal*/
    function getOwnedBreweries () {
        let breweryIds = ownershipRelations.map(
            function(relation)
            {
                return relation.breweryId;
            }
        );
        const newFilter = breweries.filter((brewery) => {
            return breweryIds.includes(brewery.id);
        });
        return newFilter
    }

    /*Get beer objects by filtering from the universal*/
    function getBreweriesAndBeers (breweriesList) {
        let ownedBreweriesIds = breweriesList.map( function(breweries) {return breweries.id;});
        const getOwnedRelations = breweryProductRelations.filter((relation) => {
                return ownedBreweriesIds.includes(relation.breweryId)
        });
        const finalFilter = getOwnedRelations.map (
            function(relation)
            {
                let beerObject = beers.filter((beer) => {
                    return beer.id === relation.beerId
                })
                return {
                    id: relation.id,
                    beerId: relation.beerId,
                    name: beerObject[0].name,
                    description: beerObject[0].description,
                    imageUrl: beerObject[0].imageUrl,
                    abvPercent: beerObject[0].abvPercent,
                    type: beerObject[0].type,
                    breweryId: relation.breweryId,
                }
            }
        )

        return finalFilter;
    }

    if (ownershipRelations.length > 0) {
        const breweriesList = getOwnedBreweries();
        const breweriesAndBeers = getBreweriesAndBeers(breweriesList);
        console.log(breweriesAndBeers);
        

        return (
            <div>
                <h3>Breweries You Own</h3>
                <table className="ownership--table">
                    <thead className="ownership--table--head">
                        <tr>
                            <th>Brewery Id</th>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Street</th>
                            <th>City</th>
                            <th>State</th>
                            <th>Postal</th>
                            <th>Website URL</th>
                            <th>Phone</th>
                            <th>Country</th>
                            <th>Longitude</th>
                            <th>Latitude</th>
                            <th>Address 2</th>
                            <th>Address 3</th>
                        </tr>
                    </thead>

                    <tbody className="ownership--table--body">
                        {
                            breweriesList.map(brewery => {
                            return (
                                <tr key={brewery.id}>
                                    <td>{ brewery.id }</td>
                                    <td>{ brewery.name }</td>
                                    <td>{ brewery.breweryType}</td>
                                    <td>{ brewery.street}</td>
                                    <td>{ brewery.city }</td>
                                    <td>{ brewery.state }</td>
                                    <td>{ brewery.postalCode}</td>
                                    <td>{ brewery.websiteUrl}</td>
                                    <td>{ brewery.phone }</td>
                                    <td>{ brewery.country }</td>
                                    <td>{ brewery.longitude}</td>
                                    <td>{ brewery.latitude}</td>
                                    <td>{ brewery.address2 }</td>
                                    <td>{ brewery.address3 }</td>
                                    <td> <BeerModal action={"add"} breweryId={brewery.id}/></td>
                                    <td> <BreweryModal action={"update"} userId={props.userId} breweryId={brewery.id}/></td>
                                    <td> <DeleteEntryModal beerOrBrewery={"brewery"} breweryId={brewery.id} userId={props.userId}/></td>
                                </tr>
                            )})
                        }
                    </tbody>
                </table>

                <h3>Beers For Your Breweries</h3>
                <table className="breweryProduct--table">
                    <thead className="breweryProduct--table--head">
                        <tr>
                            <th>Brewery Id</th>
                            <th>Beer Id</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>ABV %</th>
                            <th>Type</th>
                            <th>Image URL</th>
                            
                        </tr>
                    </thead>

                    <tbody className="ownership--table--body">
                        {
                            breweriesAndBeers.map(relationEntry => {
                            return (
                                <tr key={relationEntry.id}>
                                    <td>{ relationEntry.breweryId}</td>
                                    <td>{ relationEntry.beerId }</td>
                                    <td>{ relationEntry.name }</td>
                                    <td>{ relationEntry.description}</td>
                                    <td>{ relationEntry.abvPercent }</td>
                                    <td>{ relationEntry.type}</td>
                                    <td>{ relationEntry.imageUrl }</td>
                                    <td> <BeerModal action={"update"} beerId={relationEntry.beerId}/></td>
                                    <td> <DeleteEntryModal beerOrBrewery={"beer"} beerId={relationEntry.beerId}/></td>
                                </tr>
                            )})
                        }
                    </tbody>
                </table>
            </div>
        )
    }

    else {
        return (
            
            <div>
                <h3>Breweries You Own</h3>
                You own no breweries! Add one.
            </div>
        )
    }
}