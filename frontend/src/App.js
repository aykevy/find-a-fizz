import Main from './Components/Main/Main'
import Header from './Components/Header/Header'
import React from 'react'
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
import {ConfigureStore} from './Redux/configureStore'

import Reviews from './Components/Reviews/Reviews';

const store = ConfigureStore();

function App() {
  return (
    
    <Provider store={store}>
      <BrowserRouter>
        <Main/>
        
      </BrowserRouter>
    </Provider>
    

    // <Reviews type = {"beer"} id={1}/>
  );
  
}

export default App;
