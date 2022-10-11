import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Slider from './components/Slider/Slider';

function App() {
  return (
    <div className="App">
      <section>
        <Header></Header>
      </section>
      <section className='mt-4'>
        <Slider></Slider>
      </section>
    </div>
  );
}

export default App;
