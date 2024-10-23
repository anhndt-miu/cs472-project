
import './App.css';
import TrendingComponent from './components/TrendingComponent.js'
import SearchComponent from './components/SearchComponent.js'
import SearchResultComponent from './components/SearchResultComponent.js'
import { useState } from 'react';
import FooterComponent from './components/FooterComponent.js';

function App() {
  const [searchData, updateSearchData] = useState(null)
  const [isDisabled, setIsDisabled] = useState(false)
  async function searchWord(keyword) {
    try {
      setIsDisabled(true)
      const result = await fetch(`http://localhost:3001/search/${keyword}`)
      if (!result.ok) {
        throw new Error('Error')
      } else {
        const searchData  = await result.json()
        updateSearchData(searchData)
      }
    } catch (error) {
      alert(error)
    } finally { setIsDisabled(false) }
  }

  const handleSearch = (e) => {
    searchWord(e)
  }

  return (
    <div className="app">
      <SearchComponent isDisabled={isDisabled} handleSearch={handleSearch} />
      <div className='content-container'>
        <div className='column-left'><SearchResultComponent data={searchData} /></div>
        <div className='column-right'><TrendingComponent /></div>
      </div>
      <FooterComponent/>
    </div>
  );
}

export default App;
