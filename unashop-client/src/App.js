import './App.css';
import {BrowserRouter, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Homescreen from './screens/Homescreen';
import ProductScreen from './screens/ProductScreen';


function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Route path='/' component={Homescreen}  exact/>
        <Route path='/product/:_id' component={ProductScreen} />
      </BrowserRouter>
    </div>
  );
}

export default App;
