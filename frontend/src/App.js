import Main from './Components/Main/Main'
import React from 'react'
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
import {ConfigureStore} from './Redux/configureStore'



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

//6aa188b6ee6448d07c753944a5303acd