import { useState } from 'react'

function SearchComponent({ isDisabled, handleSearch }) {

    const [keyword, setKeyword] = useState("")

    const onSearchButtonClick = (e) => {
        e.preventDefault();
        if (keyword.length != 0) {
            handleSearch(keyword)
            setKeyword("")
        } else {
            // Nothing
        }
    }

    return (
        <div className='search-box-container'>
            <div className="trending-box">
                <input className='search-box'
                    value={keyword} type='string'
                    onChange={(e) => setKeyword(e.target.value)}
                    placeholder="What are you looking for?"
                />
                <button className="explore-btn" onClick={onSearchButtonClick} disabled={isDisabled} >Lookup</button>
            </div>
        </div>
    )
}

export default SearchComponent;