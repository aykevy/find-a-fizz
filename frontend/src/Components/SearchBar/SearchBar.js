import React from 'react'
import {useEffect} from 'react'
import { baseUrl } from '../../Shared/baseUrl'
import axios from 'axios'

import './SearchBar.css'
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";

function SearchBar() {
    const [option, setOption] = React.useState("Beer");

    const [beersData, setBeersData] = React.useState([]);
    const [breweriesData, setBreweriesData] = React.useState([]);

    const [filteredBeers, setFilteredBeers] = React.useState([]);
    const [filteredBreweries, setFilteredBreweries] = React.useState([]);

    const [currentTextOnBar, setCurrentTextOnBar] = React.useState("");

    useEffect( () => {
        const fetchBeersUrl = baseUrl + "/beers";
        const fetchBreweriesUrl = baseUrl + "/breweries";

        async function fetchDataBeer() {
            const request = await axios.get(fetchBeersUrl);
            setBeersData(request.data);
            return request;
        }

        async function fetchDataBrewery() {
            const request = await axios.get(fetchBreweriesUrl);
            setBreweriesData(request.data);
            return request;
        }

        fetchDataBeer();
        fetchDataBrewery();

    }, []);


    const filterBeers = (event) => {
        const searchWord = event.target.value;
        setCurrentTextOnBar(searchWord);
        const newFilter = beersData.filter((beer) => {
            return beer.name.toLowerCase().includes(searchWord.toLowerCase());
        });
        searchWord === "" ? setFilteredBeers([]) : setFilteredBeers(newFilter);
    }

    const filterBreweries = (event) => {
        const searchWord = event.target.value;
        setCurrentTextOnBar(searchWord);
        const newFilter = breweriesData.filter((brewery) => {
            return brewery.name.toLowerCase().includes(searchWord.toLowerCase());
        });
        searchWord === "" ? setFilteredBreweries([]) : setFilteredBreweries(newFilter);
    }

    const handleOption = (event) => {
        event.target.value === "Beer" ? setOption("Beer") : setOption("Brewery");
    }

    const clearInput = (event) => {
        setFilteredBeers([]);
        setFilteredBreweries([]);
        setCurrentTextOnBar("");
    }

    return (
        
        <div className="search">

            <div className = "selectAndSearchBarLinedUp">
                <form>
                    <select className="selectOptions" onChange = {handleOption}>
                        <option value="Beer">Beer</option>
                        <option value="Brewery">Brewery</option>
                    </select>
                </form>
                
                <div className="searchInputs">
                    <input type="text" placeholder={"Enter a beer or brewery"} value = {currentTextOnBar} onChange = {option === "Beer" ? filterBeers : filterBreweries} />


                    <div className="searchIcon">
                        { ((filteredBeers.length === 0 && option === "Beer") || (filteredBreweries.length === 0 && option === "Brewery")) 
                        ? <SearchIcon /> 
                        : <CloseIcon id="clearBtn" onClick={clearInput}/> }
                    </div>


                </div>
            </div>

            {filteredBeers.length != 0 && option === "Beer" && (
                <div className="dataResult">
                    {
                        /*We slice here to only show top 20 results so it doesn't lag*/
                        filteredBeers.slice(0, 20).map((value, key) => {
                            return (
                                <a className = "dataItem" href={"localhost:3000/beer/" + value.id} target="_blank">
                                    <p>{value.name}</p>
                                </a>
                            );
                        })
                    }
                </div>
            )}

            {filteredBreweries.length != 0 && option === "Brewery" && (
                <div className="dataResult">
                    {
                        /*We slice here to only show top 20 results so it doesn't lag*/
                        filteredBreweries.slice(0, 20).map((value, key) => {
                            return (
                                <a className = "dataItem" href={"localhost:3000/brewery/" + value.id} target="_blank">
                                    <p>{value.name}</p>
                                </a>
                            );
                        })
                    }
                </div>
            )}
        </div>
    )

}

export default SearchBar;