import { Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Landing from './components/Landing/Landing';
import CreatePokemon from './components/Pokemon/CreatePokemon';
import DetailPokemon from './components/Pokemon/DetailPokemon';

function App() {
  return (
    <>
    <Switch>
    <Route exact path={'/'} component={Landing}/>
    <Route path={'/home'} component={Home}/>
    <Route path={'/create'} component={CreatePokemon}/>
    <Route path={'/pokemons/:id'} component={DetailPokemon}/>
    </Switch>
    </>
  );
}

export default App;
