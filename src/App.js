import Arrivals from './components/arrivals/Arrivals';
import Brands from './components/brands/Brands';
import Card from './components/card/Card';
import Header from './components/header/Header'
import Promo from './components/promo/Promo';
import Payday from './components/payday/Payday';


function App() {





  return (
    <div className="App">
      <Header/>
      <Promo />
      <Brands/>
      <Arrivals/>
      <Payday/>
    </div>
  )


}

export default App;
