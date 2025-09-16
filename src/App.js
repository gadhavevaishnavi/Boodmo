import logo from './logo.svg';
import './App.css';
import { Header } from './component/Header';
import { Navbar } from './component/Navbar';
import { BoodmoUi } from './component/BoodmoUi';
import CurrentOffers from './component/CurrentOffers';
import SearchSection from "./component/SearchSection";


function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <BoodmoUi />
      <CurrentOffers />
      <SearchSection />
    </div>
  );
}


export default App;
