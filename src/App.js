import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

import { Header } from './component/Header';
import { Navbar } from './component/Navbar';
import { BoodmoUi } from './component/BoodmoUi';
import CurrentOffers from './component/CurrentOffers';
import SearchSection from "./component/SearchSection";
import BrandTrustAndCarMakers from './component/BrandTrustAndCarMakers';

import { Garage } from './component/Garage';
import { MyAccount } from './component/MyAccount';
import { MyProfile } from './component/MyProfile';
import { MyOrder } from './component/MyOrder';
import { MyWishlist } from './component/MyWishlist';
import { Document } from './component/Document';
import { Company_GST } from './component/Company_GST';

function App() {
  return (
    <Router>
      <Header />
      <Navbar />
      <BoodmoUi />
      <CurrentOffers />
      <SearchSection />
      <BrandTrustAndCarMakers />

      <Routes>
        <Route path="/myaccount" element={<MyAccount />} />
        <Route path="/garage" element={<Garage />} />
        <Route path="/myprofile" element={<MyProfile />} />
        <Route path="/myorder" element={<MyOrder />} />
        <Route path="/mywishlist" element={<MyWishlist />} />
        <Route path="/document" element={<Document />} />
        <Route path="/company_gst" element={<Company_GST />} />
      </Routes>
    </Router>
  );
}

export default App;
