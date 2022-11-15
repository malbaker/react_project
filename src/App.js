import './App.css';
import Header from './components/Header'
import Counter from './components/Counter'
import Button from './components/Button'

function App() {
  return (
    <div className="App">
      
      <Header/>
      <Counter count={0}/>
      <Button color="green" text="Increase count!"/>
      

    </div>
  );
}

export default App;
