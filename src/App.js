import './App.css';
import LocalTempo from './tempo';

function App() {
  return (
    <div className="App" >
      <h2>Descubra a temperatura da sua cidade</h2>
      <LocalTempo></LocalTempo>
      <img className="termoFrio" src="https://cdn-icons-png.flaticon.com/512/1247/1247790.png" height='250rem' width="250rem"></img>
      <img className="termoQuente" src="https://cdn-icons-png.flaticon.com/512/427/427237.png" height='250rem' width="250rem"></img>
    </div>    
  );
}
 
export default App;
