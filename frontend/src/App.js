import Main from './Components/Main/Main'
import React from 'react'
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
import {ConfigureStore} from './Redux/configureStore'

import Beer from './Components/Beer/Beer'
import { axios } from './Redux/actionTypes'

const store = ConfigureStore();

function App() {
  const [allBeers,setAllBeers] = React.useState([]);

  const handleCLick=()=>{
    axios.get('/beers').then(function (response){
     setAllBeers(response.data);
     console.log(response.data)
 })
 }
  

  return (
    <Provider store={store}>
      <BrowserRouter>
        <>
        <header>
        <button>Home</button>
        <button onClick={() => handleCLick()}>Click to see Beers</button>
        <button>Click to see Breweries</button>
        <button>Search</button>
        </header>
        {/* <Main/> */}
        {/*Comment Main and uncomment beer to see random beer example work, run backend on intelij then run this on VS */}
        <div className='beer--list' >
        {allBeers.map(beer =>{
          return(
          <Beer beer={beer} className='beer--element'/>
          )
        })}
        </div>
        <footer>
          <h5>CopyRight 2022</h5>
          <button>login</button>
        </footer>
        </>
      </BrowserRouter>
    </Provider>
  );
  
}

export default App;
