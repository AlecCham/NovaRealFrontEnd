// Import necessary React components, hooks, and assets
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import { useEffect, useState } from 'react';
import House from './components/House';
import SearchFilter from './components/SearchFilter';
import SearchResults from './components/SearchResults';
import SearchHouse from './components/SearchHouse';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';
import PageNotFound from './components/PageNotFound';
import axios from 'axios';
import Enquiries from './components/Enquiries';

function App() {
  // State to store house data
  let [houseData, setHouseData] = useState([]);

  // Fetch house data on component mount
  useEffect(() => {
    let fetchData = async () => {
      console.log("env" + process.env.REACT_APP_BACKEND_URL);
      // Fetching house data from the backend server using axios
      let response = await axios.get(process.env.REACT_APP_BACKEND_URL + "houses");
      console.log(response);
      setHouseData(response.data); // Setting fetched data to state
    }
    fetchData();
  }, []) // Empty dependency array means this effect runs once on mount

  return (
    <div>
      <Header />
      {/* Pass all houses data to SearchFilter for displaying filters */}
      <SearchFilter allHouses={houseData}/>
      <Routes>
        {/* Define routes for different pages in the app */}
        <Route path='/' element={<House houseInfo={houseData[1]}/>}/>
        <Route path='/searchresult/:county' element={<SearchResults allhouses={houseData}/>}/>
        <Route path='/searchhouse/:id' element={<SearchHouse allhouses={houseData}/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/enquiries' element={<Enquiries/>}/>
        {/* Fallback route for unmatched paths */}
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
