import { useState, useEffect } from 'react'

function SearchComponent({ isDisabled, handleSearch }) {

    const [keyword, setKeyword] = useState("")
    const hints = ["What's on your mind?", "What are you looking for?", "Type your key word", "Need help?"];
    const [currentHint, setCurrentHint] = useState(hints[0]);
    const hintChangeInterval = 3000;

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentHint(prevHint => {
                const currentIndex = hints.indexOf(prevHint);
                const nextIndex = (currentIndex + 1) % hints.length;
                return hints[nextIndex];
            });
        }, hintChangeInterval);


        return () => clearInterval(intervalId);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (keyword.length != 0) {
            handleSearch(keyword)
            setKeyword("")
        } else {
            // Nothing
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className='search-box-container'>
                <div className="trending-box">
                    <input className='search-box'
                        value={keyword} type='string'
                        onChange={(e) => setKeyword(e.target.value)}
                        placeholder={currentHint}
                    />
                    <button className="explore-btn" type='submit' disabled={isDisabled} >Lookup</button>
                </div>
            </div>
        </form>
    )
}

export default SearchComponent;