import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import DisplayContainer from './components/DisplayContainer/DisplayContainer';

function App() {
  return (
    <div className='App'>
      <Header />
      <header className='App-header'>
        <DisplayContainer />
      </header>
      <Footer />
    </div>
  );
}

export default App;
