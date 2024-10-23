
import './App.css';
import { useState } from 'react';

import TrendingComponent from './components/TrendingComponent.js'
import SearchComponent from './components/SearchComponent.js'
import SearchResultComponent from './components/SearchResultComponent.js'

import FooterComponent from './components/FooterComponent.js';
import HintComponent from './components/HintComponent.js';

function App() {
  const [searchData, updateSearchData] = useState('')
  const [isDisabled, setIsDisabled] = useState(false)
  const [isError, setError] = useState(false)

  const apiUrl = process.env.REACT_APP_API_URL;
  
  async function searchWord(keyword) {
    try {
      setIsDisabled(true)
      const result = await fetch(`${apiUrl}/word?q=${keyword}`)
      if (!result.ok) {
        throw new Error('Error')
      } else {
        const searchData = await result.json()
        setError(false)
        updateSearchData(searchData)
      }
    } catch (error) {
      setError(true)
    } finally { setIsDisabled(false) }
  }

  const handleSearch = (e) => {
    searchWord(e)
  }

  return (
    <div className="app">
      <SearchComponent isDisabled={isDisabled} handleSearch={handleSearch} />
      <div className='content-container'>
        <div className='column-left'> {(isError) ? <HintComponent message='Something went wrong!' /> : <SearchResultComponent data={searchData} />}</div>
        <div className='column-right'><TrendingComponent /></div>
      </div>
      <FooterComponent />
    </div>
  );
}

export default App;
