import './2021110773/App_2021110773.css';
import MyAutocomplete from './2021110773/MyAutocomplete';
import MyForm from './2021110773/MyInput';
import MyAccordion from "./2021110773/MyAccordion";
import GithubCorner from './2021110773/GithubCorner';
import MySignature from './2021110773/MySignature';
import Particle from './2021110773/Particle';

function App () {
  return (
    <div className="App">
      <GithubCorner></GithubCorner>
      <MySignature></MySignature>
      <MyAutocomplete></MyAutocomplete>
      <MyAccordion></MyAccordion>
      <MyForm></MyForm>
      <Particle></Particle>
    </div>
  );
}

export default App;
