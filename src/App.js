import logo from './logo.svg';
import './App.css';
import Character from "./components/Character";

function App() {

  return (
    <div>

      <Character id={'37'}
                 name={'Beth Sanchez'}
                 status={'Alive'}
                 species={'Human'}
                 gender={'Female'}
                 image={'https://rickandmortyapi.com/api/character/avatar/37.jpeg'}
      />

        <Character id={'261'}
                   name={'Photography Cyborg'}
                   status={'unknown'}
                   species={'Robot'}
                   gender={'Male'}
                   image={'https://rickandmortyapi.com/api/character/avatar/261.jpeg'}
        />
        <Character id={'454'}
                   name={'Arbolian Mentirososian'}
                   status={'Alive'}
                   species={'Alien'}
                   gender={'unknown'}
                   image={'https://rickandmortyapi.com/api/character/avatar/454.jpeg'}
        />
        <Character id={'594'}
                   name={'Floaty Bloody Ma'}
                   status={'Dead'}
                   species={'Human'}
                   gender={'Male'}
                   image={'https://rickandmortyapi.com/api/character/avatar/594.jpeg'}
        />
      <Character id={'641'}
                 name={'Bruce'}
                 status={'Dead'}
                 species={'Human'}
                 gender={'Female'}
                 image={'https://rickandmortyapi.com/api/character/avatar/641.jpeg'}
      />
      <Character id={'821'}
                   name={'Gotron'}
                   status={'unknown'}
                   species={'Human'}
                   gender={'Female'}
                   image={'https://rickandmortyapi.com/api/character/avatar/821.jpeg'}
        />


    </div>

  );
}

export default App;

