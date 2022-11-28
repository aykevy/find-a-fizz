import Main from './Components/Main/Main'
import Header from './Components/Header/Header'
import React from 'react'
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
import {ConfigureStore} from './Redux/configureStore'

import BreweryModal from './Components/Portal/BreweryModal'
import ExistingBreweryEmailRequest from './Components/Portal/ExistingBreweryEmailRequest'
import OwnershipTable from './Components/Portal/OwnershipTable'


const store = ConfigureStore();

function App() {
 
  
  return (
    
    
    <Provider store={store}>
      <BrowserRouter>
        <Main/>
        
      </BrowserRouter>
    </Provider>
    
    
    
    
   
  );
  
}

export default App;
