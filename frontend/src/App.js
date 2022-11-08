import Main from './Components/Main/Main'
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
import {ConfigureStore} from './Redux/configureStore'

import Beer from './Components/Beer/Beer'

const store = ConfigureStore();

function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
  
        {/* <Main/> */}
        {/*Comment Main and uncomment beer to see random beer example work, run backend on intelij then run this on VS */}
        {<Beer/>}
      </BrowserRouter>
    </Provider>
  );
}

export default App;
