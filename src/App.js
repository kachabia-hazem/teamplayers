import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MyCard from './components/Player';
import HorizontalExample from './components/Playerslist';
import Footer from './components/Footer';

const name="hazem"
function App() {
  return (
    <div className="App">
      <HorizontalExample></HorizontalExample>
      <Footer name={name}></Footer>
      

      
    </div>
  );
}

export default App;
