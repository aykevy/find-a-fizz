import React from 'react'
import './SearchBar.css'
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import { Link } from 'react-router-dom';


function SearchBar({getBeer,getBrewery,beers,breweries}) {
    const [option, setOption] = React.useState("Beer");

    const [filteredBeers, setFilteredBeers] = React.useState([]);
    const [filteredBreweries, setFilteredBreweries] = React.useState([]);

    const [currentTextOnBar, setCurrentTextOnBar] = React.useState("");

    const filterBeers = (event) => {
        const searchWord = event.target.value;
        setCurrentTextOnBar(searchWord);
        const newFilter = beers.filter((beer) => {
            return beer.name.toLowerCase().includes(searchWord.toLowerCase());
        });
        searchWord === "" ? setFilteredBeers([]) : setFilteredBeers(newFilter);
    }

    const filterBreweries = (event) => {
        const searchWord = event.target.value;
        setCurrentTextOnBar(searchWord);
        const newFilter = breweries.filter((brewery) => {
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
                                    <Link to={'/beer/'+value.id}>
                                    <p onClick={(e) => {getBeer(value.id); setFilteredBeers([]);setCurrentTextOnBar("")}}>{value.name}</p>
                                    </Link>
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
                                <Link to={'/brewery/'+value.id}>
                                  <p onClick={(e) => {getBrewery(value.id); setFilteredBreweries([]);setCurrentTextOnBar("")}}>{value.name}</p>
                                  </Link>
                            );
                        })
                    }
                </div>
            )}
        </div>
    )

}

export default SearchBar;