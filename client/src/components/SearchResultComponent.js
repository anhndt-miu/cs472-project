import WordComponent from './WordComponent.js'

function SearchResultComponent({ data }) {
    return (
        <div >
            {(!data || data.length === 0) ? null : (
                <div className='search-result-container'>
                    <h1>Search Result({data.length})</h1>
                    {data.map((item) => (
                        <div key={item._id}>
                            <WordComponent data={item} />
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default SearchResultComponent;