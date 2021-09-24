import './App.css';
import { Route, Switch } from 'react-router-dom';
import ProductsCustom from './components/ProductsCustom';
import ProductsLib from './components/ProductsLib';
import Navbar from './components/Navbar';
function App() {
  return (
    <main>
      <Navbar />
      <Switch>
        <Route path="/" component={ProductsCustom} exact />
        <Route path="/lib" component={ProductsLib} />
      </Switch>
    </main>
  );
}

export default App;
